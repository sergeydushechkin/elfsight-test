import * as React from "react";

interface Props {
  image: string;
  text: string;
  authorName: string;
  avatar: string;
}

const Preview:React.FunctionComponent<Props> = (props: Props) => {
  const {image, text, authorName, avatar} = props;

  const [show, setShow] = React.useState(true);

  return (
    <section className={`page-preview preview${!show ? ` preview--inactive` : ``}`}>
      <h2 className="visually-hidden">Photo preview</h2>
      <div className="preview__background">
        <figure className="preview__cover">
          <div className="preview__image-container">
            <img className="preview__image" src={image} width="2142" height="1345" alt={text}/>
          </div>
          <div className="preview__nav preview-nav">
            <ul className="preview-nav__buttons">
              <li className="preview-nav__button preview-nav__button--back" tabIndex={0}>
                <span className="visually-hidden">Back</span>
              </li>
              <li className="preview-nav__button preview-nav__button--forward" tabIndex={0}>
                <span className="visually-hidden">Forward</span>
              </li>
            </ul>
          </div>
          <figcaption className="preview__caption">
            <div className="preview__author">
              <img className="preview__author-image" src={avatar} width="187" height="187" alt={authorName}/>
            </div>
            <h3 className="preview__header"><span className="preview__author-name">{authorName}</span>{text}</h3>
          </figcaption>
        </figure>
        <div onClick={() => setShow(false)} className="preview__close preview-close" tabIndex={0}>
          <span className="visually-hidden">Close</span>
        </div>
      </div>
    </section>
  );
};

export default Preview;
