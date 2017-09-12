import React from 'react';
import FileLoad from '../common/upload/fileLoad';

class PlayPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <FileLoad />
      </div>
    )
  }
}

export default PlayPage;