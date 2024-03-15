import React from "react";
//components
import Accordian from "./components/Accordion/Accordian";
import RandomColor from "./components/Random Color Generator/RandomColor";
import StarRating from "./components/Star_Rating/StarRating";
import ImageSlider from "./components/Image Slider/ImageSlider";
import LoadMoreButton from "./components/Load-More-Button/LoadMoreButton";
import ReactRouterWeb from "./components/React Router Web/ReactRouterWeb";
const App = () => {
  return (
    <div className='app_container'>
      {/* <Accordian /> */}
      {/* <RandomColor /> */}
      {/* <StarRating /> */}
      {/* <ImageSlider />  */}
      {/* <LoadMoreButton /> */}
      <ReactRouterWeb />
    </div>
  );
};

export default App;
