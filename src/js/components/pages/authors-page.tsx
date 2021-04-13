import * as React from "react";
import Authors from "../authors";

const test = [
  {
    id: `1`,
    name: `Leanne Graham`,
  },
  {
    id: `2`,
    name: `Leanne Graham1`,
  },
  {
    id: `3`,
    name: `Leanne Graham2`,
  },
  {
    id: `4`,
    name: `Leanne Graham3`,
  },
];

const AuthorsPage:React.FunctionComponent = () => {
  return (
    <div className="container">
      <main className="page-authors">
        <h1 className="page-authors__header">Photo gallery</h1>
        <Authors authors={test}/>
      </main>
    </div>
  );
};

export default AuthorsPage;
