import { useState } from 'react';

const CTASticky = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="cta-sticky" role="complementary" aria-label="Consultation quick actions">
      <div className="cta-sticky__body">
        <p className="cta-sticky__text">Ready to map your next land stewardship move?</p>
        <p className="cta-sticky__support">
          Connect with TerraNova advisors for a bespoke consultation or speak with our team right away.
        </p>
        <div className="cta-sticky__actions">
          <a className="btn" href="#contact">
            📅 Schedule a Consultation
          </a>
          <a className="btn btn--ghost" href="tel:+639178801122">
            📞 +63 917 880 1122
          </a>
        </div>
      </div>
      <button
        className="cta-sticky__dismiss"
        type="button"
        onClick={() => setIsVisible(false)}
        aria-label="Hide consultation banner"
      >
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
};

export default CTASticky;
