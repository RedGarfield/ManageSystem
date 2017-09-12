import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import LoginPage from './login/login.js';
import IndexPage from './index/index.js';
import NotFoundPage from './notFoundPage.js';

const history = createBrowserHistory();
/**
 * 我是注释1
 */
// 我是注释2
const Root = () => (
	<Router history={history}>
		<Switch>
	  		<Route exact path="/" component={LoginPage} />
	  		<Route path="/index" component={IndexPage} />
	  		<Route component={NotFoundPage} />
  		</Switch>
	</Router>
)

ReactDOM.render(
	<Root />, document.getElementById("react-content")
)