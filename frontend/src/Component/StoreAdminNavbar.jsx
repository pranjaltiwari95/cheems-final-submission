import React from 'react';
import { assets } from '../assets/assets';
import { PawPrint } from 'lucide-react';

const StoreAdminNavbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-4 px-[4%] justify-between bg-gradient-to-r from-[#2D1B3D] to-[#FF7E67] shadow-md">
      <div className="flex items-center">
        <PawPrint className="mr-3 text-white" size={40} />
        <img className="w-[max(8%,60px)]" src={assets.logo} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-bold text-white tracking-wider">Cheems</h1>
        <h2 className="text-lg font-semibold text-white/80 mt-1 tracking-wide">Admin Panel</h2>
      </div>
      
      <button
        onClick={() => setToken('')}
        className="bg-white text-[#2D1B3D] px-5 py-2 rounded-full shadow-lg hover:scale-105 transition-transform font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default StoreAdminNavbar;