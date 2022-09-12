import React from 'react';
import Dashboard from './Dashboard';

function Body() {
  return (
    <div className="col-span-8 h-screen overflow-y-scroll pt-8 scrollbar-hide pb-16">
      <h2 className="text-6xl font-bold text-purple-600 w-8/12">
        Stake your NFTs, earn $OKAY.
      </h2>
      <Dashboard />
    </div>
  );
}

export default Body;
