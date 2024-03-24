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
    <div className='qrCode_container flex flex-col gap-2 m-4 items-center'>
      <h2 className='text-xl font-bold text-violet-800 sm:text-3xl text-center'>
        Generate QR code By Value
      </h2>
      <div className='input_section flex flex-col gap-1 justify-center items-center md:flex-row w-screen my-3'>
        <label
          htmlFor='text-field'
          className='relative block rounded-md border border-gray-200 shadow-sm focus-within:border-violet-700 focus-within:ring-1 my-2 mx-1 focus-within:ring-violet-700 w-[90%] md:w-1/3'>
          <input
            type='text'
            id='text-field'
            className='peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 p-3'
            placeholder='text-field'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className='pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs font-semibold text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs'>
            Enter You Value Here
          </span>
        </label>
        <button
          className='inline-block rounded bg-violet-700 px-8 py-3 text-normal font-semibold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-violet-700 w-[90%] md:w-auto'
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
