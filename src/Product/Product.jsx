import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Product = (productinfo) => {
  console.log(productinfo);
  let imageUrl =
    productinfo.productinfo.attributes.GameImage.data.attributes.url;
  let imgSrc = `http://localhost:1337${imageUrl}`;
  let id = productinfo.productinfo.id;
  let name = productinfo.productinfo.attributes.ProductName;
  let price = productinfo.productinfo.attributes.Price
  // console.log(id);
  // console.log(imgSrc);

  const { addItem } = useCart();
  const cartItem = {
    id : id,
    name: name,
    price: price,
    quantity: 1,
    imageroute: imgSrc, 
  }

  const[nav, setNav] = useState(false);
  if(nav){
    <Navigate to={"/cart"}/>
  }

  return (
    <>
      <div>
        <img src={imgSrc} />
        <span>{name}</span>
        <span id="price">RS {price}</span>
        <button
         id="cart" 
         onClick={() => {
          addItem(cartItem)
          alert(`Item added sucessfully
                Please view cart for placing order    
          `);
          setNav(true);
          }}>
          Add to Cart
         </button>
      </div>
    </>
  );
};

export default Product;
