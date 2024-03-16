import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ stars = 5 }) => {
  //step 2: write your code here
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);

  const totalStars = stars;

  const handleClick = (currentStar) => {
    setRating(currentStar);
  };
  const handleMouseEnter = (currentStar) => {
    setHover(currentStar);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };
  return (
    <div className='star_container flex justify-center items-center min-h-screen bg-orange-50'>
      {[...Array(totalStars)].map((star, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={
              index <= (hover || rating) ? "text-yellow-400" : "text-black"
            }
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={30}
          />
        );
      })}
    </div>
  );
};

export default StarRating;

// step 1: you can make some function here for react-router-dom loader and export it. import in main.jsx and put name of function in loader. return data in "response.json() format"
//step 2: useLoaderData is hook that will give access to data fetched by loader with your above function. eg: const data = useLoaderData()
