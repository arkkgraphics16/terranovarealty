import { useState } from 'react';

const navItems = [
  { href: '#hero', label: 'Home' },
  { href: '#offerings', label: 'Offerings' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#hero" aria-label="TerraNova Realty home">
          <span className="header__brand-mark" aria-hidden="true">
            TN
          </span>
          <div className="header__brand-text">
            <span className="header__brand-name">TerraNova Realty</span>
            <span className="header__brand-tagline">Land Stewardship Advisors</span>
          </div>
        </a>
        <nav className={`header__nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__cta-group">
          <a className="btn btn--ghost" href="https://m.me/TerraNovaRealtyPH" target="_blank" rel="noreferrer">
            Messenger
          </a>
          <a className="btn" href="#contact">
            Book a Consultation
          </a>
        </div>
        <button
          className={`header__menu ${open ? 'is-open' : ''}`}
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
