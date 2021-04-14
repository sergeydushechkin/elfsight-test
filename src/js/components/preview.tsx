import * as React from "react";

import {Photo} from "../types";
import {changeIndex} from "../utils";

interface Props {
  photos: Array<Photo>;
  index: number;
  authorName: string;
  avatar: string;
  onCloseClick: (bool) => void;
}

const Preview:React.FunctionComponent<Props> = (props: Props) => {
  const {photos, index, authorName, avatar, onCloseClick} = props;
  const [activeIndex, setActiveIndex] = React.useState(index);
  const {title, url} = photos[activeIndex];

  return (
    <section className={`page-preview preview`}>
      <h2 className="visually-hidden">Photo preview</h2>
      <div className="preview__background">
        <figure className="preview__cover">
          <div className="preview__image-container">
            <img className="preview__image" src={url} width="2142" height="1345" alt={title}/>
          </div>
          <div className="preview__nav preview-nav">
            <ul className="preview-nav__buttons">
              <li onClick={() => setActiveIndex(changeIndex.dec(photos.length, activeIndex))} className="preview-nav__button preview-nav__button--back" tabIndex={0}>
                <span className="visually-hidden">Back</span>
              </li>
              <li onClick={() => setActiveIndex(changeIndex.inc(photos.length, activeIndex))} className="preview-nav__button preview-nav__button--forward" tabIndex={0}>
                <span className="visually-hidden">Forward</span>
              </li>
            </ul>
          </div>
          <figcaption className="preview__caption">
            <div className="preview__author">
              <img className="preview__author-image" src={avatar} width="187" height="187" alt={authorName}/>
            </div>
            <h3 className="preview__header"><span className="preview__author-name">{authorName}</span>{title}</h3>
          </figcaption>
        </figure>
        <div onClick={() => onCloseClick(false)} className="preview__close preview-close" tabIndex={0}>
          <span className="visually-hidden">Close</span>
        </div>
      </div>
    </section>
  );
};

export default Preview;
