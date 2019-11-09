import React from 'react';
import './ColorSelector.css';
class ColorSelector extends React.Component{
    constructor(props){
        super(props)
        this.colors = [
            {
                name: "Blue",
                filter: "invert(51%) sepia(44%) saturate(5862%) hue-rotate(203deg) brightness(104%) contrast(92%)",
                background: '#4287f5',
                width: '50px',
                height: '50px'
            },
            {
                name: "Orange",
                filter: "invert(63%) sepia(95%) saturate(3465%) hue-rotate(8deg) brightness(109%) contrast(82%);",
                background: "#e38e17",
                width: '50px',
                height: '50px'
            },
            {
                name: "Green",
                filter: "invert(43%) sepia(99%) saturate(668%) hue-rotate(83deg) brightness(92%) contrast(93%)",
                background: "#14a821",
                width: '50px',
                height: '50px'
            },
            {
                name: "White",
                filter: "invert(97%) sepia(6%) saturate(936%) hue-rotate(191deg) brightness(94%) contrast(89%);",
                background: "#dcdae3",
                width: '50px',
                height: '50px'
            }
        ]
    }
    render(){
        return(<div id="color-palette">
            {this.colors.map((color,key) => {
                return (<button id={key} class="palette" onClick="">
                            <div style={color}></div>
                            <div>{color.name}</div>
                        </button>)
            })}
            <br></br>
        </div>
        )
    }
}
export default ColorSelector;

