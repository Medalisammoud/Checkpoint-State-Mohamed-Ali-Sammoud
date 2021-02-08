import React,{Component} from "react";

class Clock extends Component {
  state={
    startDateTime : this.props.Date
  }
 
      componentDidMount(){
        this.setState({ 
          startDateTime : Date.now()
        });
      }
render(){
  return (
    <div>
      <h3 style={{margin: '20px 0 20px 700px'}}>Il est { setInterval(this.state.startDateTime, 1000)}</h3>
    </div>
  );
}}

export default Clock;
