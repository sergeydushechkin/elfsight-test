import * as React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../const";

const Authors:React.FunctionComponent = () => {
  return (
    <section className="page-authors__authors authors">
      <h2 className="visually-hidden">Authors</h2>
      <ul className="authors__list">
        <li className="authors__author author">
          <Link to={`${AppRoute.ALBUMS}/1`}>
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leannedsf Graham</h2>
          </Link>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
        <li className="authors__author author">
          <a className="author__link" href="./albums.html">
            <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
            <h2 className="author__name">Leanne Graham</h2>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Authors;
