import * as React from "react";

interface Props {
  match: {
    params: {
      album: string;
      author: string;
    };
  };
}

const PhotosPage:React.FunctionComponent<Props> = (props: Props) => {

  return (
    <div className="container">
      <header className="page-header">
        <nav className="page-header__nav-full nav-full">
          <ul className="nav-full__list">
            <li className="nav-full__item">
              <a className="nav-full__link nav-full__link--active" href="./index.html">Authors</a>
            </li>
            <li className="nav-full__item">
              <a className="nav-full__link nav-full__link--active" href="./albums.html">Albums</a>
            </li>
            <li className="nav-full__item">
              <a className="nav-full__link nav-full__link--inactive">Photos</a>
            </li>
          </ul>
        </nav>
        <nav className="page-header__nav-mobile nav-mobile">
          <a className="nav-mobile__link" href="./albums.html">
            <div className="nav-mobile__name">Albums</div>
          </a>
        </nav>
      </header>
      <main className="page-photos">
        <h1 className="visually-hidden">Photos</h1>
        <section className="page-photos__album-cover album-cover">
          <h2 className="visually-hidden">Author</h2>
          <div className="album-cover__image--container">
            <img className="album-cover__image" src="./img/thumbnail.jpg" width="187" height="187" alt="Username"/>
          </div>
          <div className="album-cover__description">
            <h3 className="album-cover__header">
              quidem molestiae enim
              <span className="album-cover__author-name">Author: Leanne Graham</span>
            </h3>
          </div>
        </section>
        <section className="page-photos__photos photos">
          <h2 className="visually-hidden">Photos list</h2>
          <ul className="photos__list">
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
            <li className="photos__item photo">
              <a className="photo__link" href="./img/image.jpg">
                <div className="photo__image-container">
                  <img className="photo__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </main>

      <section className="page-preview preview preview--inactive">
        <h2 className="visually-hidden">Photo preview</h2>
        <div className="preview__background">
          <figure className="preview__cover">
            <div className="preview__image-container">
              <img className="preview__image" src="./img/image.jpg" width="2142" height="1345" alt="Username"/>
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
                <img className="preview__author-image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
              </div>
              <h3 className="preview__header"><span className="preview__author-name">Leanne Graham</span>accusamus beatae ad facilis cum similique qui sunt</h3>
            </figcaption>
          </figure>
          <div className="preview__close preview-close" tabIndex={0}>
            <span className="visually-hidden">Close</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotosPage;
