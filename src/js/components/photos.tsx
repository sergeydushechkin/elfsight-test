import * as React from "react";

interface PhotosList {
  image: string;
  thumbnail: string;
  alt: string;
}

interface Props {
  photos: Array<PhotosList>
}

const Photos:React.FunctionComponent<Props> = (props: Props) => {
  const {photos} = props;

  return (
    <section className="page-photos__photos photos">
      <h2 className="visually-hidden">Photos list</h2>
      <ul className="photos__list">
        {
          photos.map((photo) => {
            const {image, thumbnail, alt} = photo;
            return (
              <li key={thumbnail} className="photos__item photo">
                <a className="photo__link" href={image}>
                  <div className="photo__image-container">
                    <img className="photo__image" src={thumbnail} width="300" height="300" alt={alt}/>
                  </div>
                </a>
              </li>
            );
          })
        }
      </ul>
    </section>
  );
};

export default Photos;
