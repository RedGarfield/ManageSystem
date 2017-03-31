import React from 'react';
import ReactDOM from 'react-dom';
//引入react-router
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Redirect} from 'react-router-dom';

import WrappedNormalLoginForm from './login/login.js';
import SiderDemo from './main.js';

const history = createBrowserHistory();

class DefaultLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>{this.props.children}</div>
        )
    }
}
ReactDOM.render(
    <Router history={history}>
        <div>
            <Route path="/" component={WrappedNormalLoginForm}/>
            <Route path="/main" component={SiderDemo}/>
        </div>
    </Router>, document.getElementById("react-content")
)