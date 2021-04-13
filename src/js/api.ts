import axios, {AxiosInstance} from "axios";

const SERVER = `https://jsonplaceholder.typicode.com`;
const TIMEOUT = 5000;

export const createAPI = (onError: (err: Error) => void):AxiosInstance => {
  const api = axios.create({
    baseURL: SERVER,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (err) => {
    if (err.response && err.response.config.method === `post`) {
      throw err;
    }

    onError(err);

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
