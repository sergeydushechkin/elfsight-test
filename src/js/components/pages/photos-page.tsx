import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {Operation} from "../../reducer/reducer.js";
import {getFilteredAuthor, getFilteredAlbum, getPhotos} from "../../reducer/selectors.js";
import {AppRoute} from "../../const";

import HeaderNav from "../header-nav";
import PhotosAlbum from "../photos-album";
import Photos from "../photos";
import Preview from "../preview";

interface Props {
  match: {
    params: {
      albumId: string;
      authorId: string;
    };
  };
}

const PhotosPage:React.FunctionComponent<Props> = (props: Props) => {
  const {match} = props;
  const {albumId, authorId} = match.params;
  const dispatch = useDispatch();

  const [preview, setPreview] = React.useState(false);
  const [showIndex, setShowIndex] = React.useState(0);

  const authorData = useSelector((state) => getFilteredAuthor(state, authorId))[0];
  const albumData = useSelector((state) => getFilteredAlbum(state, albumId))[0];
  const photosData = useSelector(getPhotos);

  const showPreview = React.useCallback((index: number) => {
    setShowIndex(index);
    setPreview(true);
  }, []);

  React.useEffect(() => {
    dispatch(Operation.loadAlbums(authorId));
    dispatch(Operation.loadPhotos(albumId));
  }, [dispatch, authorId, albumId]);

  if (!(authorData && albumData && photosData.length)) {
    return (<>`Loading...`</>);
  }

  const navItems = [
    {name: `Authors`, link: `/`},
    {name: `Albums`, link: `${AppRoute.ALBUMS}/${authorId}`},
    {name: `Photos`, link: ``},
  ];

  return (
    <div className="container">
      <header className="page-header">
        <HeaderNav items={navItems} />
      </header>
      <main className="page-photos">
        <h1 className="visually-hidden">Photos</h1>
        <PhotosAlbum image={`./img/thumbnail.jpg`} albumName={albumData.title} authorName={authorData.name} />
        <Photos photos={photosData} onClick={showPreview}/>
      </main>

      {
        preview
          ?
          <Preview
            photos={photosData}
            index={showIndex}
            authorName={authorData.name}
            avatar={`./img/avatar.png`}
            onCloseClick={setPreview}
          />
          : ``
      }
    </div>
  );
};

export default PhotosPage;
