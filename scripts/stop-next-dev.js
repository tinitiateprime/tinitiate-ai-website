const fs = require("fs");
const path = require("path");
const { execFileSync, spawnSync } = require("child_process");

const projectRoot = process.cwd();
const projectNeedle = projectRoot.toLowerCase();
const lockPath = path.join(projectRoot, ".next", "dev", "lock");

function run(command, args) {
  try {
    return execFileSync(command, args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return "";
  }
}

function getWindowsNodeProcesses() {
  const command =
    "Get-CimInstance Win32_Process -Filter \"Name = 'node.exe'\" | " +
    "Select-Object ProcessId,CommandLine | ConvertTo-Json -Compress";
  const output = run("powershell", ["-NoProfile", "-Command", command]).trim();
  if (!output) return [];

  try {
    const parsed = JSON.parse(output);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch {
    return [];
  }
}

function getUnixNodeProcesses() {
  const output = run("sh", ["-c", "ps -eo pid=,command= | grep node || true"]);
  return output
    .split(/\r?\n/)
    .map((line) => {
      const match = line.trim().match(/^(\d+)\s+(.+)$/);
      return match ? { ProcessId: Number(match[1]), CommandLine: match[2] } : null;
    })
    .filter(Boolean);
}

function getProjectNextPids() {
  const processes =
    process.platform === "win32" ? getWindowsNodeProcesses() : getUnixNodeProcesses();

  return processes
    .filter((entry) => {
      const commandLine = String(entry.CommandLine || "").toLowerCase();
      return (
        commandLine.includes(projectNeedle) &&
        commandLine.includes("next") &&
        commandLine.includes("dev")
      );
    })
    .map((entry) => Number(entry.ProcessId))
    .filter((pid) => Number.isInteger(pid) && pid > 0 && pid !== process.pid);
}

function stopPid(pid) {
  if (process.platform === "win32") {
    spawnSync("taskkill", ["/PID", String(pid), "/T", "/F"], {
      stdio: "ignore",
    });
    return;
  }

  try {
    process.kill(pid, "SIGTERM");
  } catch {}
}

const pids = new Set(getProjectNextPids());

for (const pid of pids) {
  stopPid(pid);
}

if (pids.size > 0) {
  console.log(`Stopped old Next dev server: ${[...pids].join(", ")}`);
}

if (fs.existsSync(lockPath)) {
  try {
    fs.unlinkSync(lockPath);
  } catch {}
}
