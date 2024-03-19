import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Accordian", url: "accordian" },
    { id: 3, text: "Image Slider", url: "image-slider" },
    { id: 4, text: "Product Loader", url: "product-loader" },
    { id: 5, text: "Random Color", url: "random-color-generator" },
    { id: 6, text: "Tree View", url: "tree-view" },
  ];
  return (
    <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
      {/* main div */}
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        {/* This a tag is for logo */}
        <Link
          to='/'
          className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Web Coders
          </span>
        </Link>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            {/* <span className='text-white'>hello</span> */}
          </div>
          {/* sign in button */}
          <div className='flex gap-2'>
            <Link
              href='#'
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'>
              Sign In
            </Link>
            <Link
              href='#'
              className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
              Register
            </Link>
          </div>
          {/* mobile menu */}
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className='block lg:hidden text-white mx-5 '>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          {/* mobile navigation items */}
          <ul
            className={
              nav
                ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-20"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%] z-20"
            }>
            {navItems.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.url}
                  className='block py-2 pl-3 pr-4 m-2 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white'
                  aria-current='page'>
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        {/* this is for links */}
        <div
          className='items-center justify-between w-full lg:flex lg:w-auto lg:order-1'
          id='mobile-menu-2'>
          <ul className='hidden lg:flex mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    className='block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white'
                    aria-current='page'>
                    {item.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
