import { combineEpics } from 'redux-observable';
import { fetchShowViewEpic, fetchShowEpic, fetchShowEpisodesEpic } from './showsEpic';
import { fetchEpisodeEpic } from './episodeEpic';

export const rootEpic = combineEpics(
  fetchShowViewEpic,
  fetchShowEpic,
  fetchShowEpisodesEpic,
  fetchEpisodeEpic,
);
