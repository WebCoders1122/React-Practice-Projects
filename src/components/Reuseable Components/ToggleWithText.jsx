import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUnits } from "../../app/Weather App/weatherSlice";

const ToggleWithText = () => {
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label
      className=' h-full border border-grey-100 relative inline-flex cursor-pointer items-center justify-center rounded-md bg-gray-100 dark:bg-grey-700 dark:text-white dark:border-grey-600'
      onMouseDown={() => {
        isChecked ? dispatch(setUnits("C")) : dispatch(setUnits("F"));
      }}>
      <input
        type='checkbox'
        className='sr-only'
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`h-full flex items-center space-x-2 rounded-md py-3.5 px-4 ${
          !isChecked
            ? "text-primary bg-purple-600 dark:bg-red-600 text-white"
            : "text-body-color"
        }`}>
        Celcius{" "}
      </span>
      <span
        className={` h-full flex items-center space-x-2 rounded-md py-3.5 px-4 ${
          isChecked
            ? "text-primary bg-purple-600 dark:bg-red-600 text-white"
            : "text-body-color"
        }`}>
        Farenheit
      </span>
    </label>
  );
};

export default ToggleWithText;

//celcius to Farenheit
