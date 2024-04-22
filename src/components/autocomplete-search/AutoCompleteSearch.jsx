import React from "react";
//react icons
import { CiSearch } from "react-icons/ci";
//axios
import axios from "axios";
import { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsersAsync } from "../../app/AutoComplete Search/searchSlice";
import {
  addFilteredUser,
  handleInputValue,
} from "../../app/AutoComplete Search/searchSlice";
import SearchDropdown from "./SearchDropdown";

const AutoCompleteSearch = () => {
  //redux
  const dispatch = useDispatch();
  const users = useSelector((state) => state.search.users);
  const status = useSelector((state) => state.search.status);
  const filteredUsers = useSelector((state) => state.search.filteredUsers);
  const inputValue = useSelector((state) => state.search.inputVlaue);
  //   console.log(users, status);

  //to handle change of input
  const handleChange = (event) => {
    dispatch(handleInputValue(event.target.value));
    if (event.target.value.length <= 1) {
      dispatch(addFilteredUser([]));
      return;
    } else {
      const newSearch = event.target.value;
      const newfilteredUsers = users.filter((user) =>
        user.toLowerCase().includes(newSearch.toLowerCase())
      );
      dispatch(addFilteredUser(newfilteredUsers));
    }
  };

  // for initial loading of users via api
  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);
  return (
    <div className='min-h-80 m-4'>
      {/* search container */}
      <div className='max-w-md mx-auto my-2'>
        <label
          htmlFor='auto-search'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <CiSearch className='text-gray-600 dark:text-gray-300' />
          </div>
          <input
            type='text'
            id='auto-search'
            className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter Your Query here'
            required=''
            value={inputValue}
            // onKeyPress={(e) => {
            //   if (e.key === "Enter") {
            //     handleSearch();
            //   }
            // }}
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      {/* DropDown */}
      <div>
        {filteredUsers && filteredUsers.length ? (
          <SearchDropdown users={filteredUsers} />
        ) : null}
      </div>
    </div>
  );
};

export default AutoCompleteSearch;
