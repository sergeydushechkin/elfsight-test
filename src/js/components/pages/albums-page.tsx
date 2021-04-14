import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Operation} from "../../reducer/reducer.js";
import {getFilteredAuthor, getAlbums} from "../../reducer/selectors.js";

import HeaderNav from "../header-nav";
import AlbumAuthor from "../album-author";
import Albums from "../albums";

const navItems = [
  {
    name: `Authors`,
    link: `/`,
  },
  {
    name: `Albums`,
    link: `.`,
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
  const {match} = props;
  const curentUserId = match.params.id;
  const dispatch = useDispatch();

  const authorData = useSelector((state) => getFilteredAuthor(state, curentUserId))[0];
  const albumsData = useSelector(getAlbums);

  React.useEffect(() => {
    dispatch(Operation.loadAlbums(curentUserId));
  }, [dispatch, curentUserId]);

  return (
    <div className="container">
      <header className="page-header">
        <HeaderNav items={navItems} />
      </header>
      <main className="page-albums">
        <h1 className="visually-hidden">Albums</h1>
        {
          authorData && albumsData.length
            ?
            <React.Fragment>
              <AlbumAuthor name={authorData.name} avatar={`./img/avatar.png`} city={authorData.city} albumsCount={`10`} />
              <Albums albums={albumsData} cover={`./img/thumbnail.jpg`}/>
            </React.Fragment>
            : `Loading...`
        }
      </main>
    </div>
  );
};

export default AlbumsPage;
