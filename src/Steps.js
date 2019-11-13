import React from 'react';
import './Steps.css'
class Steps extends React.Component {
    constructor(props){
        super(props)
        this.step = [
            {name: "Case"},
            {name: "Drivers"},
            {name: "Addons"}
            ]
        this.state = {
            step: this.step[0].name
        }
    }
    render(){
        return(<div className="all-steps">
            <button onClick={this.props.onClickBack} className="steps-button">
                <h2>Previous</h2>
            </button>
            <button className="steps">
                <h2>{"Choose Your " + this.step[this.props.state].name }</h2>
            </button>
                {console.log(this.props.state)}
            <button onClick = {this.props.onClickNext } className="steps-button">
                <h2>Next</h2>
            </button>
            </div>)
    }
}

export default Steps;