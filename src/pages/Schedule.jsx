import React, { useState } from 'react'
import ScheduleTable from '../components/ScheduleTable'
import AddEventModal from '../components/AddEventModal'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format, addWeeks, subWeeks, startOfWeek } from 'date-fns'
import { FiEdit3, FiRefreshCw } from 'react-icons/fi'

const Schedule = () => {
  const [events, setEvents] = useState([
    { id: 1, name: "Đi chợ", date: "2025-06-16", start: "07:00", end: "08:00" },
    { id: 2, name: "Ăn trưa", date: "2025-06-17", start: "12:00", end: "13:00" },
    { id: 3, name: "Học toeic", date: "2025-06-17", start: "13:00", end: "17:00" },
    { id: 4, name: "Học react", date: "2025-06-18", start: "18:00", end: "21:00" },
  ])
  const [showModal, setShowModal] = useState(false)
  const [currentWeekStart, setCurrentWeekStart] = useState(startOfWeek(new Date(2025, 5, 16), { weekStartsOn: 1 }))
  const [isEditing, setIsEditing] = useState(false)

  const addEvent = (newEvent) => {
    setEvents(prev => [...prev, { ...newEvent, id: Date.now() }])
  }

  const changeWeek = (amount) => {
    setCurrentWeekStart(prev => addWeeks(prev, amount))
  }

  const resetToday = () => {
    setCurrentWeekStart(startOfWeek(new Date(), { weekStartsOn: 1 }))
  }

  return (
    <div className="p-4 space-y-4">
      {/* Header */}
      <div className="flex bg-white rounded-xl py-4 px-2 justify-between items-center">
        <h2 className="text-xl font-semibold">Stay up to date, huynhlehoan</h2>
        <div className="flex gap-3 items-center">
          <button onClick={() => setShowModal(true)} className="rounded-xl bg-indigo-300 shadow-2xl px-1.5 py-1">Add event</button>
          <button onClick={resetToday} className="btn bg-gray-300 rounded-4xl px-1 py-1 px-3"><FiRefreshCw /></button>
          <button onClick={() => setIsEditing(prev => !prev)} className={`btn px-3 bg-gray-300 rounded-4xl px-1 py-1 ${isEditing ? 'bg-purple-300' : ''}`}>
            <FiEdit3 />
          </button>
        </div>
      </div>

      {/* Top controls */}
      <div className="flex items-center gap-4 justify-end">
        <button onClick={() => changeWeek(-1)} className="btn bg-gray-300 rounded-4xl px-1 py-1 px-3">{'<'}</button>

        <div className="text-sm bg-indigo-300 rounded-lg px-3 py-1 shadow">
          <DatePicker
            selected={currentWeekStart}
            onChange={date => setCurrentWeekStart(startOfWeek(date, { weekStartsOn: 1 }))}
            dateFormat="dd/MM/yyyy"
            className="bg-transparent outline-none text-indigo-800 font-semibold "
          />
        </div>

        <button onClick={() => changeWeek(1)} className="btn bg-gray-300 rounded-4xl px-1 py-1 px-3">{'>'}</button>
        <button onClick={resetToday} className="rounded-xl bg-indigo-300 shadow-2xl px-1.5 py-1">Today</button>
      </div>

      {/* Table */}
      <ScheduleTable events={events} weekStart={currentWeekStart} isEditing={isEditing} />

      {/* Modal */}
      {showModal && (
        <AddEventModal onClose={() => setShowModal(false)} onAdd={addEvent} />
      )}
    </div>
  )
}

export default Schedule
