import React from "react";
import MenuList from "./MenuList";
import { MdOutlineExpandMore, MdOutlineExpandLess } from "react-icons/md";
import { useState } from "react";

const MenuItem = ({ navItem }) => {
  const [displayChildren, setDisplayChildren] = useState({});
  const HandleDisplay = (name) => {
    setDisplayChildren({ ...displayChildren, [name]: !displayChildren[name] });
  };
  return (
    <li className=''>
      <p className='flex items-center gap-1 text-xl font-semibold my-3'>
        {navItem.name}
        {/* checks if the navItem has children or not */}
        {navItem.children ? (
          <span onClick={() => HandleDisplay(navItem.name)}>
            {/* checks that if the navitem is active or expanded or not */}
            {displayChildren[navItem.name] ? (
              <MdOutlineExpandLess />
            ) : (
              <MdOutlineExpandMore />
            )}
          </span>
        ) : null}
      </p>
      <div className='mx-3 my-1'>
        {navItem.children &&
        navItem.children.length &&
        displayChildren[navItem.name] ? (
          <MenuList data={navItem.children} />
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
