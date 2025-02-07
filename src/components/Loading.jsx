import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-4 h-4 rounded-full bg-[#9CA3AF] animate-bounce" />
      <div className="w-4 h-4 rounded-full bg-[#FFFFFF] animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 rounded-full bg-[#3B82F6] animate-bounce [animation-delay:-.5s]" />
    </div>
  );
}

export default Loading;
