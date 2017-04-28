import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Router, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import LoginForm from './login/login.js';
// import Main from './main.js';
// import NotFoundPage from './notFoundPage.js';

let store = createStore();
const history = createBrowserHistory();

const DefaultLayout = () => (
	<Provider>
		<Router history={history}>
			<div>
		  		<Route exact path="/" component={LoginForm}/>
			</div>
		</Router>
	</Provider>
)

ReactDOM.render(
    <DefaultLayout />, document.getElementById("react-content")
)