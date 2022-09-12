import React from 'react';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    <div className=" col-span-3 h-screen bg-white border-r rounded-md py-12 pr-8 -top-8 hidden lg:flex lg:flex-col xl:col-span-2">
      <a className="inline-block" href="https://google.com">
        <h1 className="flex items-center text-3xl text-purple-600 font-bold mt-4">
          <img
            className="inline-block mr-4 position relative"
            width="36px"
            alt="logo"
            src={`${process.env.PUBLIC_URL}/gump.svg`}
          />
          <span className="text-center">Gump</span>
        </h1>
      </a>
      <div className="flex flex-col gap-y-8 mt-8">
        <div className="bg-gray-200 py-2 rounded whitespace-nowrap">
          <NavItem>
            <img
              className="inline-block"
              alt="server"
              src={`${process.env.PUBLIC_URL}/serverImage.png`}
            />
            <span className="ml-4">Okay Bears</span>
          </NavItem>
        </div>
        <NavItem>
          <img
            className="inline-block"
            alt="Dashboard"
            width="20px"
            src={`${process.env.PUBLIC_URL}/dashboard-icon.svg`}
          />
          <span className="ml-4 text-purple-600">Dashboard</span>
        </NavItem>

        <NavItem>
          <img
            className="inline-block"
            alt="History"
            width="20px"
            src={`${process.env.PUBLIC_URL}/history-icon.svg`}
          />
          <span className="ml-4">History</span>
        </NavItem>
        <NavItem>
          <img
            className="inline-block"
            alt="Settings"
            width="20px"
            src={`${process.env.PUBLIC_URL}/settings-icon.svg`}
          />
          <span className="ml-4">Settings</span>
        </NavItem>
      </div>
    </div>
  );
}
