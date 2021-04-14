import * as React from "react";
import {Link} from "react-router-dom";

interface AlbumsList {
  id: string;
  userId: string;
  title: string;
}

interface Props {
  albums: Array<AlbumsList>,
  cover: string;
}

const Albums:React.FunctionComponent<Props> = (props: Props) => {
  const {albums, cover} = props;

  return (
    <section className="page-albums__albums albums">
      <h2 className="visually-hidden">Albums list</h2>
      <ul className="albums__list">
        {
          albums.map((album) => {
            const {id, userId, title} = album;
            return (
              <li key={id} className="albums__item album">
                <Link className="album__link" to={`${userId}/${id}`}>
                  <figure className="album__cover">
                    <div className="album__image-container">
                      <img className="album__image" src={cover} width="300" height="300" alt={title}/>
                    </div>
                    <figcaption className="album__caption">
                      <h3 className="album__header">{title}</h3>
                      <p className="album__count"><span className="album__count-description">photos: </span>{10}</p>
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
