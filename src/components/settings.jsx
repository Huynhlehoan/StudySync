import { WiDaySunny  } from "react-icons/wi";
import { FiXCircle } from "react-icons/fi";
const settings = ({onClose})=>{
    return(
        <div className="bg-gray-200 shadow-2xl rounded-xl p-4 items-center w-4xl">
            {/* header */}
            <div className="flex mb-3 p-3 border-b-2 justify-between">
                <h1 className="font-bold text-2xl">Settings</h1>
                <FiXCircle className="text-2xl  hover:text-red-500 cursor-pointer" onClick={onClose} />
                

            </div>
            {/* settings profile */}
            <div className="flex bg-white  rounded-xl items-center justify-center">
                {/* avatar */}
                <div className="flex flex-col p-2 items-center">
                <h1 className="font-bold text-2xl">Profile</h1>
                 <img
                    src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=2"
                    alt="avatar"
                    className="w-20 h-20 m-3 rounded-full object-cover"
                    />
                </div> 
                {/* profile*/}
                <div className="flex flex-col mt-12 m-3 gap-4  ">
                    {/* full name + phone */}
                    <div className="flex gap-2 border-t-2 pt-3">
                        <label htmlFor="" className="w-32">Fullname: </label>
                        <input type="text" name="" id="" placeholder="huynhlehoan"  className="border border-2 rounded-lg"/>
                        <label htmlFor="" className="w-32">Phone: </label>
                        <input type="text" name="" id="" placeholder="0931481507" className="border border-2 rounded-lg" />
                    </div>
                    {/* email */}
                    <div className="flex gap-2">
                         <label htmlFor="" className="w-40">Email: </label>
                        <input type="text" name="" id="" placeholder="huynhlehoan@gmail.com"  className="border border-2 rounded-lg w-full"/>
                    </div>
                    {/* Location */}
                    <div className="flex gap-2 ">
                     <label htmlFor="" className="w-40">Location: </label>
                        <input type="text" name="" id="" placeholder="HCMC, VN"  className="border border-2 rounded-lg w-full"/>
                    </div>
                </div>
            </div>

            {/* settings pass & preference */}

            <div className="flex mt-3">
                {/* pass */}
                <div className="flex-1 mr-3 bg-white rounded-xl p-3">
                    <div className=" flex gap-2 p-2 ">
                     <label htmlFor="" className="w-40">Old Password: </label>
                    <input type="password" name="" id="" className="border border-2 rounded-lg " />
                    </div>
                      <div className="flex gap-2 p-2 ">
                     <label htmlFor="" className="w-40">New Password: </label>
                    <input type="password" name="" id="" className="border border-2 rounded-lg " />
                    </div>
                      <div className="flex gap-2 p-2">
                     <label htmlFor="" className="w-40">New Password again: </label>
                    <input type="password" name="" id="" className="border border-2 rounded-lg " />
                    </div>
                </div>

                {/* preference */}
                 <div className="flex-1 bg-white rounded-xl p-3">
                    <div className=" flex gap-2 p-2 ">
                     <label htmlFor="" className="w-28">Theme: </label>
                     <div className="border border-2 rounded-lg w-28 h-8 pl-3">
                        <button className="border-r-2 mr-2 pr-2">Dark</button>
                     <button>Light</button>
                     </div>
                     
                    </div>
                      <div className="flex gap-2 p-2 ">
                     <label htmlFor="" className="w-40">Language: </label>
                   <select name="" id="" className="w-full rounded-lg border border-2">
                    <option value="">Vietnamese</option>
                    <option value="">English</option>
                   </select>
                    </div>
                      <div className="flex gap-2 p-2">
                     <label htmlFor="" className="w-40">Timezone: </label>
                     <select name="" id="" className="w-full rounded-lg border border-2">
                    <option value="">UTC+7</option>
                    <option value="">UTC+8</option>
                   </select>
                    </div>
                </div>
            </div>

            {/* btn */}
            <div className="flex justify-end">
                <button className="bg-indigo-300 px-2 py-1.5 rounded-xl m-2">
                    Apply
                </button>

                <button className="bg-gray-300 px-2 py-1.5 rounded-xl m-2" onClick={onClose}>Cancel</button>
            </div>


        </div>
    )
};
export default settings;