import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
export default function Cart() {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem, emptyCart, totalItems, cartTotal } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
      <h1>Cart ({totalUniqueItems})</h1>
      <ul>
        {items.map((item) => (
          <li
            style={{
              display: "flex",
              alignContent: "center",
              alignItems: "center",
            }}
            key={item.id}
          >
            <img style={{ width: "100px" }} src={item.imageroute} />
            <h5 style={{ marginRight: "20px" }}>
              {item.quantity} x {item.name}
            </h5>
            <button
              style={{ fontSize: "25px", fontWeight: "bolder", width: "50px", marginRight:"10px" }}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              style={{ fontSize: "25px", fontWeight: "bolder", width: "50px", marginRight:"10px" }}
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button style={{fontSize:"15px", fontWeight:"bolder", width:"80px", }} onClick={() => removeItem(item.id)}>Remove Item</button>
          </li>
        ))}
      </ul>
      <div>
      <span style={{fontFamily:"serif", fontSize:"20px",marginRight:"20px"}} >Total Items: ({totalItems})</span>
      <span style={{fontFamily:"serif", fontSize:"20px",marginRight:"20px"}} >Total Sum: ({cartTotal})</span>
      <button style={{marginLeft:"200px", marginTop:"20px", fontFamily:"monospace", fontSize:"20px"}} onClick={emptyCart}>Empty Cart</button>
      </div>
      <div style={{marginTop:"20px"}}>
      <span style={{fontSize:"larger", marginRight:"30px"}}>To Proceed to Checkout & Payment Click on the next button</span>
      <Link to="/placeorder"><button style={{fontSize:"large",fontFamily:"cursive", backgroundColor:"green", color:"yellow"}}>Place Order & Pay</button></Link>
      </div>
    </>
  );
}
