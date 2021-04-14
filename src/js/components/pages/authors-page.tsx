import * as React from "react";
import {useSelector} from "react-redux";

import {getAuthors} from "../../reducer/selectors.js";

import Authors from "../authors";

const AuthorsPage:React.FunctionComponent = () => {
  const authorsData = useSelector(getAuthors);

  return (
    <div className="container">
      <main className="page-authors">
        <h1 className="page-authors__header">Photo gallery</h1>
        <Authors authors={authorsData}/>
      </main>
    </div>
  );
};

export default AuthorsPage;
