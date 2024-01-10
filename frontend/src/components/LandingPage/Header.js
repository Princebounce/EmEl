import React from 'react';
import Emel from '../../assets/EmEl.svg';
import { MdOutlineDarkMode } from 'react-icons/md';

const Header = () => {
  return (
    <header className="flex mx-14 justify-between items-center p-4">
      <div className="">
        <img src={Emel} alt="Emel Logo" className="h-5" />
      </div>
      <div className="flex-grow text-black">
        <ul className="flex justify-center space-x-4"> 
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Demo</li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
        </ul>
      </div>
      <div className="space-x-4 flex items-center"> 
        <MdOutlineDarkMode size={20} className="text-gray-600 cursor-pointer" />
        <button className="text-customEmel border-customEmel border py-2 px-4 rounded">Sign In</button>

        <button className="bg-customEmel border py-2 px-4 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
