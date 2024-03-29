import React, { useState } from "react";
import "flowbite";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  IoIosArrowDropupCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toggleMode } from "../../app/darkMode/darkModeSlice";
import MyButton from "../Reuseable Components/MyButton";

const Navbar = () => {
  //redux
  const darkMode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
  //for dropdowns
  const [expand, setExpand] = useState(false);
  // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Accordian", url: "accordian" },
    { id: 3, text: "Image Slider", url: "image-slider" },
    { id: 4, text: "Product Loader", url: "product-loader" },
    { id: 5, text: "Random Color", url: "random-color-generator" },
    { id: 6, text: "Tree View", url: "tree-view" },
    { id: 7, text: "QR Code", url: "qr-code" },
  ];
  return (
    <nav
      className={`bg-white border-gray-200 py-2.5 relative w-full ${
        darkMode && "dark:bg-gray-900"
      }`}>
      {/* main div */}
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto '>
        {/* This a tag is for logo */}
        <Link
          to='/'
          className='flex items-center'>
          <span
            className={`self-center text-xl text-purple-800 font-bold whitespace-nowrap ${
              darkMode && "dark:text-white"
            }`}>
            Web Coders
          </span>
        </Link>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            {/* <span className='text-white'>hello</span> */}
          </div>
          {/* sign in button */}
          <div className='flex gap-1'>
            <Link>
              <MyButton
                text='Toggle'
                color='violet'
                onClick={() => dispatch(toggleMode())}
              />
            </Link>
            <Link href='#'>
              <MyButton text='Sign In' />
            </Link>
            <Link href='#'>
              <MyButton
                text='Register'
                color='dark'
              />
            </Link>
            <div>
              {/* DropDown menu main button */}
              <button
                id='dropdownDefaultButton'
                data-dropdown-toggle='dropdown'
                onClick={() => setExpand(!expand)}
                className={`flex text-white font-semibold bg-gradient-to-r ${
                  !darkMode
                    ? "from-violet-400 via-violet-600 to-violet-700"
                    : "from-gray-400 via-gray-600 to-gray-700"
                } hover:bg-gradient-to-br focus:ring-4 focus:outline-none ${
                  !darkMode
                    ? "focus:ring-violet-400 dark:focus:ring-violet-900"
                    : "focus:ring-gray-400 dark:focus:ring-gray-900"
                } rounded-lg text-sm px-5 py-2 text-center me-2`}
                type='button'>
                Small Components &nbsp;
                {expand ? (
                  <IoIosArrowDropupCircle size={20} />
                ) : (
                  <IoIosArrowDroprightCircle size={20} />
                )}
              </button>
              {/* Dropdown menu */}
              <div
                id='dropdown'
                className={`z-10 ${
                  expand ? null : "hidden"
                } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ${
                  darkMode && "dark:bg-gray-700"
                } `}>
                <ul
                  className={`py-2 text-sm text-gray-700 ${
                    darkMode && "dark:text-gray-200"
                  }`}
                  aria-labelledby='dropdownDefaultButton'>
                  <li>
                    <Link
                      to='custom-tabs'
                      onClick={() => setExpand(!expand)}
                      className={`block px-4 py-2 hover:bg-gray-100 ${
                        darkMode &&
                        "dark:hover:bg-gray-600 dark:hover:text-white"
                      }`}>
                      Custom Tabs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className={`block lg:hidden mx-5 text-violet-700 ${
              darkMode && "dark:text-white"
            }`}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          {/* mobile navigation items */}
          <ul
            className={
              nav
                ? `fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-white ease-in-out duration-500 z-20
                    ${darkMode && "dark:bg-[#000300]"}`
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
        <div className='items-center justify-between w-full lg:flex lg:w-auto lg:order-1'>
          <ul className='hidden lg:flex mt-4 font-medium lg:flex-row lg:space-x-5 lg:mt-0'>
            {navItems.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={item.url}
                    className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 "
                       ${darkMode && "dark:text-white"}`}>
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
