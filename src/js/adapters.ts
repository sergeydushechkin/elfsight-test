import {Author, Album, Photo} from "./types";

interface User {
  id: string;
  name: string;
  address: {
    city: string;
  }
}

interface AlbumData {
  id: string;
  userId: string;
  title: string;
}

interface PhotoData {
  id: string;
  albumId: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const createAuthor = (data: User):Author => {
  return {
    id: String(data.id),
    name: data.name,
    city: data.address.city,
  };
};

const createAlbum = (data: AlbumData):Album => {
  return {
    id: String(data.id),
    userId: String(data.userId),
    title: data.title,
  };
};

const createPhoto = (data: PhotoData):Photo => {
  return {
    albumId: data.albumId,
    id: data.id,
    title: data.title,
    url: data.url,
    thumbnailUrl: data.thumbnailUrl,
  };
};

export {createAuthor, createAlbum, createPhoto};
