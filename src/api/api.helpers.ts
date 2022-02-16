import backend from 'api/api';
import { format } from 'date-fns';

const dateFormat = 'yyyy-MM-dd';

const mapDateValueToString = ([key, value]: [string, QueryValue]) => {
  if (value instanceof Date) {
    return [key, format(value, dateFormat)];
  }
  return [key, value];
};

const buildURLQuery = (obj: QueryableObject) => Object.entries(obj)
  .filter(([, value]) => !!value)
  .map(([key, value]) => [key, value] as [string, QueryValue])
  .map(mapDateValueToString)
  .map((pair) => pair.map(encodeURIComponent).join('='))
  .join('&');

const get = async <Type>(url: string): Promise<Type> => {
  const response = await backend.get(url);
  return response.data;
};

export { get, buildURLQuery };
