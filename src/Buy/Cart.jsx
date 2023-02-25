import React from "react";
import { useCart } from "react-use-cart";
import { Navigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey:
    "pk_test_b2f874307684fdf4e7c54b3f82bc2a9bc13fa731",
};

// you can call this function anything
const onSuccess = (reference) => {
  // Implementation for whatever you want to do with reference and after success call.
  console.log(reference);
  alert("Payment Sucessful");
};

// you can call this function anything
const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  console.log("closed");
  <Navigate to={"/"} />
};

export default function Cart() {
  const initializePayment = usePaystackPayment(config);
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
    cartTotal,
  } = useCart();

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
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                width: "50px",
                marginRight: "10px",
              }}
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              style={{
                fontSize: "25px",
                fontWeight: "bolder",
                width: "50px",
                marginRight: "10px",
              }}
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button
              style={{ fontSize: "15px", fontWeight: "bolder", width: "80px" }}
              onClick={() => removeItem(item.id)}
            >
              Remove Item
            </button>
          </li>
        ))}
      </ul>
      <div>
        <span
          style={{ fontFamily: "serif", fontSize: "20px", marginRight: "20px" }}
        >
          Total Items: ({totalItems})
        </span>
        <span
          style={{ fontFamily: "serif", fontSize: "20px", marginRight: "20px" }}
        >
          Total Sum: ({cartTotal})
        </span>
        <button
          style={{
            marginLeft: "200px",
            marginTop: "20px",
            fontFamily: "monospace",
            fontSize: "20px",
          }}
          onClick={emptyCart}
        >
          Empty Cart
        </button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <span style={{ fontSize: "larger", marginRight: "30px" }}>
          To Proceed to Checkout & Payment Click on the next button
        </span>
          <button
            onClick={() => {
              initializePayment(onSuccess, onClose);
            }}
            style={{
              fontSize: "large",
              fontFamily: "cursive",
              backgroundColor: "green",
              color: "yellow",
            }}
          >
            Place Order & Pay
          </button>
      </div>
    </>
  );
}
