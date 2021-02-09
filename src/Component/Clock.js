import React,{Component} from "react";

class Clock extends Component {
  state={
          startDateTime : this.props.Date.toLocaleTimeString(),
        }
  
 
      componentDidMount(){
       setInterval((
          this.setState({
          startDateTime : this.props.Date.toLocaleTimeString()
        }))
        ,1000)
        
        }
      
      
render(){
  return (
    <div>
      <h3 style={{margin: '20px 0 20px 700px'}}>Il est {this.state.startDateTime}</h3>
    </div>
  );
}}

export default Clock;
