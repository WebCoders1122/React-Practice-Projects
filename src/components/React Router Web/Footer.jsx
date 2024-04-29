import React from "react";
import { Link } from "react-router-dom";
//social icons from react-icons
import { FaFacebook, FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-gray-50 border-t border-purple-400 dark:border-grey-400 dark:bg-grey-900 ease-linear duration-200'>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        {/* logo and links parent div */}
        <div className='md:flex md:justify-between'>
          {/* logo in footer */}
          <div className='mb-6 md:mb-0'>
            <a
              href='/'
              className='flex items-center'>
              {/* icon space */}
              <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
                Web Coders
              </span>
            </a>
          </div>

          {/* all link are here with catogaries */}
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            {/* resources */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-grey-900 uppercase dark:text-red-500'>
                Resources
              </h2>
              <ul className='text-grey-500 dark:text-grey-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://flowbite.com/'
                    className='hover:underline'>
                    Flowbite
                  </a>
                </li>
                <li>
                  <a
                    href='https://tailwindcss.com/'
                    className='hover:underline'>
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            {/* follow us */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-grey-900 uppercase dark:text-red-500'>
                Follow us
              </h2>
              <ul className='text-grey-500 dark:text-grey-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='https://github.com/themesberg/flowbite'
                    className='hover:underline '>
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://discord.gg/4eeurUVvTy'
                    className='hover:underline'>
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            {/* legel */}
            <div>
              <h2 className='mb-6 text-sm font-semibold text-grey-900 uppercase dark:text-red-500'>
                Legal
              </h2>
              <ul className='text-grey-500 dark:text-grey-400 font-medium'>
                <li className='mb-4'>
                  <a
                    href='#'
                    className='hover:underline'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:underline'>
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-grey-200 sm:mx-auto dark:border-grey-700 lg:my-8' />

        {/* copyright and social icons parent */}
        <div className='sm:flex sm:items-center sm:justify-between'>
          {/* copyright text */}
          <span className='text-sm text-grey-500 sm:text-center dark:text-grey-400'>
            © 2023{" "}
            <a
              href='/'
              className='hover:underline'>
              WebCoders™.{" "}
            </a>
            All Rights Reserved.
          </span>

          {/* social icons */}
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            <a
              href='#'
              className='text-grey-500 hover:text-grey-900 dark:hover:text-white'>
              <FaFacebook />
              <span className='sr-only'>Facebook page</span>
            </a>
            <a
              href='#'
              className='text-grey-500 hover:text-grey-900 dark:hover:text-white ms-5'>
              <FaDiscord />
              <span className='sr-only'>Discord community</span>
            </a>
            <a
              href='#'
              className='text-grey-500 hover:text-grey-900 dark:hover:text-white ms-5'>
              <FaXTwitter /> <span className='sr-only'>Twitter page</span>
            </a>
            <a
              href='#'
              className='text-grey-500 hover:text-grey-900 dark:hover:text-white ms-5'>
              <FaGithub /> <span className='sr-only'>GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>

    // <>
    //   <div className='bg-grey-100'>
    //     <div className='max-w-screen-lg px-4 sm:px-6 text-grey-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
    //       <div className='p-5'>
    //         <h3 className='font-bold text-xl text-indigo-600'>Web Coders</h3>
    //       </div>
    //       <div className='p-5'>
    //         <div className='text-sm uppercase text-indigo-600 font-bold'>
    //           Major Apps
    //         </div>
    //         <a
    //           className='my-3 block'
    //           href='/#'>
    //           Home
    //         </a>
    //         <a
    //           className='my-3 block'
    //           href='/#'>
    //           TODO App with React{" "}
    //           <span className='text-teal-600 text-xs p-1'>New</span>
    //         </a>
    //       </div>
    //       {/* small app section */}
    //       <div className='p-5'>
    //         <div className='text-sm uppercase text-indigo-600 font-bold'>
    //           Small Projects
    //         </div>
    //         <a
    //           className='my-3 block'
    //           href='/#'>
    //           Products Loader
    //         </a>
    //         <a
    //           className='my-3 block'
    //           href='/star-rating'>
    //           Star Rating
    //         </a>
    //         <a
    //           className='my-3 block'
    //           href='/#'>
    //           Accordian
    //         </a>
    //       </div>
    //       {/* Contact Section */}
    //       <div className='p-5'>
    //         <div className='text-sm uppercase text-indigo-600 font-bold'>
    //           Contact us
    //         </div>
    //         <a
    //           className='my-3 block'
    //           href='/#'>
    //           GitHub Link
    //         </a>

    //         <Link
    //           to='experiment'
    //           className='my-3 block'>
    //           Experiment
    //         </Link>
    //         <Link
    //           to='scroll-indicator'
    //           className='my-3 block'>
    //           Scroll Indicator
    //         </Link>
    //         <Link
    //           to='custom-tabs'
    //           className='my-3 block'>
    //           Custom Tabs
    //         </Link>
    //         <a
    //           className='my-3 block '
    //           href='/#'>
    //           Contact: webcoders1122@gmail.com
    //           <span className='text-teal-600 text-xs p-1'>Email</span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/* div for social and copyright */}
    //   <div className='bg-grey-100 pt-2'>
    //     <div className='flex pb-5 px-3 m-auto pt-5 border-t text-grey-800 text-sm flex-col max-w-screen-lg items-center'>
    //       <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
    //         Social Icons here
    //       </div>
    //       <div className='my-5'>© Copyright 2024. All Rights Reserved.</div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Footer;
