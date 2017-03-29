import React from 'react';
import ReactDOM from 'react-dom';

// 引入React-Router模块
import { Router, Route, hashHistory, IndexRoute} from 'react-router'

import WrappedNormalLoginForm from './login/login.js';
import SiderDemo from './main.js';

class LayoutDefault extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id='mainBox'>{this.props.children}</div>
        )
    }
}

ReactDOM.render((
    <Router history={hashHistory} >
        <Route path="/" component={LayoutDefault}>
            <IndexRoute path="WrappedNormalLoginForm" component={WrappedNormalLoginForm} />
            <Route path="SiderDemo" component={SiderDemo} />
        </Route>
    </Router>
    ),document.getElementById("react-content")
)