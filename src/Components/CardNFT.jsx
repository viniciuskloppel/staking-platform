import React from 'react';

export default function CardNFT({ image }) {
  return (
    <div className="flex flex-col gap-2 ">
      {/* <div className="bg-red-500 w-full h-[225px] rounded">image</div> */}
      <img src={image} alt="NFT" className="rounded-md" />
      <div className="grid grid-cols-2 justify-between gap-2 ">
        <div className="flex-row justify-start">
          <p className="font-bold max-w-[13ch] whitespace-nowrap overflow-ellipsis overflow-hidden">
            Okay Bear
          </p>
          <p className="text-xs whitespace-nowrap">9 $OKAY/day</p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center py-2 px-8 bg-gray-900 text-white rounded "
        >
          Stake
        </button>
      </div>
    </div>
  );
}
