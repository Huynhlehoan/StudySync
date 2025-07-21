import { useState } from "react";
import { FiUser,FiLogOut, FiSettings   } from "react-icons/fi";
import Profile from "./Profile";
const DropdownAcc = ({ onProfileClick, OnSettingsClick })=>{
   
    return(
        <div className="absolute bg-gray-100 top-full right-0 w-full rounded-xl p-3 shadow-2xl z-50 transform hover:scale-105 transition duration-300">
            <div className="flex flex-col">
                <div className="flex p-3  hover:bg-white" onClick={onProfileClick} >
                    <FiUser className="text-2xl mr-3"  />
                   <h1 className="font-bold ">Profile</h1> 
                </div>
                <div className="flex p-3  hover:bg-white" onClick={OnSettingsClick}  >
                    <FiSettings  className="text-2xl mr-3"  />
                   <h1 className="font-bold ">Settings</h1> 
                </div>
                <div className="flex p-3 hover:bg-white">
                    <FiLogOut className="text-2xl mr-3" />
                   <h1 className="font-bold ">Logout</h1> 
                </div>
            </div>
            
        </div>
    )

}; export default DropdownAcc;