import { requestReducer } from '@app/store/reducers/requestReducer';
import { EPISODES } from '@app/constants';

export const episodeReducer = requestReducer(EPISODES, {
  initialState: {
    data: {},
  },
});
