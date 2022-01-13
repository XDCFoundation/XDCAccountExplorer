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

const get = async <Type>(resource: string, filters: { [key: string]: string; }): Promise<Type> => {
  const url = process.env.REACT_APP_API_URL;

  return new Promise<Type>((resolve, reject) => {
    fetch(`${url}/${resource}?${queryString(filters)}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new FetchException(response.statusText, response.status);
      })
      .then((json) => resolve(json))
      .catch((err) => {
        if (err.message === 'Failed to fetch') {
          reject(new FetchException(err.message, 0));
        } else {
          reject(err);
        }
      });
  });
};

export { get, FetchException };
