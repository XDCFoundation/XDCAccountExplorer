import backend from 'api/api';

const queryString = (data: { [key: string]: string; }) => {
  const ret: string[] = [];
  Object.keys(data).forEach((key) => {
    ret.push(`${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`);
  });

  return ret.join('&');
};

const get = async <Type>(url: string): Promise<Type> => new Promise<Type>((resolve, reject) => {
  backend.get(url)
    .then((res) => resolve(res.data))
    .catch((err) => reject(err));
});

export { get, queryString };
