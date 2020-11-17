import { mergeMap, map, catchError, filter } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { get } from '@app/utils/objectHelper';
import { typeParse, typesFactory, fetchData } from '@app/utils/fetchHelper';
import { apiBaseUrl, START, ERROR, DONE, FETCH_GENERIC_ERROR } from '@app/constants';
import API from '@app/api';

export const requestEpic = (namespace, options = { contentPath: '' }) => {
  return (action$) => {
    return action$.pipe(
      map((action) => {
        const { payload, meta, type } = action;
        const { method, namespace: typeNameSpace, status } = typeParse(type);
        return {
          method,
          typeNameSpace,
          status,
          payload,
          meta,
        };
      }),
      filter(({ typeNameSpace, status }) => {
        return typeNameSpace === namespace && status === START;
      }),
      mergeMap(({ method, payload, meta, typeNameSpace }) => {
        const constants = typesFactory(typeNameSpace);
        const apiPath = API[typeNameSpace][method]({ payload, meta });
        const path = `${apiBaseUrl}/${apiPath}`;
        return from(
          fetchData(path, method, {
            data: payload,
            params: meta?.queryParameters,
          }),
        ).pipe(
          map((response) => {
            const { contentPath } = options;
            const data = Array.isArray(response) ? response : get(response, contentPath);
            return { type: constants[method][DONE], payload: data };
          }),
          catchError((error) =>
            of(
              {
                type: constants[method][ERROR],
                payload: error,
              },
              {
                type: FETCH_GENERIC_ERROR,
                payload: error,
              },
            ),
          ),
        );
      }),
    );
  };
};
