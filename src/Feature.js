import React from 'react'
import './Feature.css'

class Feature extends React.Component {
    constructor(props){
        super(props)
        
        
    }

   
    render(){
        return( 
            <div>
                <img src={this.props.image} className="color-filter" id="case" style = {this.props.style}></img>
            </div>
            )
    }

 
}
export default Feature;