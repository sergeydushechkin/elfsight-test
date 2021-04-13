import * as React from "react";
import Authors from "../authors";

const AuthorsPage:React.FunctionComponent = () => {
  return (
    <div className="container">
      <main className="page-authors">
        <h1 className="page-authors__header">Photo gallery</h1>
        <Authors />
      </main>
    </div>
  );
};

export default AuthorsPage;
