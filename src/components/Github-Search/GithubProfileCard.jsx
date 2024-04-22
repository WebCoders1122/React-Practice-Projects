import React from "react";

const GithubProfileCard = ({ user }) => {
  const {
    avatar_url,
    created_at,
    followers,
    following,
    html_url,
    login,
    public_repos,
    repos_url,
    updated_at,
  } = user;
  return (
    <div className='w-full max-w-lg mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3'>
      <div className='flex flex-col items-center pb-3 mt-2'>
        <img
          className='w-24 h-24 mb-3 rounded-full shadow-lg'
          src={avatar_url}
          alt='Bonnie image'
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          {login}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          Followers: {followers}, &nbsp; Following: {following}
        </span>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          Public Repositories: {public_repos}
        </span>
        <div className='flex gap-4 m-2'>
          <span className=' text-gray-500 dark:text-gray-200'>
            Created At: {new Date(created_at).toLocaleDateString()}
          </span>
          <span className=' text-gray-500 dark:text-gray-200'>
            Last Update: {new Date(updated_at).toLocaleDateString()}
          </span>
        </div>
        <div className='flex mt-4 md:mt-6'>
          <a
            href={html_url}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            View Profile on Github
          </a>
          <a
            href={`https://github.com/${login}?tab=repositories`}
            className='py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
            View All Publice Repos
          </a>
        </div>
      </div>
    </div>
  );
};

export default GithubProfileCard;
