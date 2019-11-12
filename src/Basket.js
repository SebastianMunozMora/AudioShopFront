import React from 'react'
class Basket extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(<div class="basket">
            
            <button class="basket-button" onClick={this.props.onClick}>
                <img src="./cart.png" style="width: "></img>
            </button>

            <div class="cart">
                {
                    this.props.items.array.forEach(item => {
                        <div class="item">
                            <h4 id="cart-title">{item.title}</h4>
                            <hr></hr>
                            <img id="cart-pic" src={item.picture}></img>
                            <hr></hr>
                            <p id="cart-desc">{item.desc}</p>
                        </div>
                    })
                }
            </div>

        </div>
        )
    }
}

export default Basket;