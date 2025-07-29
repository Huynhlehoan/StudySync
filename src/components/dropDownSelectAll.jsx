import { FiArrowDown,FiTrash2 } from "react-icons/fi";

const DropDownSelectAll=()=>{
        return(
    <div className="absolute  top-full right-0 w-full rounded-xl p-3 shadow-2xl z-50 transform hover:scale-105 transition duration-300">
        <div className="  flex flex-col gap-2 bg-black/50 text-white justify-center   rounded-xl shadow-2xl w-32">
            <div className="flex p-3 items-center hover:bg-gray-300">
                <FiArrowDown className="mr-3 " />
                <p>Download</p>
            </div>
            
          <div className="flex p-3 items-center hover:bg-gray-300">
                <FiTrash2 className="mr-3 " />
                <p>Remove</p>
          </div>
            
        </div>
    </div>

    )
}; export default DropDownSelectAll;