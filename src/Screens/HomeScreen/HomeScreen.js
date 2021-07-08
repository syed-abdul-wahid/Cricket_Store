import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Carousels from "../../Components/Carousel/Carousels";
import Categories from "../../Components/Categories/Categories";
import BestSellers from "../../Components/BestSellers/BestSellers";
import ShopByBrand from "../../Components/ShopByBrand/ShopByBrand";
import Footer from "../../Components/Footer/Footer";
function HomeScreen() {
  return (
    <div>
      <Navbar />
      <Carousels />
      <Categories />
      <BestSellers />
      <ShopByBrand />
      <Footer />
    </div>
  );
}

export default HomeScreen;
