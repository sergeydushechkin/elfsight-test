import * as React from "react";

interface Props {
  name: string;
  avatar: string;
  city: string;
  albumsCount: string;
}

const AlbumAuthor:React.FunctionComponent<Props> = (props: Props) => {
  const {name, avatar, city, albumsCount} = props;

  return (
    <section className="page-albums__album-author album-author">
      <h2 className="visually-hidden">Author</h2>
      <div className="album-author__avatar">
        <img className="album-author__image" src={avatar} width="187" height="187" alt={name}/>
      </div>
      <div className="album-author__description">
        <h3 className="album-author__header">
          {name}
          <span className="album-author__city">{city}</span>
          <span className="album-author__count">Albums: {albumsCount}</span>
        </h3>
      </div>
    </section>
  );
};

export default AlbumAuthor;
