import React, { useState, useEffect } from "react";
import "./Product.css";
import Navbar from "../../Components/Navbar/Navbar";
import Product1 from "../../Assets/Product1.jpg";
import { BestSellerData } from "../../Data/BestSellerData";
const Product = ({ match }) => {
  const ID = match.params.ID;
  const [ProductDetail, setProductDetail] = useState({ Name: "", Price: "" });
  useEffect(() => {
    BestSellerData.find((Item) => {
      if (Item.ID == ID) {
        setProductDetail(Item);
      }
    });
  }, [ID]);

  const { Name, Price, Image } = ProductDetail;
  return (
    <>
      <Navbar />
      <div className="Product__Container">
        <div className="Product__Left">
          <img src={Image} alt="Product" />
        </div>
        <div className="Product__Right">
          <h1>{Name}</h1>
          <h2>₹ {Price}</h2>
          <button>Buy Now</button>
          <h3>Product Description</h3>
          <p>
            Ad officia Lorem ex amet laboris consequat adipisicing eiusmod est
            incididunt non do. Eu dolor veniam ipsum magna sit consectetur
            exercitation esse est aute esse. Ex nulla ut velit ipsum. Commodo
            consectetur nulla est proident irure eu esse deserunt.
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
