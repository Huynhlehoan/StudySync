import { useState } from 'react'
import { FiMapPin } from 'react-icons/fi'

function Calendar() {
  const [currentDate] = useState(new Date(2025, 4, 12)) // May 2025
  
  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })
  
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear()
    const month = currentDate.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const startDate = new Date(firstDay)
    
    // Adjust to start from Monday
    const dayOfWeek = (firstDay.getDay() + 6) % 7
    startDate.setDate(startDate.getDate() - dayOfWeek)
    
    const days = []
    const current = new Date(startDate)
    
    for (let i = 0; i < 42; i++) {
      days.push({
        date: current.getDate(),
        isCurrentMonth: current.getMonth() === month,
        isToday: current.toDateString() === new Date().toDateString(),
        fullDate: new Date(current)
      })
      current.setDate(current.getDate() + 1)
    }
    
    return days
  }

  const pinnedEvents = [
    {
      id: 1,
      date: '21/07/2025',
      title: 'Đi thi WWW',
      type: 'exam'
    },
    {
      id: 2,
      date: '31/08/2025',
      title: 'Đi thi Toeic',
      type: 'toeic'
    }
  ]

  const days = getDaysInMonth()

  return (
    <div className="h-full flex flex-col gap-8">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900 mb-5 text-center">{monthName}</h3>
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map(day => (
              <div key={day} className="text-center text-xs font-semibold text-gray-500 py-2">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day, index) => (
              <div
                key={index}
                className={`aspect-square flex items-center justify-center text-xs rounded-lg cursor-pointer transition-colors ${
                  day.isCurrentMonth 
                    ? day.isToday 
                      ? 'bg-red-500 text-white font-semibold' 
                      : 'text-gray-900 hover:bg-gradient-to-b from-indigo-400 to-blue-300'
                    : 'text-gray-300'
                }`}
              >
                {day.date}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-4">
          <FiMapPin className="text-gray-600" />
          <span className="font-semibold text-gray-900">Pinned</span>
        </div>
        <div className="space-y-3">
          {pinnedEvents.map(event => (
            <div 
              key={event.id} 
              className={`p-3 rounded-xl border transition-all hover:shadow-sm hover:translate-x-1 ${
                event.type === 'exam' 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-blue-50 border-blue-200'
              }`}
            >
              <div className="text-xs text-gray-500 font-medium mb-1">{event.date}</div>
              <div className="text-sm text-gray-900 font-medium">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Calendar