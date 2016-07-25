// Dependencies.
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Local Dependencies.
import Routes from './routes';

// Needed for onTouchTap - Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Routes template.
const template = (
  <Provider store={store}>
      <Router history={history}>
        {Routes}
      </Router>
  </Provider>
);
// Insertion point.
const el = document.getElementById('app');

ReactDOM.render(template, el);
