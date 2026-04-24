import ThemeLogo from "./ThemeLogo";

export default function AppLoadingScreen() {
  return (
    <div
      className="app-loading-screen"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div
        aria-hidden="true"
        className="app-loading-screen__glow app-loading-screen__glow--primary"
      />
      <div
        aria-hidden="true"
        className="app-loading-screen__glow app-loading-screen__glow--accent"
      />

      <div className="app-loading-screen__panel">
        <div className="app-loading-screen__logo">
          <ThemeLogo
            mode="auto"
            priority
            sizes="(max-width: 640px) 180px, 220px"
            wrapperClassName="mx-auto w-[180px] sm:w-[220px]"
          />
        </div>

        <div className="app-loading-screen__spinner" aria-hidden="true" />

        <p className="app-loading-screen__eyebrow">Loading</p>
        <h2 className="app-loading-screen__title">Preparing your next view</h2>
        <p className="app-loading-screen__text">
          Fetching content, finishing layout, and keeping navigation smooth.
        </p>

        <div className="app-loading-screen__meter" aria-hidden="true">
          <div className="app-loading-screen__meter-fill" />
        </div>
      </div>
    </div>
  );
}
