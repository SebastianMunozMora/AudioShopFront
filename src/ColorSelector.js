import React from 'react';
import './ColorSelector.css';
import Feature from './Feature.js'



class ColorSelector extends React.Component{
    constructor(props){
        super(props)
        this.drivers = [
            {
                name: "Three Drivers",
                image: "tall_driver.svg", 
            },
            {
                name: "Two Drivers",
                image: "classic_driver.svg", 
            },
            {
                name: "Compact Drivers",
                image: "compact_driver.svg", 
            },
            {
                name: "Sub Driver",
                image: "sub_driver.svg", 
            },
        ]
        this.cases = [
                        {
                            name: "Tall Style",
                            image: "tall_case.svg",
                            driver:  "tall_driver.svg",
                            description: "Full frequency range, ideal for stereo and mono audio systems to be used as home theater",
                            price: "$100"
                        },
                        {
                            name: "Classic Style",
                            image: "monitor_case.svg", 
                            driver:  "classic_driver.svg",
                            description: "Used in stereo systems, put this case on your computer desk",
                            price: "$60"
                        },
                        {
                            name: "Compact Style",
                            image: "tiny_case.svg", 
                            driver:  "compact_driver.svg",
                            description: "Can be used anywhere in your home, take it with you wherever you go",
                            price: "$30"
                        },
                        {
                            name: "SubWoofer Style",
                            image: "sub_case.svg", 
                            driver:  "sub_driver.svg",
                            description: "Low frequency range, mainly used as an aditional speaker in your stereo or surround audio system",
                            price: "$50"
                        },
                    ]
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
            {
                name: "Wood",
                filter: "invert(38%) sepia(8%) saturate(1957%) hue-rotate(350deg) brightness(88%) contrast(95%)",
            },
        ]
        this.state = {
            style: {
                filter: "invert(67%) sepia(40%) saturate(5895%) hue-rotate(354deg) brightness(90%) contrast(87%)"
            },
            image: this.cases[0].image,
            driver: this.cases[0].driver,
            description: this.cases[0].description,
            item: {
                case: this.cases[0],
                color: this.colors[0].name
            },
            name: this.cases[0].name,
            price: this.cases[0].price
        }
    }
    render(){
        return(<div id="color-palette">
            <h3>Pick a Case and a Color</h3>
            <div>
                {this.colors.map((color,key) => {
                    return (<button id={key} class="palette" onClick={() => {this.setState({style: {filter: color.filter}})}}>
                                <div className="color-plate" style={color} ></div>
                                <hr></hr>
                                <div>{color.name}</div>
                            </button>)
                })}
            </div>

            <Feature image={this.state.image} style = {this.state.style} desc={this.state.description} title={this.state.name} price={this.state.price}/>
            
            <div>
                {this.cases.map((box,key) => {
                    return(<button class="case-button-palette" onClick={() => {this.setState({image: box.image, driver: box.driver, description: box.description, name: box.name, price: box.price})}}>
                                <div className="case-plate" ><img className="thumbnail" src={box.image}></img></div>
                                <hr></hr>
                                <div>{box.name}</div>
                            </button>)
                })}
            </div>

            <br></br>
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

