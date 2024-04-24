import React from "react";
import { useEffect } from "react";
import axios from "axios";
//redux
import { useSelector, useDispatch } from "react-redux";
// loadmore slice imports
import {
  getProductsAsync,
  inc_count,
  initialLoaderAsync,
} from "./loadMoreSlice";
const LoadMoreButton = () => {
  //redux states
  const products = useSelector((state) => state.loadMore.products);
  const count = useSelector((state) => state.loadMore.count);
  const disableButton = useSelector((state) => state.loadMore.disableButton);
  //redux dispatch
  const dispatch = useDispatch();
  useEffect(() => {
    if (count !== 0) dispatch(getProductsAsync(count));
  }, [count]);
  return (
    <div className='container flex flex-col justify-center'>
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center w-screen dark:bg-grey-700'>
        <div className='relative m-3 flex flex-wrap mx-auto justify-center'>
          {products && products.length
            ? products.map((product) => {
                product;
                return (
                  <div
                    key={product.id}
                    className='relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer dark:bg-grey-800 '>
                    <div className='overflow-x-hidden rounded-2xl relative'>
                      <img
                        className='h-40 rounded-2xl w-full object-cover'
                        src={product.thumbnail}
                      />
                    </div>
                    <div className='mt-4 pl-2 mb-2 flex justify-between '>
                      <div>
                        <p className='text-lg font-semibold text-gray-900 dark:text-grey-100 mb-0'>
                          {product.title}
                        </p>
                        <p className='text-md text-gray-800 dark:text-grey-300 mt-0'>
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
      <div className='button bg-gray-100 dark:bg-grey-700 flex justify-center items-center p-2 w-screen'>
        {disableButton ? (
          <div className='flex flex-col justify-center items-center p-2 gap-2 w-screen'>
            <h3 className='font-bold text-xl dark:text-grey-200'>
              You Have Reached {products.length} Products
            </h3>
            <button
              className='bg-gray-300 dark:bg-grey-400 dark:text-grey-700 font-semibold px-4 py-2 w-2/3 rounded-md cursor-not-allowed opacity-50'
              disabled>
              Load More ...
            </button>
          </div>
        ) : (
          <button
            className='bg-purple-700 hover:bg-purple-800 w-2/3 active:bg-grey-800 px-4 py-2 rounded-md text-white font-bold dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-grey-800'
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

export const initialLoading = (dispatch) => {
  dispatch(initialLoaderAsync());
};
