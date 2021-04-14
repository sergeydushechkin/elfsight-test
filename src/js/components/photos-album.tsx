import * as React from "react";

interface Props {
  image: string;
  albumName: string;
  authorName: string;
}

const PhotosAlbum:React.FunctionComponent<Props> = (props: Props) => {
  const {image, albumName, authorName} = props;

  return (
    <section className="page-photos__album-cover album-cover">
      <h2 className="visually-hidden">Author</h2>
      <div className="album-cover__image--container">
        <img className="album-cover__image" src={image} width="187" height="187" alt="Album cover"/>
      </div>
      <div className="album-cover__description">
        <h3 className="album-cover__header">
          {albumName}
          <span className="album-cover__author-name">Author: {authorName}</span>
        </h3>
      </div>
    </section>
  );
};

export default PhotosAlbum;
