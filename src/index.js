import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import LoginPage from './login/login.js';
import MainPage from './main/main.js';
import NotFoundPage from './notFoundPage.js';

const history = createBrowserHistory();

const Root = () => (
	<Router history={history}>
		<Switch>
	  		<Route exact path="/" component={LoginPage} />
	  		<Route path="/main" component={MainPage} />
	  		<Route component={NotFoundPage} />
  		</Switch>
	</Router>
)

ReactDOM.render(
    <Root />, document.getElementById("react-content")
)