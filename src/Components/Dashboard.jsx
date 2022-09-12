import React from 'react';
import CardNFT from './CardNFT';
import links from '../images';

export default function Dashboard() {
  return (
    <div className="grid  gap-6 gap-y-8 mt-8 text-gray-800 sm:grid-cols-3 ">
      {links.map((image) => (
        <CardNFT image={image} key={image} />
      ))}
    </div>
  );
}
