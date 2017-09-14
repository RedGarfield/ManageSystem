import React from 'react';
// import FileLoad from '../common/upload/fileLoad';
import TimePicker from '../common/time-picker/timePicker';

class PlayPage extends React.Component{
  constructor(props){
    super(props);
  }
  handleChange = (value) => {
  }
  render(){
    return (
      <div>
        <TimePicker onChange={this.handleChange} />
      </div>
    )
  }
}

export default PlayPage;