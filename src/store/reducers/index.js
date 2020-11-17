import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { episodesReducer, showReducer } from './showsReducer';
import { episodeReducer } from './episodeReducer';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    show: showReducer,
    showEpisodes: episodesReducer,
    episode: episodeReducer,
  });
