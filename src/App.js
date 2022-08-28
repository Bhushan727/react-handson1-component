import React from 'react';
import './App.css';
import LCard from './components/LCard';
import RCard from './components/RCard';
import './components/style.css';

class App extends React.Component{

 
    state = {
      fCard:'false',
      sCard:'false'
    };

  render(){
  return (
   <div className="container" >
    <h1 className="head-style">Styling using Functional and Class Component</h1>
    <div className="btnHead">
        <button className="leftBtn" onClick={()=> this.setState({fCard:!this.state.fCard})}>To see styling in functional component</button>
        {console.log(this.state.fCard)}
        <button className="rightBtn" onClick={()=> this.setState({sCard:!this.state.sCard})}>To see styling in class component</button>
    </div>
    <div className="cardHead">
      {this.state.fCard ? <LCard /> : null}
      {this.state.sCard ? <RCard /> : null}
    </div>
   </div>
  );
}
}

export default App;
