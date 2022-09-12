import React from 'react';

export default function NavItem({ children }) {
  return (
    <a href="https://google.com">
      <h3 className="font-semibold px-3 text-gray-800 flex flex-row items-center">
        {children}
      </h3>
    </a>
  );
}
