import React, { useState } from "react";
import QRCode from "react-qr-code";

const QR_Code = () => {
  const [value, setValue] = useState("");
  const [qrValue, setQrValue] = useState("");

  const handleQrCode = () => {
    setQrValue(value);
    setValue("");
  };
  return (
    <div className='qrCode_container flex flex-col gap-2 p-4 items-center bg-slate-100 dark:bg-gray-800 ease-linear duration-200'>
      <h2 className='text-xl font-bold text-violet-800 dark:text-white sm:text-3xl text-center'>
        Generate QR code By Value
      </h2>
      <div className='input_section flex flex-col gap-1 justify-center items-center md:flex-row w-screen my-3'>
        <div className='relative'>
          <input
            type='text'
            id='floating_outlined'
            className='block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:focus:border-violet-600 focus:outline-none focus:ring-0 focus:border-violet-700 peer ease-linear duration-200'
            placeholder=' '
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <label
            htmlFor='floating_outlined'
            className='absolute text-sm text-gray-500 dark:text-gray-400  transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 dark:rounded dark:p-1 px-2 peer-focus:px-2 peer-focus:text-violet-700 peer-focus:dark:text-gray-300 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ease-linear duration-200'>
            Enter You Value Here
          </label>
        </div>

        <button
          className='inline-block rounded bg-violet-700 dark:bg-gray-600 px-8 py-3 text-normal font-semibold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring hover:dark:bg-violet-700 active:dark:bg-gray-600 active:bg-violet-700 w-[90%] md:w-auto ease-linear duration-200'
          onClick={handleQrCode}>
          Generate
        </button>
      </div>
      <QRCode
        size={256}
        value={qrValue}
      />
    </div>
  );
};

export default QR_Code;
