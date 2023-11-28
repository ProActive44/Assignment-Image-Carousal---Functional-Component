import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  const [index, setIndex] = useState(0);

  const handleIncrease = () => {
    if (index < images.length - 1)
      setIndex(index + 1);
  };

  const handleDecrease = () => {
    if (index > 0) 
    setIndex(index - 1);
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${images[index].img})` }}
    >
      <div onClick={handleDecrease} className="Arrows">
        <ArrowBackIosIcon />
      </div>
      <div className="imgContainer">
        <h1>{images[index].title}</h1>
        <p>{images[index].subtitle}</p>
      </div>
      <div onClick={handleIncrease} className="Arrows">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}

export default Carousel;
