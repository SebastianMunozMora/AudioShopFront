import React from 'react'
import './Basket.css'
function Basket(props) {
        
        
        let items  = []
        if(props.items != undefined){
            items = props.items.map((item,key) => {
                return (<div className="item">
                    <h5 id="cart-title">{item.feature.name}</h5>
                    <p>{item.feature.price}</p>
                    <hr></hr>
                    <img id="cart-pic" src={item.feature.image} style={item.color}></img>
                    <hr></hr>
                    {/* <p id="cart-desc">{item.feature.description}</p> */}
                    <button onClick={props.onClick}>Delete</button>
                    {/*totalPrice += item.feature.price*/}
                </div>)
                })
            } 
        
        return(
                <div className="basket">
                    <div className="cart">
                        <h2>Your Basket(${items.price})</h2>
                        {items}
                        {console.log(items)}
                    </div>
                </div>
                )
    
}

export default Basket;