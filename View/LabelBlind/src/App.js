import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import PopupConversionTable from './PopupCoversionTable.js';
import PopupUpload from './PopupUpload.js';
import './CSS/Style.css'; 
import './CSS/App.css';
import './CSS/user.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopupConversionTable: false,
      showPopupUpload: false   
    };
  }

  togglePopupConversionTable() {
    this.setState({
      showPopupConversionTable: !this.state.showPopupConversionTable
    });
  }

  togglePopupUpload() {
    this.setState({
      showPopupUpload: !this.state.showPopupUpload
    });
  }

  render() {
    return (     
      <div className='app'>
        <ul>
          <li><a href="#home"><img src=""/>LABELBLIND</a></li>
          <li ><a href="#dashboard">  Dashboard</a></li>
          <li ><a href="#currencyrate">  Today Currency Rate</a></li>
          <li><a href="#session">Session Manager</a></li>
          <li className="right-float"><a href="#more"><img src="assets/ico_downarrow.png"/></a></li>
          <li className="right-float user"><a href="#user_name">John Smith</a></li>
          <li className="right-float"><a href="#profile"><img src="assets/ico_user.png"/></a></li>
          <li className="right-float"><a href="#notification"><img src="assets/ico_notification.png"/></a></li>
        </ul>        
        <div className='BgImage row'>
           <div className='column rbox'>              
        </div>          
        <div className='column rbox'>           
          <div className='Title'>
            <div className='circle'>
              <h1> Currency Converter </h1>
            </div>
          </div>           
        </div>
        </div>
        <div className='UiButtons row'>
          <div className='column rbox'>
            <button className='bright' onClick={this.togglePopupUpload.bind(this)}> UPLOAD FILE </button>
            {this.state.showPopupUpload ? 
              <PopupUpload closePopupUpload={this.togglePopupUpload.bind(this)}/>
              : null
            }          
          </div>          
          <div className='column rbox'>
            <button className='bleft' onClick={this.togglePopupConversionTable.bind(this)}> SHOW RESULT </button>
            {this.state.showPopupConversionTable ? 
              <PopupConversionTable closePopupConversionTable={this.togglePopupConversionTable.bind(this)}/>
              : null
            } 
          </div>
        </div>        
        <div className='footer row'>
          <div className='Fcolumn'>
            <p> About Us </p>
            <p> Our Clients </p>
            <p> Our Mission </p>           
          </div>          
          <div className='Fcolumn'>
              <p> Currency Details </p>
              <p> Currency Evaluation </p>
              <p> Currency Exchange Rules </p>            
          </div>
          <div className='Fcolumn'>
              <p> Dmat Account-queries </p> 
              <p> Know Your GST </p>           
          </div>
          <div className='Fcolumn'>
              <p> Contact Us </p> 
              <p> Email: info@currencycoverter.com 
              Address : 122, Avenue, Free Press Road, Nariman Point , Mumbai 400 001</p>           
          </div>
        </div>
      </div>      
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
