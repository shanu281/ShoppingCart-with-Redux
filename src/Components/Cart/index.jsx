import React from "react";
import "./style.css"
import CartProduct from "../CartProduct";

function Cart(props) {
    return (
        <>
            {
                !props.cart ?
                    <div className="cart-container">
                        <div className="cart" onClick={props.toggleCart}>
                            <img className="cart-img  " src={`images/download.png`} alt="cart image" />
                            <span className="cart-quantity position-1"><h2>{props.cartValue.length}</h2></span>
                        </div>
                    </div> :
                    <div className="cart-expand">
                        <div className="cart-header flex">
                            <img className="cart-img-expand " src={`images/download.png`} alt="cart image" />
                            <span className="cart-quantity position-2"><h2>{props.cartValue.length}</h2></span>

                            <h1>Cart</h1>
                        </div>
                        <button className="cross-btn" onClick={props.toggleCart}>X</button>
                        {
                            props.cartValue.map((item, i) =>
                                <CartProduct item={item} key={i} cartValue={props.cartValue} handlePrice={props.handlePrice} quantity={props.quantity} handleQuantityAdd={props.handleQuantityAdd} handleQuantityRemove={props.handleQuantityRemove} />
                            )
                        }

                        <div className="checkout-section">
                            <div className="subtotal flex">
                                <h2>SUBTOTAL</h2>
                                <h2>Total quantity : { props.cartValue.length}</h2>
                                <h2>{props.cartValue.reduce((acc, cv) => acc + cv.price, 0)}</h2>
                            </div>
                            <button className="checkout">CHECKOUT</button>
                        </div>
                    </div>
            }
        </>
    )
}
export default Cart;