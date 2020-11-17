import { SHOWS, SHOWSEPISODESLIST } from '@app/constants';
import { requestReducer } from './requestReducer';

export const showReducer = requestReducer(SHOWS, {
  initialState: {
    data: {},
  },
});
export const episodesReducer = requestReducer(SHOWSEPISODESLIST);
