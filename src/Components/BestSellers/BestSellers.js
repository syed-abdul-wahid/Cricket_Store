import React from "react";
import "./BestSellers.css";
import { BestSellerData } from "../../Data/BestSellerData";
import BestSellerCard from "./BestSellerCard";
function BestSellers() {
  return (
    <>
      <div className="BestSeller__Container">
        <h2>BEST SELLERS</h2>
        <div className="BestSeller__Flex">
          {BestSellerData.map((Item) => {
            return <BestSellerCard Item={Item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default BestSellers;
