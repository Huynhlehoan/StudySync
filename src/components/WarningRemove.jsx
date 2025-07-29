import { FiX} from "react-icons/fi";
const WarningRemove = ()=>{
    return(
        <div className="bg-white p-4 w-2xl shadow-xl">
             {/* header */}
            <div className="flex justify-between p-2 border-b-2">
                <h1 className="font-bold text-2xl">Edit file</h1>
                <FiX className="text-2xl font-bold hover:text-red-500 "  />
            </div>
            {/* body */}
            <div>
                <p>Do you want to delete this file? </p>
                <div>
                    <button className="rounded-xl px-3 py-2 bg-red-400">Yes</button>
                    <button className="rounded-xl px-3 py-2 bg-gray-200">No</button>
                </div>

            </div>
            
        </div>
    )

}; export default WarningRemove;