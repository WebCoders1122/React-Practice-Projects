import React from "react";
import { useState } from "react";

const Tabs = ({ tabData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className='m-5 border-2 border-gray-300 rounded-sm'>
      <ul className='flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 m-4'>
        {tabData.map((tab, index) => {
          return (
            <li
              key={`tab-title-${index}`}
              className='me-2'
              onClick={() => setCurrentIndex(index)}>
              <div className='flex flex-col gap-2'>
                <a
                  href='#'
                  className={`inline-block px-4 py-2 rounded-lg text-xl font-semibold
                ${
                  currentIndex === index
                    ? ` text-white bg-violet-700 active`
                    : ` hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white`
                }`}
                  aria-current='page'>
                  Tab 1
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <div>{tabData[currentIndex] && tabData[currentIndex].data}</div>
    </div>
  );
};

export default Tabs;
