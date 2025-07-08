import TodoSection from './TodoSection'
import HabitSection from './HabitSection'
import Calendar from './Calendar'

function Dashboard() {
  return (
    <div className="h-full bg-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between rounded-3xl p-6 shadow-lg bg-white mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, huynhlehoan!</h1>
        </div>
        <div className="w-48 h-28 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2" 
            alt="Study illustration" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Main content: 2 cột */}
      <div className="flex gap-6">
        {/* Cột trái */}
        <div className="flex-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <TodoSection />
          </div>
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <HabitSection />
          </div>
        </div>

        {/* Cột phải */}
        <aside className="w-[300px] shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <Calendar />
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Dashboard
