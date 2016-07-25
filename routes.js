// Dependencies.
import React from 'react';
// import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route } from 'react-router';
import { history } from './redux/store';
import loginPage from './Pages/login';
// Routes template.
export default (
	<Router history={history}>
		<Route path="/" component={loginPage} />
	</Router>
);
