import { useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

export default function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Làm btvn", done: false, progress: 50 },
    { id: 2, name: "Làm bt Java", done: false, progress: 0 },
    { id: 3, name: "Đi làm thêm", done: false, progress: 0 },
    { id: 4, name: "Đi coi phim", done: true },
    { id: 5, name: "Làm bt React", done: true },
    { id: 6, name: "Đi làm thêm", done: true }
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), name: newTask, done: false, progress: 0 }]);
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };



 const updateProgress = (id, value) => {
  let progress = parseInt(value) || 0;
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;

  setTasks(tasks.map(task =>
    task.id === id
      ? {
          ...task,
          progress,
          done: progress >= 100
        }
      : task
  ));
};


  const todoTasks = tasks.filter(task => !task.done);
  const doneTasks = tasks.filter(task => task.done);


const handleProgressClick = (e, id) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  let newProgress = Math.round((clickX / rect.width) * 100);

  if (newProgress > 100) newProgress = 100;
  if (newProgress < 0) newProgress = 0;

  updateProgress(id, newProgress);
};


  return (
    <div className="w-full items-center p-6 font-serif">
      {/* Top Bar */}
      <div className='flex mb-5'>
        <div className="flex-2 mr-3 w-full">
          <div className='relative'>
            <FiPlus className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-400 text-white p-1 rounded-xl text-lg cursor-pointer" onClick={addTask} />
            <input
              type="text"
              placeholder="VD: Học React..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-500 rounded-xl focus:outline-none"
            />
          </div>
        </div>
        <div className='ml-5 bg-white rounded-xl shadow-xl p-4'>
          <h1 className="font-semibold">{doneTasks.length}/{tasks.length} tasks is done!</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex space-x-5">
        {/* Todo List */}
        <div className="flex-1 bg-white rounded-xl shadow-xl p-4 border border-gray-300">
          <h1 className="text-xl font-bold mb-2">Todo list</h1>
          <div className="bg-indigo-200 rounded-xl p-3 space-y-3">
            {todoTasks.map(task => (
              <div key={task.id} className="flex items-center justify-between gap-2">
                <span className="w-[100px] font-semibold">{task.name}</span>
              <div
                    className="w-[100px] h-5 bg-white rounded cursor-pointer relative"
                    onClick={(e) => handleProgressClick(e, task.id)}
                    >
                    <div
                        className="bg-gradient-to-b from-indigo-400 to-blue-300 text-white text-xs text-center h-full rounded"
                        style={{ width: `${task.progress}%` }}
                    >
                        {task.progress}%
                    </div>
                    </div>

                <input
                  type="number"
                  value={task.progress}
                  onChange={(e) => updateProgress(task.id, e.target.value)}
                  className="w-12 bg-white p-1  rounded text-sm"
                />
              
                <button className="text-yellow-600">
                  <FaEdit />
                </button>
                <button className="text-red-600" onClick={() => deleteTask(task.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Done List */}
        <div className="flex-1 bg-white rounded-xl shadow-xl p-4 border border-gray-300">
          <h1 className="text-xl font-bold mb-2">Done</h1>
          <div className="bg-cyan-100 rounded-xl p-3 space-y-2">
            {doneTasks.map(task => (
              <div key={task.id} className="flex items-center gap-2">
                <span>✅</span>
                <span className="font-medium">{task.name}</span>
                <button className="text-red-600 ml-auto" onClick={() => deleteTask(task.id)}>
                  <FaTrashAlt />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
