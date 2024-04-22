import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useEffect } from "react";
import GithubProfileCard from "./GithubProfileCard";

const GithubSearch = () => {
  const [username, setUsername] = useState("webcoders1122");
  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState(null);

  // handle search button functionality
  const handleSearch = () => {
    setUsername(inputValue);
    setUserData(null);
    setInputValue("");
  };

  // to fetch details from github api
  const fetchGithubUser = async () => {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data;
    data ? setUserData(data) : null;
  };
  useEffect(() => {
    fetchGithubUser();
  }, [username]);
  return (
    //   github profile main container
    <div className='text-white'>
      {/* search container */}
      <div className='max-w-md mx-auto m-2'>
        <label
          htmlFor='username'
          className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
            <CiSearch />
          </div>
          <input
            type='text'
            // id='default-search'
            className='block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Enter GitHub Username...'
            required=''
            id='username'
            value={inputValue}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            className='text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      {/* search container end*/}
      {/* profile card container */}
      <div className='w-full'>
        {userData === null ? (
          <div className='flex items-center justify-center w-full max-w-lg mx-auto h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ease-linear duration-300'>
            <div className='px-3 py-1 text-2xl font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200'>
              loading...
            </div>
          </div>
        ) : (
          <GithubProfileCard user={userData} />
        )}
      </div>
    </div>
  );
};

export default GithubSearch;
