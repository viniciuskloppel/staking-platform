import React from 'react';
import Dashboard from './Dashboard';

function Body() {
  return (
    <div className="col-span-8 overflow-y-scroll pt-8 scrollbar-hide pb-16 sm:col-span-12 lg:col-span-8 h-screen">
      <h2 className=" text-3xl font-bold text-purple-600 w-full sm:text-6xl lg:text-7xl">
        Stake your NFTs,
        <br />
        <span className="text-black">earn $OKAY.</span>
      </h2>
      <Dashboard />
    </div>
  );
}

export default Body;
