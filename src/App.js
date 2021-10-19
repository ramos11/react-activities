import React from "react";
import "./style.css";
import Product from './Product.js';
import ProductPanel from './ProductPanel.js';

const name1 = "Toaster";
const id1 = "T01234";
const datePurchased1 = "16/10/2021";
const price1 = "£20.00";

// function Product(props){
//   return(
//     <div>
//       {props.name}{props.id}{props.datePurchased}{props.price}
//     </div>
//   )
// }

// function toString(nm,id,date,pr){
//   return nm + ", " + id + ", " + date + ", " + pr;
// }

function clickHandler(){
  window.alert(toString(name1, id1, datePurchased1, price1))
}

function App() {
  return (
    <div>
      <ProductPanel/>
      <Product name={name1} id={id1} datePurchased={datePurchased1} price={price1}/>
      <button onClick={clickHandler}>
        Show Product
      </button>
    </div>
  );
}

export default App;