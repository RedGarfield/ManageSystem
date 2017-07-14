import React from 'react';
import ReactDOM from 'react-dom';

export default class PlayPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isopen:true,
        }
    }
    handleClick = () => {
        let result = this.state.isopen;
        this.setState({
            isopen: !result,
        });
    }
    render(){
        return(
            <div>
                <input type="text" value="aaa"/>
                {this.state.isopen?<label onClick={this.handleClick}>点我输入</label>:<input autoFocus />}
            </div>
        )
    }
}