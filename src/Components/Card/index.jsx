import React from "react";

import "./style.css"


class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
      
        return (
            <>
                <div className="cards">
                    <span><p className="shipping">Free Shipping</p></span>
                    <div className="card-image">
                        <img src={`images/${this.props.product.sku}_1.jpeg`} alt="img" />
                    </div>
                    <div className="card-details">

                        <h2 className="title">
                            {this.props.product.title}
                        </h2>
                        <div className="flex price ">
                            <div>
                                <h3>{this.props.product.currencyFormat}</h3>
                            </div>
                            <div>
                                <h1>{this.props.product.price}</h1>
                            </div>
                        </div>
                       
                      
                   <button onClick={() => this.props.handleAddToCart(this.props.product)} className="add" >Add to cart</button>
                    </div>
                </div>
            </>
        )
    }


}
export default Card;