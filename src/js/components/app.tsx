import * as React from "react";
import history from "../history";
import {Router, Route, Switch} from "react-router-dom";

import {AppRoute} from "../const";

import AuthorsPage from "./pages/authors-page";
import AlbumsPage from "./pages/albums-page";
import PhotosPage from "./pages/photos-page";
import ErrorPage from "./pages/error-page";

const App:React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={`${AppRoute.ALBUMS}/:author/:album`} component={PhotosPage}/>
        <Route exact path={`${AppRoute.ALBUMS}/:id`} component={AlbumsPage}/>
        <Route path={AppRoute.ERROR} component={ErrorPage}/>
        <Route path={AppRoute.ROOT} component={AuthorsPage}/>
      </Switch>
    </Router>
  );
};

export default App;
