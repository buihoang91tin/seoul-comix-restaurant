import React from "react";

const FilterBar = () => {
  return (
    <div className="flex space-x-2" data-testid="filter-bar">
      <button
        type="button"
        className="text-sm text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  md:px-1 px-1 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        전체
      </button>
      <button
        type="button"
        className="text-sm text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm md:px-1 px-1 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        스시·해산물
      </button>
      <button
        type="button"
        className="text-sm text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm md:px-1 px-1 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        소식
      </button>
      <button
        type="button"
        className="text-sm text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm md:px-1 px-1 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        덴푸라
      </button>
      <button
        type="button"
        className="text-sm text-gray-600 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm md:px-1 px-1 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        돈카츠·쿠시카츠
      </button>
    </div>
  );
}

export default FilterBar;