import {Dispatch} from "redux";

import {Author, Album, Photo} from "../types";
import {createAuthor} from "../adapters";
import {AxiosInstance, AxiosPromise} from "axios";

interface Action {
  type: string;
  payload: Array<Author> | Array<Album> | Array<Photo>;
}

interface State {
  authors: Array<Author>;
  albums: Array<Album>;
  photos: Array<Photo>;
}

const initialState:State = {
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
  loadAuthors: (data: Array<Author>):Action => ({
    type: ActionType.LOAD_AUTHORS,
    payload: data,
  }),
  loadAlbums: (data: Array<Album>):Action => ({
    type: ActionType.LOAD_ALBUMS,
    payload: data,
  }),
  loadPhotos: (data: Array<Photo>):Action => ({
    type: ActionType.LOAD_PHOTOS,
    payload: data,
  }),
};

const Operation = {
  loadAuthors: () => (dispatch: Dispatch, getState: State, api: AxiosInstance): AxiosPromise => {
    return api.get(`/users`)
      .then((response) => {
        const loadedAuthors = response.data.map((user) => createAuthor(user));
        dispatch(ActionCreator.loadAuthors(loadedAuthors));
        return loadedAuthors;
      });
  },
};

const reducer = (state = initialState, action: Action):State => {
  switch (action.type) {
    case ActionType.LOAD_AUTHORS:
      return Object.assign({}, state, {authors: action.payload});
      break;
    case ActionType.LOAD_ALBUMS:
      return Object.assign({}, state, {albums: action.payload});
      break;
    case ActionType.LOAD_PHOTOS:
      return Object.assign({}, state, {photos: action.payload});
      break;
  }

  return state;
};

export {reducer, ActionCreator, Operation, ActionType, State};
