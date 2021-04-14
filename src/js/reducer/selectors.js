import {Author, Album, Photo} from "../types";
import {State} from "./reducer";

const getAuthors = (state: State):Array<Author> => {
  return state.authors;
};

const getAlbums = (state: State):Array<Album> => {
  return state.albums;
};

const getPhotos = (state: State):Array<Photo> => {
  return state.photos;
};

export {getAuthors, getAlbums, getPhotos};
