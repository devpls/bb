import { FETCH_SHOW_VIEW, SHOWS, SHOWSEPISODESLIST, GET, START } from '@app/constants';
import { typesFactory } from '@app/utils/fetchHelper';

export const fetchShowViewAction = ({ id }) => ({
  type: FETCH_SHOW_VIEW,
  meta: {
    id,
  },
});

const showTypes = typesFactory(SHOWS);
const showEpisodesTypes = typesFactory(SHOWSEPISODESLIST);

export const fetchShowAction = ({ id }) => ({
  type: showTypes[GET][START],
  meta: {
    id,
  },
});

export const fetchShowEpisodesAction = ({ id }) => ({
  type: showEpisodesTypes[GET][START],
  meta: {
    id,
  },
});
