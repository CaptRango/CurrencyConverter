import React, {Component} from 'react';
import ReactDOM from "react-dom";
import logo from './logo.svg';
import PopupEmail from './PopupEmail.js';
import PopupAnalysis from './PopupAnalysis';
import './CSS/Style.css'; 

class PopupCoversionTable extends React.Component {
  constructor(props) {
      super(props) 
      this.state = { 
        showPopupEmail: false,
        showPopupAnalysis: false,
        result:[]            
      }
   }
   
  togglePopupEmail() {
    this.setState({
      showPopupEmail: !this.state.showPopupEmail
    });
  }

  togglePopupAnalysis() {
    this.setState({
      showPopupAnalysis: !this.state.showPopupAnalysis
    });
  }

  //GET methode to retrive result from server
  componentDidMount() {
    var abc = fetch('http://localhost:8080/result')
    .then(res => res.json())
    .then((data) => {
      this.setState({ result: data })
      console.log(this.state.result)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className='PopupUser'>
        <img src="./assets/ico_close.png" onClick={this.props.closePopupConversionTable} className="close" />
        <div className='PopupUser_inner'>
          <header>
            <ul className="header">
              <li className="space">Conversion</li>
              <li className="right">
                <button className="Addnew" onClick={this.togglePopupEmail.bind(this)}>
                   Email Me Result
                </button>
                  {this.state.showPopupEmail ? 
                    <PopupEmail  text='Close Me' closePopupEmail={this.togglePopupEmail.bind(this)}/>
                    : null
                  }
              </li>
              <li className='right'>
                <button className="Analysis" onClick={this.togglePopupAnalysis.bind(this)}>
                   CURRENCY CONVERSION ANALYSIS
                </button>
                  {this.state.showPopupAnalysis ? 
                    <PopupAnalysis  text='Close Me' closePopupAnalysis={this.togglePopupAnalysis.bind(this)}/>
                    : null
                  }
              </li>
              <li className="right">              
                <form className="example " action="/action_page.jsx">
                  <input type="text" placeholder="Search.." name="search"/>
                  <button type="submit"><img src="./assets/ico_search.png" className="a"/></button>
                </form>           
              </li>
            </ul>
          </header>
          <table id='students'>
            <thead>
              <tr>
                <th>INDEX</th>
                <th>INDIAN RUPEES</th>
                <th>CONVERSION RATE</th>
                <th>DOLLARS</th>
                <th>DATE & TIME </th>
              </tr>
            </thead>
            {this.state.result.map((todo) => (
              <tbody>                  
                <tr>
                  <td>{ todo.id }</td>
                    <td>{ todo.INR}</td>
                    <td>{ todo.CR }</td>
                    <td>{ todo.USD }</td>
                    <td>{ todo.Datetime }</td>
                </tr>                   
              </tbody>
            ))}
          </table>           
        </div>
      </div>
    );
  }
}

export default PopupCoversionTable;