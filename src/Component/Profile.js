import React, { Component } from "react";
import profilePhoto from '../assets/photoprofile.jpg';
import "../assets/styleProfile.css";

class Profile extends Component {
  
  state = {
    fullName: 'Mohamed Ali Sammoud',
    bio:'is a fashion consultant who loves runway shows, designer handbags and loads of coffee. Contact Mohamed Ali via FB.',
    imgSrc:profilePhoto,
    profession:"Titulaire d'un License de développement des systèmes d'information.",
  }
  
  render() {
    
    return (
      <div>
       
          <div className="Profile">
            <img
              style={{ width: "400px" }}
              src={this.state.imgSrc}
              alt="PhotoProfile"
            />
            <div className="bioprofesion">
              <h1>{this.state.fullName}</h1>
              <p>{this.state.bio}</p>
              <p>{this.state.profession}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Profile;
