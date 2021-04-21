import {createSelector} from "reselect";

const getAuthors = (state) => {
  return state.authors;
};

const getAlbums = (state) => {
  return state.albums;
};

const getPhotos = (state) => {
  return state.photos;
};

const getId = (state, id) => {
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
