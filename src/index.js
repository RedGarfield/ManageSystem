import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import WrappedNormalLoginForm from './login/login.js';
import SiderDemo from './main.js';

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={WrappedNormalLoginForm} />
            <Route path="/main" component={SiderDemo} />
        </div>
    </Router>
    ),document.getElementById("react-content")
)