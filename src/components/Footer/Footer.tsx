import NavLinks from '../../helpers/navigation.json';

import './Footer.css';

import TIKTOK from '/Tiktok.svg';
import INSTAGRAM from '/Instagram.svg';
import BETHERARE from '/BeTheRare_Horizontal.svg';

type Link = {
  anchor: string;
  content: string;
};

export const Footer = () => {
  const links: { [key: string]: Link } = NavLinks;

  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__nav">
          <picture className="footer__picture">
            <img src={BETHERARE} alt="Logo" loading="lazy" />
          </picture>
          <ul className="footer__nav-ul">
            {Object.keys(links).map((key) => {
              const current = links[key];

              return (
                <li key={key} className="footer__nav-li">
                  <a href={current.anchor}>{current.content}</a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="footer__divider"></div>
        <nav className="footer__nav footer__nav--brands">
          <ul className="footer__nav-ul">
            <li className="footer__nav-li">
              <a
                href="https://www.tiktok.com/@betherare.store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={TIKTOK} alt="Tiktok" loading="lazy" style={{ width: '25px' }} />
              </a>
            </li>
            <li className="footer__nav-li">
              <a
                href="https://www.instagram.com/betherare.store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={INSTAGRAM}
                  alt="Instagram"
                  loading="lazy"
                  style={{ width: '25px' }}
                />
              </a>
            </li>
          </ul>
          <h2 className="footer__thanks">
            Made with 💖 for me to me an <b style={{ fontWeight: 700 }}>everyone</b>
          </h2>
        </nav>
      </div>
    </footer>
  );
};
