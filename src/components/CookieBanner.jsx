import { useEffect, useState } from 'react';

const STORAGE_KEY = 'terranovarealty-cookie-consent';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite">
      <p>
        TerraNova Realty uses cookies to enhance your advisory experience and understand portfolio interests. Review our{' '}
        <a href="#privacy">Privacy</a> commitment to learn more.
      </p>
      <button className="btn" type="button" onClick={handleAccept}>
        Accept & Continue
      </button>
    </div>
  );
};

export default CookieBanner;
