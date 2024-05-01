import React, { useRef, useState } from "react";
import useFetch from "./useFetch.js";
import MyButton from "../Reuseable Components/MyButton.jsx";
import useHideModal from "./useHideModal.js";

const CustomHooks = () => {
  const { loading, data, error } = useFetch("https://dummyjson.com/products");
  // modal ref
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  useHideModal(modalRef, () => setShowModal(false));
  // console.log(loading, data, error);

  //handle Click
  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className='flex flex-col items-center gap-3 my-4'>
      {/* useFetch Hook */}
      {loading ? (
        <div>{loading}</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className='scroll_container w-screen'>
          <h2 className='text-xl font-bold text-purple-700 sm:text-3xl text-center w-full pb-3 shadow-md dark:text-red-500'>
            useFetch Hook{" "}
          </h2>

          <div className='content text-center p-3'>
            {data.products && data.products.length
              ? data.products.map((product) => {
                  return (
                    <h3
                      key={product.id}
                      className='text-xl text-grey-900 dark:text-grey-400 m-2'>
                      {product.title}
                    </h3>
                  );
                })
              : null}
          </div>
        </div>
      )}

      {/* useHideModal hook */}
      <div className='flex flex-col items-center gap-5 w-screen'>
        <h2 className='text-xl font-bold text-purple-700 sm:text-3xl text-center w-full pb-3 shadow-md dark:text-red-500'>
          useHideModal Hook{" "}
        </h2>
        {showModal == true ? (
          <>
            {/* modal */}
            <div
              ref={modalRef}
              className={`popup_container relative bg-white rounded-lg shadow dark:bg-grey-700 text-center m-4 w-[95%]`}>
              {/* Modal header */}
              <div className='flex items-center justify-center gap-2 p-4 md:p-5 border-b rounded-t bg-violet-700 dark:bg-grey-600 dark:border-grey-600'>
                <h3 className='text-xl font-semibold text-white dark:text-white'>
                  Sample Header
                </h3>
              </div>
              {/* Modal body */}

              <div className='p-4 md:p-5 space-y-4 min-h-60'>
                <p className='text-base leading-relaxed text-grey-500 dark:text-grey-400'>
                  Sample Body
                </p>
              </div>

              {/* Modal footer */}
              <div className='flex items-center justify-center p-4 md:p-5 border-t border-grey-200 rounded-b bg-violet-500 dark:bg-grey-500 dark:border-grey-600 text-white'>
                <p className='font-bold'>Sample Footer</p>
              </div>
            </div>
          </>
        ) : (
          <MyButton onClick={handleClick}>Click To Show</MyButton>
        )}
      </div>
    </div>
  );
};

export default CustomHooks;
