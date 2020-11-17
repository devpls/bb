import { SHOWS, EPISODES, SHOWSEPISODESLIST, GET } from '@app/constants';

export default {
  [SHOWS]: {
    [GET]: ({ meta: { id } }) => `shows/${id}`,
  },
  [SHOWSEPISODESLIST]: {
    [GET]: ({ meta: { id } }) => `shows/${id}/episodes`,
  },
  [EPISODES]: {
    [GET]: ({ meta: { id } }) => `episodes/${id}`,
  },
};
