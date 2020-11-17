const separator = '_';
export const typeParse = (type) => {
  const parsedType = type.split(separator);
  return {
    method: parsedType[0],
    namespace: parsedType[1],
    status: parsedType[2],
  };
};
