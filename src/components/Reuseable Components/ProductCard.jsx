import React from "react";

const ProductCard = () => {
  return (
    <div className='md:flex max-w-sm md:max-w-2xl m-4 mx-auto shadow-lg bg-gray-50 rounded-lg overflow-hidden dark:bg-grey-900'>
      <div className='img md:w-60'>
        <img
          src='https://cdn.pixabay.com/photo/2018/02/08/22/27/flower-3140492_1280.jpg'
          alt='product-img'
        />
      </div>
      <div className='body m-3'>
        <div className='category uppercase text-sm text-gray-500 dark:text-grey-500 my-0.5'>
          Category
        </div>
        <div className='title text-xl font-semibold text-purple-700 dark:text-red-500'>
          This is Product Title with Some Details
        </div>
        <div className='description text-gray-700 dark:text-grey-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          laboriosam?
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
