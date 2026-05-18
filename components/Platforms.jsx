function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function Platforms() {
  return (
    <section className="platform-section" aria-labelledby="platform-title">
      <div className="platform-art" aria-hidden="true">
        <img src="/assets/platform-devices.jpg" alt="" width="430" height="286" loading="lazy" />
      </div>

      <div className="platform-copy">
        <p className="eyebrow">POWERFUL. FLEXIBLE. ADVANCED.</p>
        <h2 id="platform-title">
          Trading Platforms
          <br />
          Built for Performance
        </h2>
        <p className="platform-body">
          Experience next-level trading on our advanced platforms. Available on web, desktop, and mobile.
        </p>

        <div className="platform-options" aria-label="Platform options">
          <article>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
            </svg>
            <span>
              Web Trader<small>Access Anywhere</small>
            </span>
          </article>
          <article>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5" width="16" height="11" rx="1" />
              <path d="M9 20h6M12 16v4" />
            </svg>
            <span>
              Desktop<small>Windows &amp; Mac</small>
            </span>
          </article>
          <article>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="8" y="3" width="8" height="18" rx="1.5" />
              <path d="M11 18h2" />
            </svg>
            <span>
              Mobile App<small>iOS &amp; Android</small>
            </span>
          </article>
        </div>

        <a className="btn btn-primary platform-btn" href="#">
          <span>Explore Platforms</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
