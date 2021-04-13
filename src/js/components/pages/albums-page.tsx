import * as React from "react";

import HeaderNav from "../header-nav";
import AlbumAuthor from "../album-author";
import Albums from "../albums";

const navItems = [
  {
    name: `Authors`,
    link: `./index.html`,
  },
  {
    name: `Albums`,
    link: `.`,
  },
];

const albumsList = [
  {
    link: `./photos.html`,
    image: `./img/thumbnail.jpg`,
    authorName: `Username`,
    albumName: `quidem molestiae enim`,
    photosCount: `10`,
  },
  {
    link: `./photos.html`,
    image: `./img/thumbnail.jpg`,
    authorName: `Username`,
    albumName: `quidem molestiae enim`,
    photosCount: `10`,
  },
  {
    link: `./photos.html`,
    image: `./img/thumbnail.jpg`,
    authorName: `Username`,
    albumName: `quidem molestiae enim`,
    photosCount: `10`,
  },
  {
    link: `./photos.html`,
    image: `./img/thumbnail.jpg`,
    authorName: `Username`,
    albumName: `quidem molestiae enim`,
    photosCount: `10`,
  },
];

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
        <HeaderNav items={navItems} />
      </header>
      <main className="page-albums">
        <h1 className="visually-hidden">Albums</h1>
        <AlbumAuthor name={`Leanne Graham`} avatar={`./img/avatar.jpg`} city={`Wisokyburgh`} albumsCount={`10`} />
        <Albums albums={albumsList} />
      </main>
    </div>
  );
};

export default AlbumsPage;
