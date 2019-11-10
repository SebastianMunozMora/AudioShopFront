import React from 'react'
import './Feature.css'

class Feature extends React.Component {
    constructor(props){
        super(props)
        
        
    }

   
    render(){
        return( 
           
                <img src={this.props.image} className="image" id="case" style = {this.props.style}></img>

      
            
            )
    }

 
}
export default Feature;