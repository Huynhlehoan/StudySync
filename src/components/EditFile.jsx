import { FiX} from "react-icons/fi";
const EditFile = ({onClose})=>{
    return(
        <div className="bg-white p-4 w-2xl shadow-xl">
             {/* header */}
            <div className="flex justify-between p-2 border-b-2">
                <h1 className="font-bold text-2xl">Edit file</h1>
                <FiX className="text-2xl font-bold hover:text-red-500 " onClick={onClose}  />
            </div>
            {/* body */}
            <div>
            <div className="flex p-3">
                <p>12:02</p>
                <p>6/27/2025</p>
            </div>
            <div className="flex gap-3 m-2">
                <div>
                    <img src="https://img.icons8.com/color/48/000000/ms-word.png" alt="" />
                </div>
                <div className="flex gap-2 m-2">
                    <p>Size : </p>
                    <p>Type: </p>
                </div>
                <div className="flex gap-3 m-2">
                    <p>Tag: </p>
                    <input type="text" name="" id="" className="rounded-xl bg-blue-300 w-full h-7" />
                </div>
             
            </div>
            <div className="flex m-3 gap-3">
                <p className="w-20">Title: </p>
                  <input type="text" name="" id="" className="rounded-xl bg-blue-300 w-full h-7" />
            </div>
                <div className="flex gap-3">
                <p>Description: </p>
                  <input type="text" name="" id="" className="rounded-xl bg-blue-300 w-full h-7" />
            </div>
            <div className="flex m-3 gap-3 justify-end">
                <button className="bg-blue-300 px-3 py-1.5 ml-5 rounded-xl hover:bg-blue-200">Update</button>
                <button className="bg-gray-400 text-white px-3 py-1.5 rounded-xl hover:bg-gray-200" onClick={onClose}>Cancel</button>
            </div>
            </div>

        </div>
    )

}; export default EditFile;