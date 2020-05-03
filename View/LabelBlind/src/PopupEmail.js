import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import axios from 'axios';
import './CSS/PopupAddNew.css';

class PopupEmail extends React.Component {

  render() {
    return (      
      <div className='popupAddNew'>                
        <div className='popupAddNew_inner'>
          <img src="./assets/ico_close.png" onClick={this.props.closePopupEmail} className="close" />
          <div className="container">         
            <header>
              <h1> User Details </h1>
            </header>
            <form onSubmit={this.onSubmit} method="user" >
              <input type="text"  name="User_name" placeholder="   Name" className="box" />             
              <input type="text"  name="User_email" placeholder ="   Email" className="box" / >
              <div className="radiobutton">
                <span>
                  <label className="containerone">
                    <input type="radio" name="radio" /> BSE/NSE Broker
                    <span className="checkmark"></span>
                  </label>
                  <label className="containerone secondbutton">
                    <input type="radio" name="radio" /> Indivdual
                    <span className="checkmark"></span>
                  </label>
                </span>
              </div>
              <input type="text"  name="lname" placeholder="  Mobile Number(Optional)" className="box"/ >
              <button className="abutton" type="submit" value="submit"><span className="textt" >SEND AN EMAIL</span></button>      
            </form> 
          </div>
        </div>
      </div>  
    );
  }
}

export default PopupEmail;