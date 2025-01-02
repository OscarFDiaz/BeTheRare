import './NavItem.css';

interface Props {
  anchor: string;
  content: string;
}

export const NavItem = ({ anchor, content }: Props) => {
  return (
    <li>
      <a href={anchor} className="list__anchor">
        {content}
      </a>
    </li>
  );
};
