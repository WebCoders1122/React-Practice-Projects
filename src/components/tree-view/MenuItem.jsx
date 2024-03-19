import React from "react";
import MenuList from "./MenuList";

const MenuItem = ({ navItem }) => {
  return (
    <li className='m-3'>
      {navItem.name}
      <div>
        {navItem.children && navItem.children.length ? (
          <MenuList data={navItem.children} />
        ) : null}
      </div>
    </li>
  );
};

export default MenuItem;
