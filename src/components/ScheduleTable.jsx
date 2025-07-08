import React from 'react'
import { format, addDays } from 'date-fns'

const timeSlots = [
  { label: "Morning", start: 5, end: 12, color: "bg-yellow-300" },
  { label: "Noon", start: 12, end: 13, color: "bg-rose-200" },
  { label: "Afternoon", start: 13, end: 18, color: "bg-rose-300" },
  { label: "Night", start: 18, end: 24, color: "bg-indigo-200" },
]

const taskColors = [
  "bg-green-200",
  "bg-cyan-200",
  "bg-pink-200",
  "bg-purple-200",
  "bg-orange-200",
  "bg-lime-200",
]

const ScheduleTable = ({ events, weekStart, isEditing }) => {
  const weekdays = [...Array(7)].map((_, i) => {
    const d = addDays(weekStart, i)
    return {
      date: format(d, "yyyy-MM-dd"),
      label: `${format(d, "EEEE")} ${format(d, "dd/MM")}`
    }
  })

  const getSlotLabel = (time) => {
    const hour = parseInt(time.split(":")[0])
    return timeSlots.find(slot => hour >= slot.start && hour < slot.end)?.label
  }

  const groupedEvents = (() => {
    const map = {}
    for (let day of weekdays) {
      map[day.date] = {}
      for (let slot of timeSlots) map[day.date][slot.label] = []
    }
    for (let i = 0; i < events.length; i++) {
      const e = events[i]
      const slot = getSlotLabel(e.start)
      if (map[e.date] && slot) {
        // thêm taskColor để chia màu từng task
        map[e.date][slot].push({ ...e, color: taskColors[i % taskColors.length] })
      }
    }
    return map
  })()

  return (
    <div className="overflow-x-auto mt-2 rounded-2xl border border-gray-200 bg-gray-100 p-2 shadow-inner">
      <div className="grid grid-cols-[100px_repeat(7,minmax(100px,1fr))]">
        {/* Header Row */}
        <div className="bg-gray-100"></div>
        {weekdays.map(day => (
          <div key={day.date} className="bg-gray-100 border border-white text-center py-2 font-medium text-sm">
            {day.label}
          </div>
        ))}

        {/* Rows */}
        {timeSlots.map(slot => (
          <React.Fragment key={slot.label}>
            {/* Slot label */}
            <div className={`${slot.color} border border-white py-4 px-2 font-semibold text-center rounded-l-xl`}>
              {slot.label}
            </div>

            {/* Day columns */}
            {weekdays.map(day => (
              <div
                key={day.date + slot.label}
                className="min-h-[80px] border border-white p-1"
              >
                <div className="flex flex-col gap-2">
                  {groupedEvents[day.date][slot.label].map(event => (
                    <div
                      key={event.id}
                      className={`relative ${event.color} rounded-xl px-3 py-2 text-sm shadow hover:ring-1 hover:ring-indigo-300 transition`}
                    >
                      <div className="font-semibold">{event.name}</div>
                      <div className="text-xs text-gray-700">{event.start}–{event.end}</div>

                      {isEditing && (
                        <div className="absolute top-1 right-1 flex gap-2 text-xs z-10">
                          <button title="Edit" className="hover:text-blue-600">✏</button>
                          <button title="Delete" className="hover:text-red-600">🗑</button>
                          <button title="Pin" className="hover:text-purple-600">📌</button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default ScheduleTable
