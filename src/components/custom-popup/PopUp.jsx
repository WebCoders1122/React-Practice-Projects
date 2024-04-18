import React from "react";

const PopUp = ({ header, footer, body }) => {
  return (
    <div className='popup_container relative bg-white rounded-lg shadow dark:bg-gray-700 w-full text-center'>
      {/* Modal header */}
      {header ? (
        header
      ) : (
        <div className='flex items-center justify-center gap-2 p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
          <h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
            Sample Header
          </h3>
          <button
            type='button'
            className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white'
            data-modal-hide='default-modal'>
            <span className=''>X</span>
          </button>
        </div>
      )}
      {/* Modal body */}
      {body ? (
        body
      ) : (
        <div className='p-4 md:p-5 space-y-4 min-h-60'>
          <p className='text-base leading-relaxed text-gray-500 dark:text-gray-400'>
            Sample Body
          </p>
        </div>
      )}

      {/* Modal footer */}
      {footer ? (
        footer
      ) : (
        <div className='flex items-center justify-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 text-white'>
          <p className='font-bold'>Sample Footer</p>
        </div>
      )}
    </div>
  );
};

export default PopUp;

<>
  {/* Main modal */}
  <div
    id='default-modal'
    tabIndex={-1}
    aria-hidden='true'
    className='hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
    <div className='relative p-4 w-full max-w-2xl max-h-full'>
      {/* Modal content */}
      <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'></div>
    </div>
  </div>
</>;
