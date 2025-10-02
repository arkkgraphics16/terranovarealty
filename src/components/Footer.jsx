const Footer = () => (
  <footer className="footer">
    <div className="footer__inner">
      <div className="footer__brand">
        <span className="footer__mark" aria-hidden="true">
          TN
        </span>
        <div>
          <p className="footer__name">TerraNova Realty</p>
          <p className="footer__tagline">Cultivating tomorrow’s landmark communities.</p>
          <p className="footer__licenses">PRC Lic. # 0000 | DHSUD # 0000</p>
        </div>
      </div>
      <div className="footer__nav">
        <h4>Navigate</h4>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#offerings">Offerings</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#sustainability">Sustainability</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#privacy">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="footer__contact">
        <h4>Connect</h4>
        <p>
          <a href="tel:+639178801122">+63 917 880 1122</a>
        </p>
        <p>
          <a href="mailto:advisors@terranovarealty.com">advisors@terranovarealty.com</a>
        </p>
        <p>8F Greenfield Tower, Makati City, Philippines</p>
        <p>
          <a href="https://m.me/TerraNovaRealtyPH" target="_blank" rel="noreferrer">
            Message us on Messenger
          </a>
        </p>
      </div>
    </div>
    <p className="footer__note">© {new Date().getFullYear()} TerraNova Realty. All rights reserved.</p>
  </footer>
);

export default Footer;
