import * as React from "react";
import {Link} from "react-router-dom";

import {AppRoute} from "../const";

interface Props {
  id: string;
  name: string;
  avatar: string;
}

const Author:React.FunctionComponent<Props> = (props: Props) => {
  const {id, name, avatar} = props;

  return (
    <li className="authors__author author">
      <Link class="author__link" to={`${AppRoute.ALBUMS}/${id}`}>
        <img className="author__image" src={avatar} width="187" height="187" alt={name}/>
        <h2 className="author__name">{name}</h2>
      </Link>
    </li>
  );
};

export default Author;
