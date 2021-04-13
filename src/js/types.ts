interface Author {
  id: string;
  name: string;
  city: string;
}

interface Album {
  userId: string;
  id: string;
  title: string;
}

interface Photo {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export {Author, Album, Photo};
