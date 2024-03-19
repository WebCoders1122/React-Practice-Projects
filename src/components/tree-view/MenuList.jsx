import React from "react";
import MenuItem from "./MenuItem";

const MenuList = ({ data }) => {
  console.log(data);
  return (
    <ul className='inline-block list-disc m-3'>
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
