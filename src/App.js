import React from "react";
import "./style.css";

const name1 = "Toaster";
const id1 = "T01234";
const datePurchased1 = "16/10/2021";
const price1 = "20.00";

// const nm = "Name: ";

function Product(props){
  return(
    <div>
      {props.name}{props.id}{props.datePurchased}{props.price}
    </div>
  )
}

function toString(nm,id,date,pr){
  return nm + ", " + id + ", " + date + ", " + pr;
}

function clickHandler(){
  window.alert(toString(name1, id1, datePurchased1, price1))
}

export default function App() {
  return (
    <div>
      <Product name={name1}/>
      <Product id={id1}/>
      <Product datePurchased={datePurchased1}/>
      <Product price={price1}/>
      <button onClick={clickHandler}>
        Show Product
      </button>
    </div>
  );
}
