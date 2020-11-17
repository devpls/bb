import { createSelector } from '@reduxjs/toolkit';
import { episodeUrlParamsSelector } from '@app/store/selectors/routeParamsSelector';
import { isEmptyObject } from '@app/utils/objectHelper';

const episodeSelector = (state) => state?.episode;

export const episodeViewSelector = createSelector(
  [episodeSelector, episodeUrlParamsSelector],
  (episode, router) => {
    const isEmptyEpisode = isEmptyObject(episode.data);
    return {
      ...episode,
      isLoading: isEmptyEpisode || episode.isLoading,
      router,
    };
  },
);
