import * as React from "react";

const Author:React.FunctionComponent = () => {
  return (
    <li className="authors__author author">
      <a className="author__link" href="./albums.html">
        <img className="author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
        <h2 className="author__name">Leanne Graham</h2>
      </a>
    </li>
  );
};

export default Author;
