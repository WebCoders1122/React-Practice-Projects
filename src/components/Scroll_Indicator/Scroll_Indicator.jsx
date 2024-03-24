import React from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Scroll_Indicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const data = useLoaderData();
  const handleScroll = () => {
    // console.log(
    //   document.body.scrollTop,
    //   document.documentElement.scrollTop, // tells how much points scrolled from top
    //   document.documentElement.scrollHeight, // total scrolable height of page
    //   document.documentElement.clientHeight // height of user display screen
    // );
    let heightScrolled = document.documentElement.scrollTop;
    let totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight; // this is effective scrollable height
    let scrollPercentage = (heightScrolled / totalHeight) * 100;
    // console.log(scrollPercentage);
    setScrollPercent(scrollPercentage);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPercent]);
  return (
    <div className='scroll_container relative'>
      <div className='scroll_header bg-gray-500 fixed w-full h-10'>
        <h2 className='absolute top-0 left-0 text-xl font-bold text-white sm:text-3xl text-center w-full z-[1] h-10'>
          Scroll Indicator
        </h2>
        <span
          className='absolute text-xl font-bold text-black sm:text-3xl text-left h-10 bg-violet-500'
          style={{ width: `${scrollPercent}%` }}></span>
      </div>
      <div className='content text-center p-3'>
        {data && data.length
          ? data.map((product) => {
              return (
                <h3
                  key={product.id}
                  className='text-xl text-gray-900 m-2'>
                  {product.title}
                </h3>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default Scroll_Indicator;

export const Scroll_Indicator_loader = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  return response.data.products;
};
