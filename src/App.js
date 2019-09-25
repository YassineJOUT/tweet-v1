import React from 'react';
import './css/App.css';
import Nav from './components/Nav'
import InteractionContainer from './components/InteractionContainer'
import ResultContainer from './components/ResultContainer'
import ApiClient from './api/ApiHelper'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phase : 1,
      data : null
    };
    this.handleClick = this.handleClick.bind(this);
    this.setPhase = this.setPhase.bind(this);
  }
  setPhase = (phase,data) => {
    //console.log(data)
    this.setState({
      phase,
      data
      });
  }

  handleClick = (phase,btn) =>{
    let whatToCall = "";
    switch (this.state.phase) {
      case 1:  whatToCall = "honeypot";break;
      case 2: (btn === 1) ? whatToCall = "cnn" : whatToCall = "videocnn"; break;
      case 3: (btn === 1) ? whatToCall = "content" : whatToCall = "colab"; break;
      default:
        break;
    }

    ApiClient(whatToCall+'/').then(res => {
      //console.log(res.data);
      this.setPhase(phase,JSON.stringify(res.data,undefined, 2));
      });
    
  };
  render(){
    return (
      <div className="App">
        <Nav name="Detecting malicous spam" />
        <InteractionContainer phase={this.state.phase} onClick={this.handleClick} data={this.state.data}/>   
        <ResultContainer phase={this.state.phase} data={this.state.data}/>
      </div>
    );
  }
  
}

export default App;
