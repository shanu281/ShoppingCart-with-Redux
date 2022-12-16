import React from "react";
import "./style.css"
import Card from "../Card";


class Cards extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {


        return (
            <>
                <section className="main">
                    <div>
                        <h1 className="total-products">16 Product(s) found</h1>
                    </div>
                    <div className="card-container">
                        {
                            this.props.activeSize === "" ?
                                this.props.products.sort((a, b) => this.props.sorted === 'lowest' ? a.price - b.price : 'highest' ? b.price - a.price : +1 )
                                    .map((product, i) =>
                                        <Card product={product} key={i} products={this.props.products} i={i} handleAddToCart={this.props.handleAddToCart} />
                                    ) :

                                this.props.products.filter((product, i) =>
                                    product.availableSizes.includes(this.props.activeSize)
                                ).sort((a, b) => this.props.sorted === "lowest"? a.price - b.price :'highest' ? b.price - a.price : +1 )
                                    .map((product, i) =>
                                    <Card product={product} key={i} products={this.props.products} i={i} handleAddToCart={this.props.handleAddToCart} />
                                )
                        }
                    </div>
                </section></>
        )
    }
}
export default Cards;