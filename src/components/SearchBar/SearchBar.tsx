import React from "react";

const SearchBar = () => {
  return (
    <div className="flex space-x-2 w-full" data-testid="search-bar">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input 
              type="search" 
              id="default-search" 
              className="block w-full shadow-md p-2 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-gray-20 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="맛집 이름을 검색해보세요" 
              required 
            />
            
        </div>
    </div>
  );
}

export default SearchBar;