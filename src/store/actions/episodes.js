import { GET, START, EPISODES } from '@app/constants';
import { typesFactory } from '@app/utils/fetchHelper';

const episodeTypes = typesFactory(EPISODES);

export const fetchEpisodeAction = ({ id }) => ({
  type: episodeTypes[GET][START],
  meta: {
    id,
  },
});
