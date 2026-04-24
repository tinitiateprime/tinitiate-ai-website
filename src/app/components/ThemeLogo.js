import Image from "next/image";

const LOGO_BLACK_PATH = "/images/Tinitiatelogo_black.png";
const LOGO_WHITE_PATH = "/images/Tinitiatelogo_white.png";
const LOGO_WIDTH = 904;
const LOGO_HEIGHT = 108;

function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ThemeLogo({
  alt = "Tinitiate AI Solutions Logo",
  mode = "auto",
  priority = false,
  sizes = "100vw",
  wrapperClassName = "",
  imageClassName = "",
}) {
  const blackVisibilityClass =
    mode === "dark"
      ? "opacity-0"
      : mode === "light"
        ? "opacity-100"
        : "opacity-100 dark:opacity-0";

  const whiteVisibilityClass =
    mode === "dark"
      ? "opacity-100"
      : mode === "light"
        ? "opacity-0"
        : "opacity-0 dark:opacity-100";

  return (
    <span
      role="img"
      aria-label={alt}
      className={joinClasses("relative block", wrapperClassName)}
    >
      <Image
        src={LOGO_BLACK_PATH}
        alt=""
        aria-hidden
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        sizes={sizes}
        className={joinClasses(
          "h-auto w-full object-contain transition-opacity duration-300 motion-reduce:transition-none",
          imageClassName,
          blackVisibilityClass,
        )}
      />
      <Image
        src={LOGO_WHITE_PATH}
        alt=""
        aria-hidden
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        sizes={sizes}
        className={joinClasses(
          "pointer-events-none absolute inset-0 h-full w-full object-contain transition-opacity duration-300 motion-reduce:transition-none",
          imageClassName,
          whiteVisibilityClass,
        )}
      />
    </span>
  );
}
