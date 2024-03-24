import React from "react";
import useExperiment from "./useExperiment";

const Experiment = () => {
  const [theme, setTheme] = useExperiment("theme", "dark");
  return (
    <div className='flex flex-col justify-center items-center gap-3 m-5'>
      <h2 className='text-xl font-bold text-violet-800 sm:text-3xl text-center'>
        Hello World!
      </h2>
      <button
        className='inline-block rounded bg-violet-700 px-8 py-3 text-normal font-semibold text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-violet-700 w-[90%] md:w-auto'
        //   onClick={handleQrCode}
      >
        Generate
      </button>
    </div>
  );
};

export default Experiment;
