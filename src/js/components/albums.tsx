import * as React from "react";
import {Link} from "react-router-dom";

interface AlbumsList {
  link: string;
  image: string;
  authorName: string;
  albumName: string;
  photosCount: string;
}

interface Props {
  albums: Array<AlbumsList>
}

const Albums:React.FunctionComponent<Props> = (props: Props) => {
  const {albums} = props;

  return (
    <section className="page-albums__albums albums">
      <h2 className="visually-hidden">Albums list</h2>
      <ul className="albums__list">
        {
          albums.map((album) => {
            const {link, image, authorName, albumName, photosCount} = album;
            return (
              <li key={link} className="albums__item album">
                <Link class="album__link" to={link}>
                  <figure className="album__cover">
                    <div className="album__image-container">
                      <img className="album__image" src={image} width="300" height="300" alt={authorName}/>
                    </div>
                    <figcaption className="album__caption">
                      <h3 className="album__header">{albumName}</h3>
                      <p className="album__count"><span className="album__count-description">photos: </span>{photosCount}</p>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Albums;
