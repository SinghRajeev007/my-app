
import React from "react";
import './ekart.css';
export default function ChildFunction(productDetails){
const {productId ,productPic , productName , Brand ,productDescription ,Price ,Rating} = productDetails
  
  const alertFunction = () => {
    alert(`Product of is  ${productId} , which is ${productName} of brand ${Brand} has of dollor ${Price} is added in the cart , please proceed to pay !!!` )
 }
  return(
    <div className = "wrapper" >
      <div className = "image">
    <img 
      src = {productPic}
      height = "100px"
      width = "100px"
      style = {{borderRadius : "50%"}}
      />
      </div>
      <h5>{productId}</h5>
      <h4>{productName}</h4>
      <h4>Brand: {Brand}</h4>
      <p>{productDescription}</p>
      <h3>price: {Price}</h3>
      <h4>{Rating}</h4>
      

      <button className ="abc"
      
       onClick = {alertFunction}
     // style = {buttonStyle}
  
      >Add to cart</button>


      </div>

  )
}