import {Author, Album, Photo} from "../types";
import {createAuthor, createAlbum, createPhoto} from "../adapters";

interface State {
  authors: Array<Author>;
  albums: Array<Album>;
  photos: Array<Photo>;
}

interface Action {
 type: string;
 payload: Array<Author> | Array<Album> | Array<Photo>;
}

const initialState: State = {
  authors: [],
  albums: [],
  photos: [],
};

const ActionType = {
  LOAD_AUTHORS: `LOAD_AUTHORS`,
  LOAD_ALBUMS: `LOAD_ALBUMS`,
  LOAD_PHOTOS: `LOAD_PHOTOS`,
};

const ActionCreator = {
  loadAuthors: (data: Array<Author>): Action => ({
    type: ActionType.LOAD_AUTHORS,
    payload: data,
  }),
  loadAlbums: (data: Array<Album>): Action => ({
    type: ActionType.LOAD_ALBUMS,
    payload: data,
  }),
  loadPhotos: (data: Array<Photo>): Action => ({
    type: ActionType.LOAD_PHOTOS,
    payload: data,
  }),
};

const Operation = {
  loadAuthors: () => (dispatch, getState, api) => {
    return api.get(`/users`)
      .then((response) => {
        const loadedData = response.data.map((data) => createAuthor(data));
        dispatch(ActionCreator.loadAuthors(loadedData));
        return loadedData;
      });
  },
  loadAlbums: (id: string) => (dispatch, getState, api) => {
    return api.get(`/users/${id}/albums`)
      .then((response) => {
        const loadedData = response.data.map((data) => createAlbum(data));
        dispatch(ActionCreator.loadAlbums(loadedData));
        return loadedData;
      });
  },
  loadPhotos: (id: string) => (dispatch, getState, api) => {
    return api.get(`albums/${id}/photos`)
      .then((response) => {
        const loadedData = response.data.map((data) => createPhoto(data));
        dispatch(ActionCreator.loadPhotos(loadedData));
        return loadedData;
      });
  },
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LOAD_AUTHORS:
      return Object.assign({}, state, {authors: action.payload});
    case ActionType.LOAD_ALBUMS:
      return Object.assign({}, state, {albums: action.payload});
    case ActionType.LOAD_PHOTOS:
      return Object.assign({}, state, {photos: action.payload});
  }

  return state;
};

export {reducer, ActionCreator, Operation, ActionType};
