// ProductPanel.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';




  function ProductPanel(){

    const [productId, setProductId] = React.useState('');
    const [productName, setProductName] = React.useState('');
    const [productDatePurchased, setProductDatePurchased] = React.useState('');
    
    const options = ['Select an option', '1', '2', '3'];
    const defaultOption = options[0];

    function showClickHandler () {
        window.alert("[" + "id = "+ productId + ", name = "+productName+ ", datePurchased = "+ productDatePurchased +"]");
    }

    function clearClickHandler () {
        setProductId('');
        setProductName('');
        setProductDatePurchased('');
    }
    return(
        <div>
            <input placeholder="Product ID" value={productId}  onChange = { e => setProductId(e.target.value)}  ></input>
            <br/>
            <input placeholder="Product Name" value={productName}  onChange = { e => setProductName(e.target.value)}  ></input>
            <br/>
            <input placeholder="Product Date Purchased" value={productDatePurchased}  onChange = { e => 
                
            setProductDatePurchased(e.target.value)}  ></input>           
            <br/><br/>
            <button style={{color:"blue"}} onClick={showClickHandler}>Show</button>
            <button style={{color:"black"}} onClick={clearClickHandler}>Clear</button>
            <br/><br/>

            <input placeholder="Some value"></input>
            <br/><br/>
            
            <Dropdown options={options} onChange={showClickHandler} value={defaultOption} placeholder="Select an option" />
            

        </div>
    );
}

export default ProductPanel;