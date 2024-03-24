import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto'>
          <div className='p-5'>
            <h3 className='font-bold text-xl text-indigo-600'>Web Coders</h3>
          </div>
          <div className='p-5'>
            <div className='text-sm uppercase text-indigo-600 font-bold'>
              Major Apps
            </div>
            <a
              className='my-3 block'
              href='/#'>
              Home
            </a>
            <a
              className='my-3 block'
              href='/#'>
              TODO App with React{" "}
              <span className='text-teal-600 text-xs p-1'>New</span>
            </a>
          </div>
          {/* small app section */}
          <div className='p-5'>
            <div className='text-sm uppercase text-indigo-600 font-bold'>
              Small Projects
            </div>
            <a
              className='my-3 block'
              href='/#'>
              Products Loader
            </a>
            <a
              className='my-3 block'
              href='/star-rating'>
              Star Rating
            </a>
            <a
              className='my-3 block'
              href='/#'>
              Accordian
            </a>
          </div>
          {/* Contact Section */}
          <div className='p-5'>
            <div className='text-sm uppercase text-indigo-600 font-bold'>
              Contact us
            </div>
            <a
              className='my-3 block'
              href='/#'>
              GitHub Link
            </a>

            <Link
              to='experiment'
              className='my-3 block'>
              Experiment
            </Link>
            <Link
              to='scroll-indicator'
              className='my-3 block'>
              Scroll Indicator
            </Link>
            <a
              className='my-3 block '
              href='/#'>
              Contact: webcoders1122@gmail.com
              <span className='text-teal-600 text-xs p-1'>Email</span>
            </a>
          </div>
        </div>
      </div>
      {/* div for social and copyright */}
      <div className='bg-gray-100 pt-2'>
        <div className='flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col max-w-screen-lg items-center'>
          <div className='md:flex-auto md:flex-row-reverse mt-2 flex-row flex'>
            Social Icons here
          </div>
          <div className='my-5'>© Copyright 2024. All Rights Reserved.</div>
        </div>
      </div>
    </>
  );
};

export default Footer;
