import {Author} from "./types";

interface User {
  id: string;
  name: string;
  address: {
    city: string;
  }
}

const createAuthor = (data: User):Author => {
  return {
    id: data.id,
    name: data.name,
    city: data.address.city,
  };
};

export {createAuthor};
