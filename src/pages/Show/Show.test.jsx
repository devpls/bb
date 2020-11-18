import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Show } from './Show';
import { show, showEpisodes, router } from './__mocks__';

const mockStore = configureStore();
const store = mockStore({
  show,
  showEpisodes,
  router,
});
const history = createMemoryHistory();

describe('Show page', () => {
  it('Should be equal to mock', () => {
    const { container } = render(
      <Provider store={store}>
        <Router history={history}>
          <Show />
        </Router>
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
