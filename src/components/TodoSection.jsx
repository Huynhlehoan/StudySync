import { useState } from 'react'
import { Link } from 'react-router-dom'

function TodoSection() {
  const [todos] = useState({
    todo: [
      { id: 1, text: 'Làm btvn', completed: false },
      { id: 2, text: 'Làm bt Java', completed: false },
      { id: 3, text: 'Đi hụp thêm', completed: false }
    ],
    inProgress: [
      { id: 4, text: 'Làm btvn', completed: false },
      { id: 5, text: 'Làm bt Java', completed: false }
    ],
    done: [
      { id: 6, text: 'Đi coi phim', completed: true },
      { id: 7, text: 'Làm bt React', completed: true },
      { id: 8, text: 'Đi làm thêm', completed: true }
    ]
  })

  return (
    <div className="mb-8">
      <Link to="/toDoList" className="text-2xl font-semibold text-gray-900 mb-6 ">Todo list</Link>
      <div className="grid grid-cols-3 gap-5  border-t-2 mt-3 pt-5">
        <div className="bg-blue-100 border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4 ">
            <h3 className="font-semibold text-gray-900  ">Todo list</h3>
            <span className="text-sm font-semibold bg-gray-100 px-2 py-1 rounded-lg">20%</span>
          </div>
          <div className="space-y-3">
            {todos.todo.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 p-3">
                <input type="checkbox" checked={todo.completed} readOnly className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-700">{todo.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">In progress</h3>
            <span className="text-sm font-semibold bg-yellow-100 px-2 py-1 rounded-lg">50%</span>
          </div>
          <div className="space-y-3">
            {todos.inProgress.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 p-3 ">
                <input type="checkbox" checked={todo.completed} readOnly className="w-4 h-4 rounded" />
                <span className="text-sm text-gray-700">{todo.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Done</h3>
            <span className="text-sm font-semibold bg-green-100 px-2 py-1 rounded-lg">30%</span>
          </div>
          <div className="space-y-3">
            {todos.done.map(todo => (
              <div key={todo.id} className="flex items-center gap-3 p-3">
                <input type="checkbox" checked={todo.completed} readOnly className="w-4 h-4 rounded" />
                <span className={`text-sm ${todo.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSection