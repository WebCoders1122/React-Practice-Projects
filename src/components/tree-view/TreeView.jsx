import React from "react";
import data from "./data";
import MenuList from "./MenuList";

const TreeView = () => {
  return (
    <div className='container'>
      <MenuList data={data} />
    </div>
  );
};

export default TreeView;
