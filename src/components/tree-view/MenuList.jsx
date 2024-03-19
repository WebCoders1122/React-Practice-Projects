import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ data }) => {
  return (
    <ul className=''>
      {data && data.length
        ? data.map((navItem, index) => {
            return (
              <MenuItem
                navItem={navItem}
                key={`main-list-${index}`}
              />
            );
          })
        : null}
    </ul>
  );
};

export default MenuList;
