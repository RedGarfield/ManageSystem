import React from 'react';
import { Upload, message, Button, Icon } from 'antd';

class FileLoad extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      fileList: [],
    }
  }
  beforeUpload = (file, fileList) => {
    if(this.props.isMaxNum){ // 是否验证最大上传数量
      let readyFileNum = this.state.fileList.length,
          loadFileNum = fileList.length;
      if(readyFileNum < this.props.maxNum){
        if( (this.props.maxNum-readyFileNum) > loadFileNum ){
          return true;
        }
        return false;
      }
      return false;
    }
    return true;
  }
  handleChange = (info) => {
    let fileList = info.fileList;
    // 1. 限制文件上传数量
    //    仅仅展示最近两个上传的文件，旧的文件会被替换成新的文件
    // fileList = fileList.slice(-2);

    fileList = fileList.map((file) => {
      if (file.response) {
        // 获取服务器返回的路径
        file.url = file.response.path;
      }
      return file;
    });

    // 3. 只展示上传成功的文件
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });

    this.setState({ fileList });
  }
  render(){
    const props = {
      action: this.props.action,
      beforeUpload: this.beforeUpload,
      onChange: this.handleChange,
      multiple: true,
      name: this.props.name,
    };
    return (
      <Upload {...props}>
        <Button><Icon type="upload" /> {this.props.text}</Button>
      </Upload>
    )
  }
}

FileLoad.defaultProps = {
  isMaxNum: true, // 是否设置最大上传数量
  multiple: true, // 是否开启多选
  maxNum: 5, // 最大上传数量
  action: '/upload', // 上传路径
  name: 'userFile', // 后台接受文件上传的名称
  text: '文件上传',
}

export default FileLoad;