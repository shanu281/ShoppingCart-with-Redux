import React from "react";
import "./style.css"

function Sort(props) {
    return (
        <>
            <form >
                <label for="sort"><h2>Sort products:</h2></label>
                <select onChange={props.handleSorting} name="sort" id="sort">
                   
                    <option value="lowest">lowest to highest</option>
                    <option value="highest">highest to lowest</option>
                </select>
            </form>

        </>
    )
}
export default Sort;