import React from "react";
import "./Categories.css";
const Categories = () => {
  return (
    <>
      <div className="Category__Container">
        <h1>SHOP BY CATAGORY</h1>
        <div className="Category__Grid">
          <div className="Category__Batting">
            <img
              src=" https://cdn.shopify.com/s/files/1/2653/2386/products/image_77ffadbd-5c0d-4727-aa82-ae6d0cb1e06f_1800x1800.jpg?v=1615240632"
              alt="bats"
            />
            <div className="batting">
              <div className="Batting__Text">Batting</div>
            </div>
          </div>
          <div className="Category__Bowling">
            <img
              src="https://img.redbull.com/images/c_crop,x_139,y_0,h_1480,w_1727/c_fill,w_650,h_540/q_auto,f_auto/redbullcom/2018/04/23/48929a71-45e3-4508-aacb-3bba34c689d9/kookaburra-pink-cricket-ball"
              alt="balls"
            ></img>
          </div>
          <div className="Category__WicketKeeping">
            <img
              src="http://www.cricketlab.co/wp-content/uploads/2015/03/CRICKETLAB_Wicket_Keeper2.jpg"
              alt="wicketkeeping"
            ></img>
          </div>
          <div className="Category__Accessories">
            <img
              src="https://static.toiimg.com/photo/msid-74210389,resizemode-4/74210389.cms"
              alt="accessories"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
