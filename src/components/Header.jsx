import { useState } from 'react'
import Profile from './Profile'
import NotifyDropdown from './NotificationDropdown'
import { FiSearch, FiBell, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import DropdownAcc from './DropdownAcc'
import Settings from './settings'

function Header() {
  const [showProfile, setShowProfile] = useState(false)
 const [showNotify, setShowNotify]= useState(false);
 const [showAcc, setShowAcc]= useState(false);
 const [showSettings, setShowSettings]= useState(false);
 
  return (
    <>
    <header className="flex items-center justify-between  mx-5 px-6 py-3  ">
     
      
      <div className="flex-1 max-w-md mx-10">
        <div className="relative">
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-sm font-semibold text-gray-900">
          12 June 2025
        </div>
        <div className="flex relative items-center gap-2 bg-gray-50 border border-gray-500 px-3 py-2 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
        onClick={() => setShowAcc(prev=>!prev)}>
          <div className=" w-8 h-8 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2" 
              alt="User" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700 ">Huynhlehoan</span>
          <FiChevronDown className="text-gray-500" />
          {showAcc &&
           
              <DropdownAcc 
                  onProfileClick={() => setShowProfile(true)}
                  OnSettingsClick={()=> setShowSettings(true)}
              
              />
            
          }
        </div>
        <div className="relative">
        <div
          className="p-2 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => setShowNotify(prev => !prev)}
        >
          <FiBell className="text-gray-600 text-xl" />
        </div>

  {showNotify && (
    <NotifyDropdown />
  )}
</div>

      </div>

    </header>
    
     {showProfile && (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
    <Profile onClose={() => setShowProfile(false)} />
  </div>
)}

  {showSettings && (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <Settings onClose={()=> setShowSettings(false)}/>
    </div>
  )
  }
</>
  )
}

export default Header