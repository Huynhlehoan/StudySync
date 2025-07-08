import { FiXCircle } from "react-icons/fi"
const Upload = ({onClose})=>{
    return(
    
        <div className="bg-white rounded-xl shadow-2xl m-3 max-w-xl mx-auto p-4">
            <div className="flex justify-between items-center pb-2 border-b-2">
                <h1 className="font-bold text-2xl">Upload file</h1>
                <FiXCircle className="hover:text-red-500 text-3xl" onClick={onClose}/>

            </div>
            {/* khung upload */}
            <div className="flex flex-col border border-dashed items-center rounded-2xl m-3 p-3">
                <img src="" alt="" />
                <p className="text-2xl text-gray-500"> <a href="" className="text-blue-600">Click to upload </a>or drag and drop</p>
                <p className="text-gray-400">File max size : 1024MB</p>
                <p className="text-gray-500">Supported format : .mp4 , .png , .jpg , .pdf , .docx , .pptx</p>
            </div>
            {/* file upload len */}
            <div className="flex rounded-xl border m-2">
                <div className="flex-1">
                    <img src="" alt="" />
                </div>
                <div className="flex-3">
                    <div className="flex-col p-3">
                        <div className="flex justify-between mb-2">
                            <h1 className="text-2xl font-bold">Started with react</h1>
                            <p className="text-gray-400">250MB</p>
                        </div>
                        <div className="flex">
                            <input type="number" name="" id="" className="rounded-2xl border mr-2 w-full" />
                            <p>0%</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* dien thong tin file */}
            <div className="flex-col m-2">
                <div className="flex p-2">
                    <div className="flex-1 border rounded-xl shadow-2xl mr-3 p-2">
                            <label className="mr-3" htmlFor="">Title</label>
                            <input type="text" name="" id="" className="rounded-xl w-full bg-indigo-300" />
                    </div>
                    <div className="flex-1 border rounded-xl shadow-2xl p-2">
                            <label className="mr-3" htmlFor="">Choose tags</label>
                            <input type="text" name="" id="" className="rounded-xl w-full  bg-indigo-300" />
                    </div>
                    
                </div>
                <div className="border rounded-xl shadow-2xl mr-3 p-2">
                     <label className="mr-3" htmlFor="">Description : </label>
                            <input type="text" name="" id="" className="rounded-xl w-full h-20 bg-indigo-300" />
                </div>

            </div>

            {/* 2 cai button */}
            <div className="flex justify-end p-3 m-2">
                <button className="bg-indigo-400 rounded-xl hover:bg-indigo-200 px-3 py-1.5 mr-3">Upload</button>
                <button className="bg-gray-300 rounded-xl hover:bg-gray-100 px-3 py-1.5" onClick={onClose}>Cancel</button>
            </div>

        </div>
       
    )
}; export default Upload;