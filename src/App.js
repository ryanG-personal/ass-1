import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserOutput from './components/UserOutput/UserOutput'

class App extends Component {
  state = {
    username: 'Initial Name'
  }

  changeUsernameHandler= (event)=>{
    this.setState({username: event.target.value})
  }

  render() {
    return (
      <div className="assignment1">
        <UserInput
         username ={this.state.username}
         changed = {this.changeUsernameHandler} />
        <UserOutput
         username = {this.state.username}/>
        <UserOutput
         username = {this.state.username}/>
        <UserOutput
         username = {this.state.username}/>
      </div>
    );
  }
}

export default App;
