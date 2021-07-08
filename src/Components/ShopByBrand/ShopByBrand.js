import React from "react";
import "./ShopByBrand.css";
const ShopByProduct = () => {
  return (
    <>
      <div className="ShopByProduct__Container">
        <h3>SHOP BY BRANDS</h3>
        <div className="ShopByProduct__Flex">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpYuXZXw4-vI4YSkLGKhx5rN2g_BJnfPb-bA&usqp=CAU"
            alt="Adidas Brand"
          />
          <img
            src="https://p.kindpng.com/picc/s/150-1506515_logo-puma-png-transparent-png.png"
            alt="Puma Brand"
          />
          <img
            src="https://c.static-nike.com/a/images/w_1920,c_limit/mdbgldn6yg1gg88jomci/image.jpg"
            alt="Nike brand"
          />
          <img
            src="https://changetyre.com/wp-content/uploads/2017/07/MRF.jpg"
            alt="Mrf brand"
          />
        </div>
      </div>
    </>
  );
};

export default ShopByProduct;
