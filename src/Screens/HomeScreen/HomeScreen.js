import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Carousels from "../../Components/Carousel/Carousels";
import Categories from "../../Components/Categories/Categories";
function HomeScreen() {
 
    return (
    <div>
      <Navbar />
      <Carousels />
      <Categories />
    </div>
  );
}

export default HomeScreen;
