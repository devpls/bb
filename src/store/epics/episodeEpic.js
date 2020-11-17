import { requestEpic } from '@app/store/epics/requestEpic';
import { EPISODES } from '@app/constants';

export const fetchEpisodeEpic = requestEpic(EPISODES);
