import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from '@app/store';
import { history } from '@app/constants';
import { showRoute, episodeRoute } from '@app/router';
import { Show, Episode } from '@app/pages';
import { BEMHelper } from '@app/utils/bemHelper';
import './App.scss';

const store = configureStore();

const classes = new BEMHelper('wrapper');

export default () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className={classes('')}>
          <Switch>
            <Route exact path={showRoute}>
              <Show />
            </Route>
            <Route exact path={episodeRoute}>
              <Episode />
            </Route>
            <Route>
              <Redirect to="/shows/6771" />
            </Route>
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>
  );
};
