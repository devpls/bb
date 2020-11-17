export const concatReducers = (...reducers) => (state, action) =>
  reducers.reduce((s, reducer) => reducer(s, action), state);
