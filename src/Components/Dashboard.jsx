import React from 'react';
import CardNFT from './CardNFT';
import links from '../images';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-6 gap-y-12 mt-8 text-gray-800">
      {links.map((image) => (
        <CardNFT image={image} key={image} />
      ))}
    </div>
  );
}
