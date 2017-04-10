import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import LoginForm from './login/login.js';
import Main from './main.js';

import 'antd/dist/antd';

const history = createBrowserHistory();

const DefaultLayout = () => (
  <Router history={history}>
    <div>
      <Route exact path="/" component={LoginForm}/>
      <Route path="/main" component={Main} />
    </div>
  </Router>
)

ReactDOM.render(
    <DefaultLayout />, document.getElementById("react-content")
)