import React from "react";
//import "./ekart.css";
import "./index.css";
import ChildFunction from "./component/ekart";

export default function ParentFunction() {

  const productDetails = [
   {
    productId : "1",
    productPic : "https://folder.pk/wp-content/uploads/2020/08/Shoes-550x550.jpg",
    productName : "shoes",
    Brand : "nike",
    productDescription : "this is for men , size is 9 ",
    Price : "10$",
    Rating : "rating-4"
   },
   {
  productId : "2",
  productPic : "https://i.ebayimg.com/images/g/75AAAOSwCmRbBpWx/s-l400.jpg",
  productName : "Watch",
  Brand : "Rolex",
  productDescription : "for men ,silver color ,metal ,analog" ,
  Price : "20$",
  Rating : "rating-4"
  },
  {
  productId : "3",
  productPic : "https://i.pinimg.com/736x/13/69/94/136994c758176cc6b53f96bcbbeaf00d.jpg",
  productName : "Jeans",
  Brand : "H&M",
  productDescription : "for men,size 32 ,cotton fibric , blue color ",
  Price : "15$",
  Rating : "rating-4"
  },
  {
  productId :"4",
  productPic :"https://th.bing.com/th/id/OIP.iqNtZ-hvzyA1SWw13kcBnwHaIy?pid=ImgDet&rs=1",
  productName :"Belt",
  Brand : "killer",
  productDescription : "for men , medium size ",
  Price : "10$",
  Rating : "rating-4"
 },
 {
 productId : "5",
 productPic :"https://ih1.redbubble.net/image.1127519034.5217/ssrco,slim_fit_t_shirt,mens,101010:01c5ca27c6,side,tall_three_quarter,750x1000.jpg",
 productName : "T-shirt",
 Brand : "Levis",
 productDescription : "for men, cotton, size 42",
 Price : "16$",
 Rating :"rating-4"
 }, 
]

 return (
  <div className="app">
      {productDetails.map((user, index) => (
        <ChildFunction key={index} {...user} />
      ))}
    </div>
 )
    
  
}

