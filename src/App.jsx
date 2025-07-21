import { useState } from 'react'
import Layout from './layouts/layout'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router-dom'
import Schedule from './pages/Schedule'
import File from './pages/file'
import TodoList from './pages/TodoList'
import Profile from './components/Profile'
import Upload from './components/Upload'
import Settings from './components/settings'

function App() {
  const [activeSection, setActiveSection] = useState('Home')

  return (
   
      <Routes>
        <Route path='/' element={<Layout/>}>
           <Route index element={ <Dashboard />}/>
        <Route path='schedule' element={<Schedule/>}/>
          <Route path='file' element={<File/>}/>
          <Route path='toDoList' element={<TodoList/>}/>
        </Route>
       
      </Routes>

     
  )
}

export default App