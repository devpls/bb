import { GET } from '@app/constants';

export const fetchData = async (url, method = GET, options = {}) => {
  return fetch(url, {
    method,
    headers: {
      ...options.headers,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
};
