import React from 'react'
import './Basket.css'
function Basket(props) {
        
        
        let items  = []
        if(props.items != undefined){
            items = props.items.map((item,key) => {
                return (<div className="item">
                    <h5 id="cart-title">{item.feature.name}</h5>
                    <hr></hr>
                    <img id="cart-pic" src={item.feature.image} style={item.color}></img>
                    <hr></hr>
                    <p id="cart-desc">{item.desc}</p>
                    <button onClick={() => {items.splice(key,1)}}>Delete</button>
                </div>)
                })
            } 
        
        return(
                <div className="basket">
                    <div className="cart">
                        {items}
                        {console.log(items)}
                    </div>
                </div>
                )
    
}

export default Basket;