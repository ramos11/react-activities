// Product.js
import React from 'react';

function Product (props) {

    function toString(props){
        return "name = " + props.productName + ", id = " + props.productId+ ", datePurchased = "+props.productDatePurchased;
    }

    return (
        <div>
            {toString(props)};  
        </div>
    );
}

export default Product;