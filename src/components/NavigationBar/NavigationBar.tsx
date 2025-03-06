import React from "react";

const NavigationBar: React.FC = () => {
  return (
      <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 bg-white border-t border-gray-200 left-1/2 dark:bg-gray-700 dark:border-gray-600">
          <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
              <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-500 dark:text-gray-400 size-6 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>

                  <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-500">홈</span>
              </button>
              <div id="tooltip-home" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                  홈
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-search" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-500">검색</span>
              </button>
              <div id="tooltip-search" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                  검색
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-bookmark" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-500 dark:text-gray-400 size-6 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                </svg>

                  <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-500">피드</span>
              </button>
              <div id="tooltip-bookmark" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                  피드
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              <button data-tooltip-target="tooltip-post" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-gray-500 dark:text-gray-400 size-6 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                  </svg>

                  <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-500">내 예약</span>
              </button>
              <div id="tooltip-post" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                  내 예약
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
              
              <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"className="text-gray-500 dark:text-gray-400 size-6 group-hover:text-orange-600 dark:group-hover:text-orange-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                  <span className="text-sm group-hover:text-orange-600 dark:group-hover:text-orange-500">메뉴</span>
              </button>
              <div id="tooltip-settings" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                  메뉴
                  <div className="tooltip-arrow" data-popper-arrow></div>
              </div>
          </div>
      </div>

  )
}

export default NavigationBar;