import React from "react";
import { useDispatch } from "react-redux";
import {
  addFilteredUser,
  handleInputValue,
} from "../../app/AutoComplete Search/searchSlice";

const SearchDropdown = ({ users }) => {
  const dispatch = useDispatch();
  return (
    <div
      id='dropdown'
      className='bg-white divide-y divide-gray-100 rounded-lg shadow max-w-md mx-auto dark:bg-gray-700'>
      <ul
        className='py-2 text-sm text-gray-700 dark:text-gray-200'
        aria-labelledby='dropdown-button'>
        {users.map((user, index) => {
          return (
            <li key={user + index}>
              <button
                onClick={(e) => {
                  dispatch(handleInputValue(e.target.innerText));
                  dispatch(addFilteredUser([]));
                }}
                type='button'
                className='inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                {user}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SearchDropdown;
