import React from "react";
import { useState } from "react";

const useExperiment = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    // currentValue = JSON.parse(String(defaultValue));
    // console.log(currentValue);
  });
  return [value, setValue];
};

export default useExperiment;
