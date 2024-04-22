import React, { useState } from "react";
import "flowbite";
import { initFlowbite } from "flowbite/lib/esm";
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
import { useEffect } from "react";

//react icons for dark and light mode
import { CiDark, CiLight } from "react-icons/ci";

const Navbar = () => {
  useEffect(() => {
    initFlowbite();
  }, []);
  //redux
  const darkMode = useSelector((state) => state.darkMode.mode);
  const dispatch = useDispatch();
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // to handle darkmode
  const handleDarkMode = () => {
    darkMode == true ||
    (darkMode == null &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };
  useEffect(() => {
    handleDarkMode();
  }, [darkMode]);

  //for dropdowns
  const [expand, setExpand] = useState(false);
  // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", url: "/" },
    { id: 3, text: "Image Slider", url: "image-slider" },
    { id: 4, text: "Product Loader", url: "product-loader" },
  ];
  const dropDownItems = [
    { id: 2, text: "Accordian", url: "accordian" },
    { id: 5, text: "Random Color", url: "random-color-generator" },
    { id: 6, text: "Tree View", url: "tree-view" },
    { id: 7, text: "QR Code", url: "qr-code" },
    { id: 8, text: "Custom Tabs", url: "custom-tabs" },
    { id: 9, text: "Custom Pop Up", url: "custom-popup" },
    { id: 10, text: "GitHub Profile Finder", url: "github-finder" },
    { id: 11, text: "Search Autocomplete", url: "search-autocomplete" },
  ];
  return (
    <nav
      className={
        "bg-white border-gray-200 py-2.5 relative w-full dark:bg-gray-900 ease-linear duration-200"
      }>
      {/* main div */}
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto '>
        {/* This a tag is for logo */}
        <Link
          to='/'
          className='flex items-center'>
          <span
            className={`self-center text-xl text-purple-800 font-bold whitespace-nowrap dark:text-white`}>
            Web Coders
          </span>
        </Link>
        <div className='flex items-center lg:order-2'>
          <div className='hidden mt-2 mr-4 sm:inline-block'>
            {/* <span className='text-white'>hello</span> */}
          </div>
          {/* sign in button */}
          <div className='flex gap-1'>
            {/* dark mode toggler */}
            {darkMode == true ||
            (darkMode == null &&
              window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
              <button
                className='text-2xl bg-gray-200 dark:bg-gray-800 rounded-md p-1 px-2 mx-2 hover:bg-gray-300 hover:dark:bg-gray-700 dark:text-white ease-linear duration-200'
                onClick={() => dispatch(toggleMode(false))}>
                <CiLight />
                {/* <CiDark /> */}
              </button>
            ) : (
              <button
                className='text-2xl bg-gray-200 dark:bg-gray-800 rounded-md p-1 px-2 mx-2 hover:bg-gray-300 hover:dark:bg-gray-700 dark:text-white ease-linear duration-200'
                onClick={() => dispatch(toggleMode(true))}>
                <CiDark />
                {/* <CiLight /> */}
              </button>
            )}
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
                className={`flex text-white font-semibold bg-gradient-to-r from-violet-400 via-violet-600 to-violet-700 dark:from-gray-400 dark:via-gray-600 dark:to-gray-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-violet-400 dark:focus:ring-gray-400
                rounded-lg text-sm px-5 py-2 text-center me-2`}
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
                className={`hidden z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul
                  className={`py-2 text-sm text-gray-700 dark:text-gray-400
                  `}
                  aria-labelledby='dropdownDefaultButton'>
                  {dropDownItems
                    ? dropDownItems.map((navItem) => {
                        return (
                          <li key={navItem.id}>
                            <Link
                              to={navItem.url}
                              onClick={() => setExpand(!expand)}
                              className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white
                              `}>
                              {navItem.text}
                            </Link>
                          </li>
                        );
                      })
                    : null}
                </ul>
              </div>
            </div>
          </div>
          {/* mobile menu */}
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className={`block lg:hidden mx-5 text-violet-700 dark:text-white`}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          {/* mobile navigation items */}
          <ul
            className={
              nav
                ? `fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-500 bg-white ease-in-out duration-500 z-20
                    dark:bg-[#000300]`
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
                       dark:text-white`}>
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
