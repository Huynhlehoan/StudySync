import { FiHome, FiList, FiCalendar, FiHelpCircle, FiFile, FiSettings } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

function Sidebar() {
  const location = useLocation()

  const menuItems = [
    { icon: FiHome, label: 'Home', path: '/' },
    { icon: FiList, label: 'ToDoList', path: '/toDoList' },
    { icon: FiCalendar, label: 'Schedule', path: '/schedule' },
    { icon: FiHelpCircle, label: 'Quiz', path: '/' },
    { icon: FiFile, label: 'File', path: '/file' },
    { icon: FiSettings, label: 'Settings', path: '/' },
  ]

  return (
    <aside className="w-52 bg-gradient-to-b from-indigo-400 to-blue-300 m-5 mr-0 rounded-3xl p-5 shadow-lg">
      <nav className="flex flex-col gap-2">
      
        <Link to="/" className="text-2xl font-bold bg-white bg-clip-text text-transparent m-5">
          StudySync
        </Link>
     
        {menuItems.map((item) => (
          <Link
            to={item.path}
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 text-left w-full ${
              location.pathname === item.path ? 'bg-white/20 text-white shadow-lg' : ''
            }`}
          >
            <item.icon className="text-xl flex-shrink-0" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
