// Product.js
import React from 'react';

function Product (prop) {

    function toString(prop){
        return "[" + "name = "+ prop.productName+ ", id = "+prop.productId+ ", datePurchased = "+prop.productDatePurchased +"]";
    }

    return (
        <div>
            {toString(prop)};  
        </div>
    );
}

export default Product;