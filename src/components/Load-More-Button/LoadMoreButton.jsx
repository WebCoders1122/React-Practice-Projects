import React from "react";
import { useEffect } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
// loadmore slice imports
import { getProductsAsync, inc_count } from "./loadMoreSlice";
const LoadMoreButton = () => {
  //redux states
  const products = useSelector((state) => state.loadMore.products);
  const count = useSelector((state) => state.loadMore.count);
  const disableButton = useSelector((state) => state.loadMore.disableButton);
  //redux dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAsync(count));
  }, [count]);
  console.log(products);
  return (
    <div className='container flex flex-col justify-center'>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center'>
        <div className='relative m-3 flex flex-wrap mx-auto justify-center'>
          {products && products.length
            ? products.map((product) => {
                product;
                return (
                  <div
                    key={product.id}
                    className='relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer'>
                    <div className='overflow-x-hidden rounded-2xl relative'>
                      <img
                        className='h-40 rounded-2xl w-full object-cover'
                        src={product.thumbnail}
                      />
                    </div>
                    <div className='mt-4 pl-2 mb-2 flex justify-between '>
                      <div>
                        <p className='text-lg font-semibold text-gray-900 mb-0'>
                          {product.title}
                        </p>
                        <p className='text-md text-gray-800 mt-0'>
                          ${product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
      <div className='button flex justify-center items-center p-2'>
        {disableButton ? (
          <div className='flex flex-col justify-center items-center p-2 gap-2'>
            <h3 className='font-bold text-xl'>
              You Have Reached {products.length} Products
            </h3>
            <button
              className='bg-gray-300 px-4 py-2 w-2/3 rounded-md cursor-not-allowed opacity-50'
              disabled>
              Load More ...
            </button>
          </div>
        ) : (
          <button
            className='bg-green-600 hover:bg-green-700 w-2/3 active:bg-green-800 px-4 py-2 rounded-md text-white'
            onClick={() => {
              dispatch(inc_count());
            }}>
            Load More ...
          </button>
        )}
      </div>
    </div>
  );
};

export default LoadMoreButton;
