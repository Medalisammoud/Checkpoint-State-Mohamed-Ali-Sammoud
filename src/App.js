import React, { Component } from "react";
import Button from './Component/Button'
import Clock from './Component/Clock'

import profilePhoto from './assets/photoprofile.jpg';

class App extends Component {

  state = {
    fullName: 'Mohamed Ali Sammoud',
    bio:'is a fashion consultant who loves runway shows, designer handbags and loads of coffee. Contact Mohamed Ali via FB.',
    imgSrc:profilePhoto,
    profession:"Titulaire d'un License de développement des systèmes d'information.",
    show :false
  }
  handleToggleShow = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };
  
  render() {
    return (
      <div className="App">
        <Button Name={this.state.fullName} Bio={this.state.bio} Image={this.state.imgSrc} Profession={this.state.profession} Show={this.state.show}
            handleToggleShow={this.handleToggleShow}
        />
      <Clock date={new Date()} />
      </div>
    );
  }
}

export default App;
