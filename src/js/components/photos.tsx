import * as React from "react";
import {Photo} from "../types";

interface Props {
  photos: Array<Photo>;
  onClick: (number) => void;
}

const Photos:React.FunctionComponent<Props> = (props: Props) => {
  const {photos, onClick} = props;

  const onPhotoClick = React.useCallback((evt, index) => {
    evt.preventDefault();
    onClick(index);
  }, [onClick]);

  return (
    <section className="page-photos__photos photos">
      <h2 className="visually-hidden">Photos list</h2>
      <ul className="photos__list">
        {
          photos.map((photo, index) => {
            const {id, title, url, thumbnailUrl} = photo;
            return (
              <li key={id} className="photos__item photo">
                <a onClick={(evt) => onPhotoClick(evt, index)}className="photo__link" href={url}>
                  <div className="photo__image-container">
                    <img className="photo__image" src={thumbnailUrl} width="300" height="300" alt={title}/>
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
