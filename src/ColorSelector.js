import React from 'react';
import './ColorSelector.css';
import Feature from './Feature.js'
class ColorSelector extends React.Component{
    constructor(props){
        super(props)
        this.colors = [
            {
                name: "Sky",
                filter: "invert(51%) sepia(44%) saturate(5862%) hue-rotate(203deg) brightness(104%) contrast(92%)",
            },
            {
                name: "Sunset",
                filter: "invert(63%) sepia(95%) saturate(3465%) hue-rotate(8deg) brightness(109%) contrast(82%)",
            },
            {
                name: "Pine",
                filter: "invert(43%) sepia(99%) saturate(668%) hue-rotate(83deg) brightness(92%) contrast(93%)",
            },
            {
                name: "Artic",
                filter: "invert(95%) sepia(7%) saturate(346%) hue-rotate(325deg) brightness(104%) contrast(92%)",
            },
            {
                name: "Crimson",
                filter: "invert(11%) sepia(88%) saturate(2932%) hue-rotate(350deg) brightness(94%) contrast(107%)",
            },
            {
                name: "Orchid",
                filter: "invert(9%) sepia(93%) saturate(4412%) hue-rotate(295deg) brightness(100%) contrast(97%)",
            },
            {
                name: "Butter",
                filter: "invert(97%) sepia(57%) saturate(5429%) hue-rotate(323deg) brightness(90%) contrast(90%)",
            },
            {
                name: "Lapis",
                filter: "invert(25%) sepia(80%) saturate(1919%) hue-rotate(220deg) brightness(100%) contrast(88%)",
            },
        ]
        this.state = {
            style: {
                filter: "invert(67%) sepia(40%) saturate(5895%) hue-rotate(354deg) brightness(90%) contrast(87%)"
            }
        }
    }
    render(){
        return(<div id="color-palette">
            {this.colors.map((color,key) => {
                return (<button id={key} class="palette" onClick={() => {this.setState({style: {filter: color.filter}})}}>
                            <div className="color-plate" style={color} ></div>
                            <hr></hr>
                            <div>{color.name}</div>
                        </button>)
            })}
            <br></br>
            <Feature image="tall_case.svg" style = {this.state.style}/>
        </div>
        )
    }

    changeColor(id,color){
        this.setState(
            {
                style: {
                    filter: color
                }
            }
           
            
        )
    }
}

export default ColorSelector;
