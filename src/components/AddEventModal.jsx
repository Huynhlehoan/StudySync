import React, { useState } from 'react'
import { format } from 'date-fns'

const AddEventModal = ({ onClose, onAdd }) => {
  const [name, setName] = useState('')
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))
  const [start, setStart] = useState('07:00')
  const [end, setEnd] = useState('08:00')

  const handleSubmit = () => {
    if (!name || !start || !end || !date) return

    onAdd({
      name,
      date,
      start,
      end
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[350px] space-y-4">
        <h2 className="text-xl font-bold text-center">Thêm sự kiện</h2>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Tên công việc</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="VD: Học React"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Ngày</label>
          <input
            type="date"
            className="w-full border p-2 rounded"
            value={date}
            onChange={e => setDate(e.target.value)}
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="block text-sm font-semibold">Bắt đầu</label>
            <input
              type="time"
              className="w-full border p-2 rounded"
              value={start}
              onChange={e => setStart(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-semibold">Kết thúc</label>
            <input
              type="time"
              className="w-full border p-2 rounded"
              value={end}
              onChange={e => setEnd(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            onClick={onClose}
            className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Huỷ
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-indigo-500 text-white font-semibold rounded hover:bg-indigo-600"
          >
            Thêm
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddEventModal
