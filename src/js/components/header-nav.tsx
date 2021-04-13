import * as React from "react";
import {Link} from "react-router-dom";

interface MenuItems {
  name: string;
  link: string;
}

interface Props {
  items: Array<MenuItems>
}

const HeaderNav:React.FunctionComponent<Props> = (props: Props) => {
  const {items} = props;
  const last = items.length - 1;

  return (
    <React.Fragment>
      <nav className="page-header__nav-full nav-full">
        <ul className="nav-full__list">
          {
            items.map((item, index) => {
              const {name, link} = item;
              return (
                <li key={name} className="nav-full__item">
                  {index === last
                    ? <a className="nav-full__link nav-full__link--inactive">{name}</a>
                    : <Link className="nav-full__link nav-full__link--active" to={link}>{name}</Link>
                  }
                </li>
              );
            })
          }
        </ul>
      </nav>
      <nav className="page-header__nav-mobile nav-mobile">
        <Link className="nav-mobile__link" to={items[last - 1].link}>
          <div className="nav-mobile__name">{items[last - 1].name}</div>
        </Link>
      </nav>
    </React.Fragment>
  );
};

export default HeaderNav;
