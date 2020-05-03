import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import axios from 'axios';
import './CSS/PopupAddNew.css';

class PopupAnalysis extends React.Component {

  render() {
    return (      
      <div className='popupAddNew'>                
        <div className='popupAddNew_inner'>
          <img src="./assets/ico_close.png" onClick={this.props.closePopupAnalysis} className="close" />
          <div className="container">         
            <header>
              <h1> Analysis </h1>
            </header>
             <div className='empty'></div>
            <div className='Acolumn Frow'>
              <div className='Fscolumn'></div>
              <div className='Fscolumn fs'>Indian Ruppes</div>
              <div className='Fscolumn fs cl'>Dollars</div>
            </div>
            <div className='Acolumn Frow'>
              <div className='Fscolumn fs '> Min Value</div>
              <div className='Fscolumn'> 500 </div>
              <div className='Fscolumn'> 6.6576</div>
            </div>
            <div className='Acolumn Frow'>
              <div className='Fscolumn fs cl'> Average Value</div>
              <div className='Fscolumn'> 1250</div>
              <div className='Fscolumn'> 66.5766</div>
            </div>           
            <div className='Acolumn Frow'>
              <div className='Fscolumn fs '> Max Value</div>
              <div className='Fscolumn'> 1900</div>
              <div className='Fscolumn'> 25.2991</div>
            </div>
          </div>          
        </div>
      </div>  
    );
  }
}

export default PopupAnalysis;