import * as React from "react";

import Author from "./author";

interface AuthorData {
  id: string;
  name: string;
}

interface Props {
  authors: Array<AuthorData>
}

const Authors:React.FunctionComponent<Props> = (props: Props) => {
  const {authors} = props;

  return (
    <section className="page-authors__authors authors">
      <h2 className="visually-hidden">Authors</h2>
      <ul className="authors__list">
        {
          authors.map((author) => {
            return (
              <Author key={author.id} id={author.id} name={author.name} avatar={`./img/avatar.png`}/>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Authors;
