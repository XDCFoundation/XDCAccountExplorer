import Axios from 'axios';

class FetchException extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);
    this.code = code;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FetchException.prototype);
  }
}

const queryString = (data: { [key: string]: string; }) => {
  const ret: string[] = [];
  Object.keys(data).forEach((key) => {
    ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
  });

  return ret.join('&');
};

const get = async <Type>(
  resource: string,
  filters: { [key: string]: string; },
): Promise<Type> => new Promise<Type>((resolve, reject) => {
  Axios.get(`${resource}?${queryString(filters)}`)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err));
});

export { get, FetchException };
