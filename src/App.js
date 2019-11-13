import React from 'react';
import logo from './logo.svg';
import Feature from './Feature.js'
import './App.css';
import ColorSelector from './ColorSelector';
import Steps from './Steps.js'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentState: 0
    }
  }
  render (){return (
      <div className="App">
        <header className="App-header">
          <div ><img  className="banner"></img></div>
          <h1> Speaker Audio System Design </h1>
          <div className="cases-view">
            <Steps onClickNext={()=>{

              {
                this.state.currentState != 2 ? this.setState({currentState: this.state.currentState + 1}) : this.setState({currentState: this.state.currentState})
              }
            }}
            onClickBack={() => {
              {this.state.currentState != 0 ? this.setState({currentState: this.state.currentState - 1}) : this.setState({currentState: this.state.currentState})}
            }} 
            state = {this.state.currentState}
            />
            <hr></hr>
            <ColorSelector state = {this.state.currentState}/>
            
          </div>
          
        </header>
      </div>
    );
  }
}

export default App;
