import React from 'react';

export default function CardNFT({ image }) {
  return (
    <div>
      {/* <div className="bg-red-500 w-full h-[225px] rounded">image</div> */}
      <img src={image} alt="NFT" className="rounded-md w-full" />
      <div className="flex justify-between gap-2 mt-2">
        <div className="flex-row justify-start">
          <p className="font-bold">Okay Bear</p>
          <p className="text-xs">9 $OKAY/day</p>
        </div>
        <button
          type="button"
          className="py-2 px-8 bg-gray-900 text-white rounded"
        >
          Stake
        </button>
      </div>
    </div>
  );
}
