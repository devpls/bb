import { createMatchSelector } from 'connected-react-router';
import { createSelector } from '@reduxjs/toolkit';
import { episodeRoute, showRoute } from '@app/router';

const showMatchSelector = createMatchSelector(showRoute);
const episodeMatchSelector = createMatchSelector(episodeRoute);
export const showUrlParamsSelector = createSelector(showMatchSelector, (route) => {
  return route;
});

export const episodeUrlParamsSelector = createSelector(episodeMatchSelector, (route) => {
  return route;
});
