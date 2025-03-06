import React from 'react';

const PostSkeleton = () => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="h-40 bg-gray-200 rounded"></div>
      <div className="flex space-x-4">
        <div className="flex flex-col w-full space-y-2">
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}

export default PostSkeleton;