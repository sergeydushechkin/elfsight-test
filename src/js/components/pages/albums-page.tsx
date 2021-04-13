import * as React from "react";

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

const AlbumsPage:React.FunctionComponent<Props> = (props: Props) => {

  return (
    <div className="container">
      <header className="page-header">
        <nav className="page-header__nav-full nav-full">
          <ul className="nav-full__list">
            <li className="nav-full__item">
              <a className="nav-full__link nav-full__link--active" href="./index.html">Authors</a>
            </li>
            <li className="nav-full__item">
              <a className="nav-full__link nav-full__link--inactive">Albums</a>
            </li>
          </ul>
        </nav>
        <nav className="page-header__nav-mobile nav-mobile">
          <a className="nav-mobile__link" href="./index.html">
            <div className="nav-mobile__name">Authors</div>
          </a>
        </nav>
      </header>
      <main className="page-albums">
        <h1 className="visually-hidden">Albums</h1>
        <section className="page-albums__album-author album-author">
          <h2 className="visually-hidden">Author</h2>
          <div className="album-author__avatar">
            <img className="album-author__image" src="./img/avatar.jpg" width="187" height="187" alt="Username"/>
          </div>
          <div className="album-author__description">
            <h3 className="album-author__header">
              Leanne Graham
              <span className="album-author__city">Wisokyburgh</span>
              <span className="album-author__count">Albums: 10</span>
            </h3>
          </div>
        </section>
        <section className="page-albums__albums albums">
          <h2 className="visually-hidden">Albums list</h2>
          <ul className="albums__list">
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
            <li className="albums__item album">
              <a className="album__link" href="./photos.html">
                <figure className="album__cover">
                  <div className="album__image-container">
                    <img className="album__image" src="./img/thumbnail.jpg" width="300" height="300" alt="Username"/>
                  </div>
                  <figcaption className="album__caption">
                    <h3 className="album__header">quidem molestiae enim</h3>
                    <p className="album__count"><span className="album__count-description">photos: </span>10</p>
                  </figcaption>
                </figure>
              </a>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AlbumsPage;
