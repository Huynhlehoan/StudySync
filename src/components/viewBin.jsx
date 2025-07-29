import { FiX,FiTrash2, FiRotateCcw } from "react-icons/fi";
const ViewBin = ({onClose})=>{
    const TAGS = [
  { name: "Java", color: "bg-indigo-300" },
  { name: "React", color: "bg-rose-300" },
  { name: "English", color: "bg-gray-300" },
  { name: "Chinese", color: "bg-yellow-200" },
  { name: "UX/UI", color: "bg-pink-200" },
  { name: "NoSQL", color: "bg-green-300" },
  { name: "other", color: "bg-purple-300" }
]
    const FILES = [
  {
    id:1,
    type: "pdf",
    tag: "React",
    size: "125MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    id:2,
    type: "word",
    tag: "Java",
    size: "55MB",
    title: "Client-Server RMI",
    time: "12:02 6/27/2025"
  },
  {
    id:3,
    type: "excel",
    tag: "NoSQL",
    size: "15MB",
    title: "Cách cài đặt MongoDB",
    time: "12:02 6/27/2025"
  },
  {
    id:4,
    type: "ppt",
    tag: "React",
    size: "125MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    type: "video",
    tag: "React",
    size: "525MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    id:5,
    type: "video",
    tag: "React",
    size: "125MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    id:6,
    type: "img",
    tag: "other",
    size: "125KB",
    title: "Sitemap",
    time: "12:02 6/27/2025"
  },
  {
    id:7,
    type: "img",
    tag: "other",
    size: "205KB",
    title: "Các bước khởi nghiệp",
    time: "12:02 6/27/2025"
  }
]
    return(
        <div className="bg-white rounded-xl shadow-2xl m-3 max-w-3xl mx-auto p-4 ">
            {/* header */}
            <div className="flex justify-between p-2 border-b-2">
                <h1 className="font-bold text-2xl">Deleted file</h1>
                <FiX className="text-2xl font-bold hover:text-red-500 " onClick={onClose} />
            </div>
            {/* body */}
            <p className="text-gray-400">Files deleted here will be removed permanently after 30 days</p>
            {/* menu */}
            <div className="flex justify-between bg-gray-200 p-3 rounded-xl gap-4">
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" className="px-4 py-2" />
                   <label htmlFor="" className="text-2xl">All</label>
                </div>
               <div className="flex gap-2">
                     <div className="rounded-2xl border p-3 hover:bg-red-300">
                    <FiTrash2  />
                </div>
               <div className="rounded-2xl border p-3 hover:bg-green-200">
                <FiRotateCcw  />
               </div>
               </div>
            </div>
            {/* grid file */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
                    {FILES.map((file, idx) => (
                    <div key={idx} className="bg-gray-200 p-4 rounded-xl shadow space-y-1">
                        <input type="checkbox" name="" id="" />
                    <div className="flex items-center justify-between">
                        <div className="text-4xl">
                            {getFileIcon(file.type)}
                        </div>
                        <span
                        className={`text-xs px-2 py-1 rounded-full font-semibold text-white ${getTagColor(file.tag)}`}
                        >
                        {file.tag}
                        </span>

                        </div>
                        <div className="text-xs text-right text-gray-500">{file.size}</div>
                        <div className="font-semibold leading-snug text-[15px]">
                        {file.title}
                        </div>
                        <div className="text-xs text-gray-500">{file.time}</div>
                    </div>
                    ))}
                </div>
                

        </div>
    )
    // 🎨 Lấy màu tag
function getTagColor(tagName) {
  const tag = TAGS.find(t => t.name === tagName); 
  // tìm object trong TAGS mà t.name === tagName

  return tag ? tag.color : "bg-gray-400"; 
  // nếu tìm được thì trả về tag.color, ngược lại trả về màu xám mặc định
}


// 📁 Icon file
function getFileIcon(type) {
  switch (type) {
    case "pdf": return <span className="text-red-500 font-bold">pdf</span>
    case "word": return <img src="https://img.icons8.com/color/48/000000/ms-word.png" className="w-6 h-6" />
    case "excel": return <img src="https://img.icons8.com/color/48/000000/ms-excel.png" className="w-6 h-6" />
    case "ppt": return <img src="https://img.icons8.com/color/48/000000/ms-powerpoint.png" className="w-6 h-6" />
    case "video": return <img src="https://img.icons8.com/color/48/000000/video.png" className="w-6 h-6" />
    case "img": return <img src="https://img.icons8.com/color/48/000000/image.png" className="w-6 h-6" />
    default: return "📄"
  }
}
}; export default ViewBin;