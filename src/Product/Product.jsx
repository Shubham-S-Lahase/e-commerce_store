import React from "react";

const Product = (productinfo) => {
    // console.log(productinfo);
    let imageUrl = productinfo.productinfo.attributes.GameImage.data.attributes.url
    let imgSrc =  `http://localhost:1337${imageUrl}`
    // console.log(imgSrc);
    return(
        <>
        <div>  
            <img src={imgSrc}/>
            <span>{productinfo.productinfo.attributes.ProductName}</span>
            <span id="price">{productinfo.productinfo.attributes.Price}</span>
          </div>
        </>
    );
};

export default Product;