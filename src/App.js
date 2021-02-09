import React, { Component } from "react";
import Profile from './Component/Profile'
import Clock from './Component/Clock'



class App extends Component {

  state={
    show:false
  }
  handleToggleShow = () => {
    this.setState({
       show: !this.state.show 
      });
  };
  
  render() {
    return (
      <div className="App">
        <button className='btt' onClick={this.handleToggleShow}>Show Profile</button>
        {this.state.show && <Profile />}
      <Clock  />
      </div>
    );
  }
}

export default App;
