import React, { Component } from "react";
import "../assets/styleProfile.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button className='btt' onClick={this.props.handleToggleShow}>Show Profile</button>
        {this.props.Show && (
          <div className="Profile">
            <img
              style={{ width: "400px" }}
              src={this.props.Image}
              alt="PhotoProfile"
            />
            <div className="bioprofesion">
              <h1>{this.props.Name}</h1>
              <p>{this.props.Bio}</p>
              <p>{this.props.Profession}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Button;
