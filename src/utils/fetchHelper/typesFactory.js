import { GET, START, DONE, ERROR, PUT, POST, DELETE } from '@app/constants';

export const typesFactory = (namespace, methods = [GET, PUT, POST, DELETE]) => {
  return methods.reduce((accumulator, method) => {
    const start = `${method}_${namespace}_${START}`;
    const done = `${method}_${namespace}_${DONE}`;
    const error = `${method}_${namespace}_${ERROR}`;
    return {
      ...accumulator,
      [method]: {
        [START]: start,
        [DONE]: done,
        [ERROR]: error,
      },
    };
  }, {});
};
