import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import axios from 'axios';
import './CSS/Style.css'; 

class PopupUpload extends React.Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      selectedFile: null          
    }
  }

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  //methode to uploade file
  onClickHandler = () => {
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    axios.post("http://localhost:8080/upload", data, { // receive two parameter endpoint url ,form data 
    })
    .then(res => { // then print response status
    console.log(res.statusText)
    })
  }

  render() {
    return (
      <div className='PopupUser'>        
        <div className='PopupUser_upload'>
          <img src="./assets/ico_close.png" onClick={this.props.closePopupUpload} class="close" />
          <div className='PopupUpload_container'>
            <div className='PopupUpload_upload'>
              <input className='PopupUpload_input' type="file" name="file" onChange={this.onChangeHandler}/>               
              <label className='PopupUpload_label'> Upload Your File </label>
            </div>
            <div className='PopupUpload_column empty'></div>
            <div className='PopupUpload_column'>
              <button type='button'  className='file-upload' onClick={this.onClickHandler}> UPLOAD </button>
            </div>
            <div className='PopupUpload_column'>
              <button className='drive'> IMPORT FROM GOOGLE DRIVE </button>
            </div>
            <div className='PopupUpload_column'>
              <button className='drive'> IMPORT FROM PCLOUD </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupUpload;