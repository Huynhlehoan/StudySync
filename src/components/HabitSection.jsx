import { Link } from 'react-router-dom'
function HabitSection() {
  const habits = [
    {
      id: 1,
      title: 'Learning',
      time: '13:00 16:00',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    },
    {
      id: 2,
      title: 'Cooking',
      time: '11:00 12:00',
      image: 'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    },
    {
      id: 3,
      title: 'Sport',
      time: '16:00 17:00',
      image: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    },
    {
      id: 4,
      title: 'Sleep',
      time: '23:00 7:00',
      image: 'https://images.pexels.com/photos/271897/pexels-photo-271897.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&dpr=2',
    }
  ]

  return (
    <div>
      <Link to="/schedule" className="text-2xl font-semibold text-gray-900 mb-6">Your harbit</Link>
      <div className="grid grid-cols-4 gap-5">
        {habits.map(habit => (
          <div key={habit.id} className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <div className="w-full h-20 rounded-xl overflow-hidden mb-3">
              <img src={habit.image} alt={habit.title} className="w-full h-full object-cover" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-gray-900 mb-1">{habit.title}</h3>
              <p className="text-xs text-gray-500 font-medium">{habit.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HabitSection