import React from "react";
import Sort from "./Sort";
import "./style.css"

class Aside extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        let allSizes = ["S", "XS", "M", "X", "L", "XL", "XXL"]
        return (
            <>
                <div className="size-container">
                    <h4>Sizes:</h4>
                    <aside>
                        {
                            allSizes.map((size, i) =>
                                <span key={i} className={size === this.props.activeSize ? "active size" : "size"} onClick={() => this.props.handleSelectedSize(size )}>{size}</span>
                            )
                        }
                    </aside>
                <Sort handleSorting = {this.props.handleSorting}/>
                </div>
            </>
        )
    }
}
export default Aside;