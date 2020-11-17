export const get = (obj = {}, path = '') => {
  if (path.length === 0) {
    return obj;
  }
  const pathArray = path.split('.');
  const pathLength = pathArray.length;
  let result = { ...obj };
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < pathLength; ++i) {
    if (result[pathArray[i]]) {
      result = result[pathArray[i]];
    } else {
      return undefined;
    }
  }
  return result;
};
