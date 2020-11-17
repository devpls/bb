import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { FETCH_SHOW_VIEW, SHOWS, SHOWSEPISODESLIST } from '@app/constants';
import { fetchShowAction, fetchShowEpisodesAction } from '@app/store/actions';
import { requestEpic } from '@app/store/epics/requestEpic';

export const fetchShowViewEpic = (action$) => {
  return action$.pipe(
    ofType(FETCH_SHOW_VIEW),
    switchMap(({ meta: { id } }) => {
      return of(...[fetchShowAction({ id }), fetchShowEpisodesAction({ id })]);
    }),
  );
};

export const fetchShowEpic = requestEpic(SHOWS);
export const fetchShowEpisodesEpic = requestEpic(SHOWSEPISODESLIST);
