export function Header() {
  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href="#" aria-label="Vertex Markets home">
        <svg className="brand-mark" viewBox="0 0 44 44" aria-hidden="true">
          <path d="M5 4 22 39 39 4l-8 4-9 18L13 8 5 4Z" />
          <path d="M15 4h7l-4 8-3-8Zm14 0h-7l4 8 3-8Z" />
        </svg>
        <span className="brand-text">
          <span>VERTEX</span>
          <small>MARKETS</small>
        </span>
      </a>

      <nav className="nav-links" aria-label="Main menu">
        <a href="#">Trading</a>
        <a href="#">Platforms</a>
        <a href="#">Markets</a>
        <a href="#">Resources</a>
        <a href="#">Company</a>
        <a href="#">Partners</a>
      </nav>

      <div className="header-actions">
        <a className="btn btn-ghost" href="#">
          Login
        </a>
        <a className="btn btn-primary" href="#">
          Get Started
        </a>
      </div>
    </header>
  );
}
