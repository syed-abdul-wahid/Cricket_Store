import React from "react";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import BattingScreen from "./Screens/BattingScreen/BattingScreen";
import BowlingScreen from "./Screens/BowlingScreen/BowlingScreen";
import ClothingScreen from "./Screens/ClothingScreen/ClothingScreen";
import WicketKeepingScreen from "./Screens/WicketKeepingScreen/WicketKeepingScreen";
import AccessoriesScreen from "./Screens/AccessoriesScreen/AccessoriesScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={HomeScreen} />
      <Route exact path="/Batting" component={BattingScreen} />
      <Route exact path="/Bowling" component={BowlingScreen} />
      <Route exact path="/WicketKeeping" component={WicketKeepingScreen} />
      <Route exact path="/Clothing" component={ClothingScreen} />
      <Route exact path="/Accessories" component={AccessoriesScreen} />
    </Router>
  );
};

export default App;
