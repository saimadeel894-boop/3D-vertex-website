function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function ClosingCta() {
  return (
    <section className="closing-cta" id="get-started" aria-labelledby="closing-title">
      <div>
        <h2 id="closing-title">Ready to Elevate Your Trading?</h2>
        <p>Join Vertex Markets today and trade the world's markets with confidence, technology, and transparency.</p>
      </div>
      <div className="closing-actions">
        <a className="btn btn-primary hero-cta" href="#get-started">
          <span>Get Started</span>
          <ArrowIcon />
        </a>
        <a href="#platforms">or Try Demo Account</a>
      </div>
      <img src="/assets/cta-v-mark.jpg" alt="" width="272" height="153" loading="lazy" aria-hidden="true" />
    </section>
  );
}
