import {createSelector} from "reselect";
import {Album, Author, Photo} from "../types";
import {State} from "./reducer";

const getAuthors = (state: State): Array<Author> => {
  return state.authors;
};

const getAlbums = (state: State): Array<Album> => {
  return state.albums;
};

const getPhotos = (state: State): Array<Photo> => {
  return state.photos;
};

const getId = (state: State, id: string) => {
  return id;
};

const getFilteredAuthor = createSelector(
    getAuthors,
    getId,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.id === resultTwo);
    }
);

const getFilteredAlbum = createSelector(
    getAlbums,
    getId,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.id === resultTwo);
    }
);


export {getAuthors, getAlbums, getPhotos, getFilteredAuthor, getFilteredAlbum};
