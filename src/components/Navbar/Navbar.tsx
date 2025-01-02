import NavLinks from '../../helpers/navigation.json';
import { NavItem } from './NavItem';

import './Navbar.css';

import BETHERARE from '/BeTheRare.svg';

type Link = {
  anchor: string;
  content: string;
};

export const Navbar = () => {
  const links: { [key: string]: Link } = NavLinks;

  return (
    <nav className="navigator">
      <div className="navigator__container">
        <picture className="navigator__picture">
          <img src={BETHERARE} alt="Logo" loading="lazy" />
        </picture>

        <ul className="navigator__list">
          {Object.keys(links).map((key) => {
            const current = links[key];
            return (
              <NavItem key={key} anchor={current.anchor} content={current.content} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
