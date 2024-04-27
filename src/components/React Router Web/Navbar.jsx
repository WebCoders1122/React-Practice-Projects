import React, { useState } from "react";
import "flowbite";
import { initFlowbite } from "flowbite/lib/esm";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
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
    return setNav(!nav);
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
    setExpand(false);
  }, [darkMode]);

  //for dropdowns
  const [expand, setExpand] = useState(false);
  // console.log(window.matchMedia("(prefers-color-scheme: dark)"));
  // Array containing navigation items
  const dropDown1 = [
    // { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Image Slider", url: "image-slider" },
    { id: 3, text: "Product Loader", url: "product-loader" },
    { id: 4, text: "Tic Tac Toe", url: "tic-tac-toe" },
  ];
  const dropDown2 = [
    { id: 2, text: "Accordian", url: "accordian" },
    { id: 5, text: "Random Color", url: "random-color-generator" },
    { id: 6, text: "Tree View", url: "tree-view" },
    { id: 7, text: "QR Code", url: "qr-code" },
    { id: 8, text: "Custom Tabs", url: "custom-tabs" },
    { id: 9, text: "Custom Pop Up", url: "custom-popup" },
    { id: 10, text: "GitHub Profile Finder", url: "github-finder" },
    { id: 11, text: "Search Autocomplete", url: "search-autocomplete" },
    { id: 12, text: "Feature Flag", url: "feature-flag" },
  ];
  return (
    <nav className='bg-white border-grey-200 dark:bg-grey-900 dark:border-grey-700'>
      {/* main navbar div */}
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        {/*logo*/}
        <Link
          to='/'
          className='flex items-center'>
          <span
            className={`self-center text-2xl text-purple-800 font-bold whitespace-nowrap dark:text-red-500`}>
            Web Coders
          </span>
        </Link>
        {/*logo end*/}

        {/* div for mobile menu button and theme mode toggler */}
        <div className='flex justify-center items-center gap-2 '>
          <div className='md:hidden'>
            {/* dark mode toggler */}
            {darkMode == true ||
            (darkMode == null &&
              window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
              <button
                className='text-2xl font-bold bg-grey-200 dark:bg-grey-800 rounded-md p-2 w-10 h-10 hover:bg-grey-300 dark:hover:bg-red-700 dark:focus:ring-grey-600 dark:active:focus:ring-red-400 dark:text-white ease-linear duration-200'
                onClick={() => dispatch(toggleMode(false))}>
                <CiLight />
                {/* <CiDark /> */}
              </button>
            ) : (
              <button
                className='text-2xl hover:bg-grey-100 rounded-md p-2 w-10 h-10hover:dark:bg-grey-700 dark:text-white ease-linear duration-200'
                onClick={() => dispatch(toggleMode(true))}>
                <CiDark />
                {/* <CiLight /> */}
              </button>
            )}
            {/* dark mode toggler end */}
          </div>

          {/* mobile menu button */}
          <button
            data-collapse-toggle='navbar-multi-level'
            type='button'
            onClick={handleNav}
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-grey-500 rounded-lg md:hidden hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-grey-200 dark:text-grey-400 dark:hover:bg-red-700 dark:focus:ring-grey-600 dark:active:focus:ring-red-400 ease-linear duration-200'
            aria-controls='navbar-multi-level'
            aria-expanded='false'>
            <span className='sr-only'>Open main menu</span>
            <div
              className={`block lg:hidden mx-5 text-violet-700 dark:text-white`}>
              {nav ? (
                <AiOutlineClose
                  className='ease-linear duration-200'
                  size={25}
                />
              ) : (
                <AiOutlineMenu
                  className='ease-linear duration-200'
                  size={25}
                />
              )}
            </div>
          </button>
          {/* mobile menu button end */}
        </div>

        {/* div for main nav menu */}
        <div
          className='hidden w-full md:block md:w-auto'
          id='navbar-multi-level'>
          {/* main nav menu */}
          <ul className='flex flex-col md:justify-center md:items-center justify-center font-medium p-4 md:p-0 mt-4 border border-grey-100 rounded-lg bg-grey-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-grey-800 md:dark:bg-grey-900 dark:border-grey-700'>
            <li>
              <Link
                href='#'
                className='block py-2 px-3 text-white bg-purple-700 rounded md:bg-transparent md:text-purple-700 md:p-0 md:dark:text-red-500 dark:bg-red-600 md:dark:bg-transparent'
                aria-current='page'>
                Home
              </Link>
            </li>

            {/* 1st and 2nd drop down menus */}
            <li>
              <button
                onClick={() => setExpand(!expand)}
                id='dropdownNavbarLink'
                data-dropdown-toggle='dropdownNavbar'
                className='flex items-center justify-between w-full py-2 px-3 text-grey-900 hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-red-500 dark:focus:text-white dark:hover:bg-grey-700 md:dark:hover:bg-transparent'>
                Projects &nbsp;
                {expand ? (
                  <IoIosArrowDown size={20} />
                ) : (
                  <IoIosArrowForward size={20} />
                )}
              </button>

              {/* 1st Dropdown menu */}
              <div
                id='dropdownNavbar'
                className={`z-10 ${
                  expand ? null : "hidden"
                } font-normal bg-white divide-y divide-grey-100 rounded-lg shadow w-44 dark:bg-grey-700 dark:divide-grey-600`}>
                <ul
                  className='py-2 text-sm text-grey-700 dark:text-grey-200'
                  aria-labelledby='dropdownLargeButton'>
                  {dropDown1 &&
                    dropDown1.map((dropDownItem) => (
                      <li
                        key={dropDownItem.id}
                        onClick={() => setExpand(!expand)}>
                        <Link
                          to={dropDownItem.url}
                          className='block px-4 py-2 hover:bg-grey-100 dark:hover:bg-grey-600 dark:hover:text-white'>
                          {dropDownItem.text}
                        </Link>
                      </li>
                    ))}
                  <li aria-labelledby='dropdownNavbarLink'>
                    <button
                      id='doubleDropdownButton'
                      data-dropdown-toggle='doubleDropdown'
                      data-dropdown-placement='right-start'
                      type='button'
                      className='flex items-center justify-between w-full px-4 py-2 hover:bg-grey-100 dark:hover:bg-grey-600 dark:hover:text-white'>
                      Small Projects <IoIosArrowDown size={20} />{" "}
                    </button>

                    {/* 2nd dropdown menu */}
                    <div
                      id='doubleDropdown'
                      className='z-10 hidden bg-white divide-y divide-grey-100 rounded-lg shadow w-44 dark:bg-grey-700'>
                      <ul
                        className='py-2 text-sm text-grey-700 dark:text-grey-200'
                        aria-labelledby='doubleDropdownButton'>
                        {dropDown2 &&
                          dropDown2.map((dropDownItem) => (
                            <li
                              key={dropDownItem.id}
                              onClick={() => setExpand(!expand)}>
                              <Link
                                to={dropDownItem.url}
                                className='block px-4 py-2 hover:bg-grey-100 dark:hover:bg-grey-600 dark:text-grey-200 dark:hover:text-white'>
                                {dropDownItem.text}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                </ul>
                <div className='py-1'>
                  <Link
                    href='#'
                    className='block px-4 py-2 text-sm text-grey-700 hover:bg-grey-100 dark:hover:bg-grey-600 dark:text-grey-200 dark:hover:text-white'>
                    Sign out
                  </Link>
                </div>
              </div>
              {/* Dropdown top menu end*/}
            </li>

            <li>
              <Link
                href='#'
                className='block py-2 px-3 text-grey-900 rounded hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-grey-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Services
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 px-3 text-grey-900 rounded hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-grey-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 px-3 text-grey-900 rounded hover:bg-grey-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-grey-700 dark:hover:text-white md:dark:hover:bg-transparent'>
                Contact
              </Link>
            </li>
            <li>
              {/* dark mode toggler for large screens */}
              <div className='hidden md:block -mx-3'>
                {/* dark mode toggler */}
                {darkMode == true ||
                (darkMode == null &&
                  window.matchMedia("(prefers-color-scheme: dark)").matches) ? (
                  <button
                    className='text-2xl font-bold bg-grey-200 dark:bg-grey-800 rounded-md p-2 w-10 h-10 hover:bg-grey-300 dark:hover:bg-red-700 dark:focus:ring-grey-600 dark:active:focus:ring-red-400 dark:text-white ease-linear duration-200'
                    onClick={() => dispatch(toggleMode(false))}>
                    <CiLight />
                    {/* <CiDark /> */}
                  </button>
                ) : (
                  <button
                    className='text-2xl hover:bg-grey-100 rounded-md p-2 w-10 h-10hover:dark:bg-grey-700 dark:text-white ease-linear duration-200'
                    onClick={() => dispatch(toggleMode(true))}>
                    <CiDark />
                    {/* <CiLight /> */}
                  </button>
                )}
                {/* dark mode toggler end */}
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* main navbar div end*/}
    </nav>
  );
};

export default Navbar;
