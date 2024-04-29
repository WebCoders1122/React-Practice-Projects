import React, { useEffect, useState } from "react";

const useHideModal = (ref, handler) => {
  const listener = (event) => {
    // console.log(!ref.current || ref.current.contains(event.target));
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    } else {
      handler();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
};

export default useHideModal;
