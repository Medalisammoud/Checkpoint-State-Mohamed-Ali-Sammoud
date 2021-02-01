import React,{Component} from "react";

class Clock extends Component {
render(){
  return (
    <div>
      <h3 style={{margin: '20px 0 20px 700px'}}>Il est {this.props.date.toLocaleTimeString()}</h3>
    </div>
  );
}}
setInterval(Clock,1000);
export default Clock;
