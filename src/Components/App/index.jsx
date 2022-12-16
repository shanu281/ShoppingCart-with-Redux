import React from "react";
import "./style.css";
import Data from "../Data/data";
import Cart from "../Cart";
import Aside from "../Aside";
import Cards from "../Cards";
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            selectedSize: "",
            productIndex: "",
            activeSize: "",
            cartValue: [],
            cart: false,
            price: "",
            sorted: ""

        }
    }
    handleSelectedSize = (size) => {
        this.setState({
            selectedSize: size, activeSize: size
        })
        console.log(size)
        console.log(this.state.activeSize)
    }

    handleAddToCart = (product) => {
        this.setState({
            cartValue: this.state.cartValue.concat({ ...product, quantity: 1 })
        })

        console.log([product])
        console.log(this.state.cartValue)

    }

    handlePrice = (event) => {
        this.setState({
            price: event.target.value
        })
        console.log(this.state.price)
    }


    toggleCart = () => {
        this.setState({
            cart: !this.state.cart
        })
    }

    handleQuantityAdd = (id) => {
        console.log('clicked')
        const newCartValue = this.state.cartValue.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item
        })
        this.setState({
            cartValue: newCartValue
        })
    }
    handleQuantityRemove = (id, quantity) => {
           if(quantity >1) { 
        const newCartValue = this.state.cartValue.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
            }
            return item
        })

        this.setState({
            cartValue: newCartValue
        })
    } else {
        const newCartValue = this.state.cartValue.filter(item => item.id != id)
        this.setState({
            cartValue : newCartValue
        })
    }
} 
    handleSorting = (event) => {
        const value = event.target.value
        this.setState({
            sorted: value
        })
        console.log(value)

    }

    render() {
        let products = Data.products

        return (
            <>
                <div className="container relative">
                    <Aside handleSelectedSize={this.handleSelectedSize} activeSize={this.state.activeSize} handleSorting={this.handleSorting} products={this.state.products} />
                    <Cards handleSelectedSize={this.handleSelectedSize} selectedSize={this.state.selectedSize} activeSize={this.state.activeSize} handleAddToCart={this.handleAddToCart} products={products} sorted={this.state.sorted} />
                    <Cart toggleCart={this.toggleCart} cart={this.state.cart} cartValue={this.state.cartValue} quantity={this.state.quantity} handleQuantityAdd={this.handleQuantityAdd} handleQuantityRemove={this.handleQuantityRemove} />
                </div>
            </>
        )
    }
}
export default App;