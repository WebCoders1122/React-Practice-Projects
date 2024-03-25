import React from "react";
import Tabs from "./Tabs";

const CustomTabs = () => {
  const tabsData = [
    {
      title: "Tab 1",
      data: <h1>Hello tab 1</h1>,
    },
    {
      title: "Tab 2",
      data: (
        <span className='font-bold text-2xl text-violet-500'>
          this is tab 2 span
        </span>
      ),
    },
    {
      title: "Tab 3",
      data: <h1 className='bg-violet-200 px-3 py-1 rounded'>Hello tab 3</h1>,
    },
  ];
  return (
    <div className='tabs_container'>
      <Tabs tabData={tabsData} />
    </div>
  );
};

export default CustomTabs;
