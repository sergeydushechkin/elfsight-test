import "core-js/es/object/assign";
import 'core-js/features/promise';

import * as React from "react";
import * as ReactDOM from "react-dom";

import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import thunk, {ThunkMiddleware} from "redux-thunk";
import {AxiosInstance} from "axios";

import {createAPI} from "./api";
import history from "./history";
import {AppRoute} from "./const";

import {Operation, reducer, State, Action} from "./reducer/reducer";

import App from "./components/app";

const onError = ((err) => {
  if (err.response) {
    throw err;
  }

  history.push(AppRoute.ERROR);
});

const api = createAPI(onError);

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api) as ThunkMiddleware<
          State,
          Action,
          AxiosInstance
        >),
        window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
    )
);

store.dispatch(Operation.loadAuthors());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
