import { FiXCircle } from "react-icons/fi";
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const Profile = ({ onClose }) => {

  return (
    <div className="bg-white rounded-xl shadow-xl p-4 w-full max-w-xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h1 className="text-xl font-semibold text-gray-700">👤 Profile</h1>
        <FiXCircle className="text-2xl text-gray-500 hover:text-red-500 cursor-pointer"  onClick={onClose} />
      </div>
        {/* avatar */}
        <div className="flex flex-col items-center gap-3 text-center relative">

        {/* 1. Nút edit góc phải */}
       
        {/* 2. Avatar + icon camera */}
        <div className="relative">
            <img
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
            alt="avatar"
            className="w-28 h-28 rounded-full object-cover"
            />
        
        </div>

        {/* 3. Username + joined */}
        <div>
            <h2 className="text-xl font-semibold">huynhlehoan</h2>
            <p className="text-sm text-gray-500">Joined 12 days</p>
        </div>

        {/* 4. Check-in */}
        <button className="bg-red-500 text-white px-4 py-1 rounded-full hover:bg-red-600 text-sm">
            Check-in
        </button>

        {/* 5. Streaks */}
        <p className="text-lg font-medium">
            🔥 <span className="font-bold">10-day</span> streaks
        </p>
        </div>


      {/* Learning Summary */}
      <div className="bg-indigo-100 border-t-4 border-indigo-500 rounded-xl p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">📚 Learning Summary</h2>
        <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
          <div>
            <p>Total tasks: <span className="font-medium">24</span></p>
            <p>Total files: <span className="font-medium">17</span></p>
          </div>
          <div>
            <p>Schedule: <span className="font-medium">5 events</span></p>
            <p>Total quiz: <span className="font-medium">12</span></p>
          </div>
        </div>
      </div>
    {/* infor */}
      <div className="flex flex-col gap-4 m-3">
    {/* fullname */}
    <div className="flex items-center">
        <label className="w-32">Full Name</label>
        <input disabled
        type="text"
        placeholder="Name"
        className="w-full border border-gray-400 rounded-lg hover:border-blue-400 p-2 placeholder-black peer invalid:border-red-500 outline-none"
        />
    </div>

    {/* phone */}
    <div className="flex items-center">
        <label className="w-32">Phone</label>
        <input disabled
        type="text"
        placeholder="0931481507"
        className="w-full border border-gray-400 rounded-lg hover:border-blue-400 p-2 placeholder-black peer invalid:border-red-500 outline-none"
        />
    </div>

    {/* Email */}
    <div className="flex items-center">
        <label className=" w-32">Email</label>
        <input disabled
        type="text"
        placeholder="abc@gmail.com"
        className=" w-full border border-gray-400 rounded-lg hover:border-blue-400 p-2 placeholder-black peer invalid:border-red-500 outline-none"
        />
    </div>

    {/* Location */}
    <div className="flex items-center">
        <label className="w-32">Location</label>
        <input disabled
        type="text"
        placeholder="HCMC, VN"
        className="w-full border border-gray-400 rounded-lg hover:border-blue-400 p-2 placeholder-black peer invalid:border-red-500 outline-none"
        />
    </div>
    </div>

    </div>
  );
};

export default Profile;
