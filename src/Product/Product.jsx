import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <div>
        <img src={imgSrc} />
        <span>{name}</span>
        <span id="price">RS {price}</span>
        <Link to={{pathname:"/productpage",id:{id}}} ><button id="buy">BUY</button></Link>
        <button id="cart" onClick={() => addItem(cartItem)}>Add to Cart</button>
      </div>
    </>
  );
};

export default Product;
