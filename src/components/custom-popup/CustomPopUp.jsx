import React from "react";
import PopUp from "./PopUp";
import { useState } from "react";
import MyButton from "../Reuseable Components/MyButton";

const CustomPopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='p-5 flex items-center justify-center flex-col gap-2 '>
      <MyButton onClick={() => setShowPopup(!showPopup)}>Show Popup</MyButton>
      {showPopup ? <PopUp /> : null}
    </div>
  );
};

export default CustomPopUp;
