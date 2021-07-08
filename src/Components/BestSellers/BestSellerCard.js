import React from "react";
import "./BestSellers.css";
const BestSellerCard = ({ Item }) => {
  return (
    <div className="BestSeller__FlexItem">
      <img
        className="BestSeller__FlexItem--Image"
        src={Item.Image}
        alt={Item.Name}
      />
      <span className="BestSeller__FlexItem--Name">{Item.Name}</span>
      <span className="BestSeller__FlexItem--Price">Rs.{Item.Price}</span>
    </div>
  );
};

export default BestSellerCard;
