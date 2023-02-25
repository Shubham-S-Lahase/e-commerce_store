import React, { useEffect, useState } from "react";
import "./HomePage.css";
import Product from "../Product/Product";

const HomePage = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/games?populate=*", {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      // },
    })
      .then(async (response) => await response.json())
      .then(async (data) => {
        await setProductData(data.data);        
      });
  }, []);

  // console.log(productData);
  return (
    <>
      <div className="home-container">
        {
          productData.map((product, i) => {
            // console.log(product);
           return <Product key={i} productinfo={product} />
          })
        }
      </div>
    </>
  );
};

export default HomePage;
