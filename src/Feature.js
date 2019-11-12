import React from 'react'
import './Feature.css'

class Feature extends React.Component {
    constructor(props){
        super(props)
        
        
    }

   
    render(){
        return( 
           <div>
                <h3>{this.props.title}</h3>
                <h5>{this.props.price}</h5>
                <hr></hr>
                <img src={this.props.image} className="image" id="case" style = {this.props.style}></img>
                <hr></hr>
                <p>{this.props.desc}</p>
           </div>
            )
    }

 
}
export default Feature;