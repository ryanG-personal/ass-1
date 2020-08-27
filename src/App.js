import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'newName'
  }

  changeUsernameHandler= (event)=>{
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
        <UserInput username ={this.state.username} changed={this.changeUsernameHandler} />
        <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
        <UserOutput username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
