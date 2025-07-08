import { Outlet } from "react-router-dom";
import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
export default function Layout() {
  const [activeSection, setActiveSection] = useState('Home')

  return (
    <div className="min-h-screen bg-gray-200 font-inter flex">
      {/* Sidebar bên trái, cố định chiều cao */}
         <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Nội dung bên phải */}
        <div className="flex flex-col flex-1 ml-0 mt-5 mr-5">
          <Header />
          <main className="">
            <Outlet />
          </main>
        </div>

    </div>
  )
}
