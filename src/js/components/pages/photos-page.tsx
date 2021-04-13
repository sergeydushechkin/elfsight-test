import * as React from "react";

import HeaderNav from "../header-nav";
import PhotosAlbum from "../photos-album";
import Photos from "../photos";
import Preview from "../preview";

const navItems = [
  {
    name: `Authors`,
    link: `./index.html`,
  },
  {
    name: `Albums`,
    link: `./albums.html`,
  },
  {
    name: `Photos`,
    link: `.`,
  },
];

const photosList = [
  {
    image: `./img/image.jpg`,
    thumbnail: `./img/thumbnail.jpg`,
    alt: `accusamus beatae ad facilis cum similique qui sunt`,
  },
  {
    image: `./img/image.jpg`,
    thumbnail: `./img/thumbnail.jpg`,
    alt: `accusamus beatae ad facilis cum similique qui sunt`,
  },
  {
    image: `./img/image.jpg`,
    thumbnail: `./img/thumbnail.jpg`,
    alt: `accusamus beatae ad facilis cum similique qui sunt`,
  },
  {
    image: `./img/image.jpg`,
    thumbnail: `./img/thumbnail.jpg`,
    alt: `accusamus beatae ad facilis cum similique qui sunt`,
  },
  {
    image: `./img/image.jpg`,
    thumbnail: `./img/thumbnail.jpg`,
    alt: `accusamus beatae ad facilis cum similique qui sunt`,
  },
];

interface Props {
  match: {
    params: {
      album: string;
      author: string;
    };
  };
}

const PhotosPage:React.FunctionComponent<Props> = () => {

  return (
    <div className="container">
      <header className="page-header">
        <HeaderNav items={navItems} />
      </header>
      <main className="page-photos">
        <h1 className="visually-hidden">Photos</h1>
        <PhotosAlbum image={`./img/thumbnail.jpg`} albumName={`quidem molestiae enim`} authorName={`Leanne Graham`} />
        <Photos photos={photosList} />
      </main>

      <Preview image={`./img/image.jpg`} text={`accusamus beatae ad facilis cum similique qui sunt`} authorName={`Leanne Graham`} avatar={`./img/avatar.jpg`}/>
    </div>
  );
};

export default PhotosPage;
