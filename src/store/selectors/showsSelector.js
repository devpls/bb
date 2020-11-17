import { createSelector } from '@reduxjs/toolkit';
import { showUrlParamsSelector } from '@app/store/selectors/routeParamsSelector';
import { isEmptyObject } from '@app/utils/objectHelper';
import { getArrayLastChild } from '@app/utils/arrayUtils';

const showSelector = (state) => state?.show;
const episodesSelector = (state) => state?.showEpisodes;

export const showsSelector = createSelector(
  [showSelector, episodesSelector, showUrlParamsSelector],
  (show, episodes, router) => {
    const isEmptyShow = isEmptyObject(show.data);
    const groupEpisodes = episodes.data.reduce((accumulator, currentValue) => {
      const { length } = accumulator;
      const { season } = currentValue;
      if (season > length) {
        return [...accumulator, [currentValue]];
      }
      const result = [...accumulator];
      getArrayLastChild(result).push(currentValue);
      return result;
    }, []);
    return {
      show: show.data,
      episodes: groupEpisodes,
      isLoading: isEmptyShow || show.isLoading || episodes.isLoading,
      error: show.error || episodes.error,
      router,
    };
  },
);
