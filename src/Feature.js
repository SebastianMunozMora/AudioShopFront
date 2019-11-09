import React from 'react'
import './Feature.css'
class Feature extends React.Component {
    constructor(props){
        super(props)
        
    }
    
    render(){
        return( <img src={this.props.image} className="color-filter"></img>)
    }
 
}
export default Feature;