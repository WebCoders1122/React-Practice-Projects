import React, { useRef } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import MyButton from "../Reuseable Components/MyButton";

const ScrollToTopBottom = () => {
  const data = useLoaderData();
  console.log(data);
  //ref for scroll section
  const sectionRef = useRef();
  // scroll to top and bottom functions
  const handleScrollToBottom = () => {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='flex flex-col gap-2 my-5 items-center w-screen'>
      <MyButton onClick={() => handleScrollToBottom()}>
        Scroll to Bottom
      </MyButton>
      <br />
      <MyButton onClick={() => handleScrollToSection()}>
        Scroll to Section
      </MyButton>
      <div className='products dark:text-white my-2'>
        {data &&
          data.length &&
          data.map((item, index) => (
            <p
              ref={index === 53 ? sectionRef : null}
              key={item.id}
              className='py-1 text-center my-10'>
              {item.title}
              {/* {index} */}
            </p>
          ))}
      </div>
      <MyButton onClick={() => handleScrollToTop()}>Scroll to Top</MyButton>
    </div>
  );
};

export default ScrollToTopBottom;

export const ScrollToTopBottom_loader = async () => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  return response.data.products;
};
