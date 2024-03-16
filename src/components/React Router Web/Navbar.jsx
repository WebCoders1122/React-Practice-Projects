import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Accordian" },
    { id: 3, text: "Image Slider" },
    { id: 4, text: "Product Loader" },
    { id: 5, text: "Random Color" },
  ];
  return (
    <nav className='bg-white border-gray-200 py-2.5 dark:bg-gray-900'>
      {/* main div */}
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto'>
        {/* This a tag is for logo */}
        <a
          href='#'
          className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Web Coders
          </span>
        </a>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            {/* <span className='text-white'>hello</span> */}
          </div>
          {/* sign in button */}
          <div className='flex gap-2'>
            <a
              href='#'
              className='text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800'>
              Sign In
            </a>
            <a
              href='#'
              className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'>
              Register
            </a>
          </div>
          {/* this button is for mobile menu */}
          {/* <button
            data-collapse-toggle='mobile-menu-2'
            type='button'
            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='mobile-menu-2'
            aria-expanded='true'>
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
            </svg>
            <svg
              className='hidden w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          </button> */}
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className='block lg:hidden text-white mx-5'>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          {/* mobile navigation items */}
          <ul
            className={
              nav
                ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href='#'
                  className='block py-2 pl-3 pr-4 m-2 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white'
                  aria-current='page'>
                  {item.text}
                </a>
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
                  <a
                    href='#'
                    className='block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white'
                    aria-current='page'>
                    {item.text}
                  </a>
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
