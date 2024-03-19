import React from "react";
import data from "./data";
import MenuList from "./MenuList";

const TreeView = () => {
  return (
    <div className='container h-screen w-1/3 bg-green-700 text-white p-5'>
      <MenuList data={data} />
    </div>
  );
};

export default TreeView;
