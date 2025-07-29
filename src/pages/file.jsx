import React from 'react'
import { useState } from 'react'
import Upload from '../components/Upload'
import { FiMoreVertical } from "react-icons/fi";
import DropdownSelect from '../components/dropDownSelect';
import DropDownSelectAll from '../components/dropDownSelectAll';
import { FiArrowDown,FiTrash2 } from "react-icons/fi";
import ViewBin from '../components/viewBin';
import EditFile from '../components/EditFile';


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

const File = () => {

  const [activeDropdownIdx, setActiveDropdownIdx]= useState(null); // state ql hiện dropdown cho dấu 3 chấm (cho từng id)
  const [showSelect, setShowSelect]= useState(false); // qli hiển thị dropdown chỗ Select ra 
  const [showUpload, setShowUpload]=useState(false);
  const [showViewBin, setShowViewBin]= useState(false); // qli modal viewBin
  const [showEditFile, setShowEditFile]= useState(false);

  const [selectMode, setSelectMode] = useState(false); // đang bật chọn?
  const [selectedIds, setSelectedIds] = useState([]); // chứa các id file đã chọn

  const toggleSelectMode = () => {
    setSelectMode(true);
    
  };
  // xu li bo chon file
const handleToggleFile = (id) => {
  if (selectedIds.includes(id)) {
    setSelectedIds(selectedIds.filter(fid => fid !== id));
  } else {
    setSelectedIds([...selectedIds, id]); 
  }
};

const handleDownloadSelected = () => {
  console.log("Download files with ids:", selectedIds);
  // xử lý download thật sẽ làm sau
};

const handleRemoveSelected = () => {
  console.log("Remove files with ids:", selectedIds);
  // xử lý xoá thật sẽ làm sau
};



    return (
    <div className="p-6 space-y-6">
      {/* Top bar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Tags:</span>
          {TAGS.map(tag => (
            <button
              key={tag.name}
              className={`${tag.color} text-gray-800 px-3 py-1 rounded-full text-sm font-semibold shadow`}
            >
              {tag.name}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-indigo-300 text-white px-4 py-2 rounded-lg shadow font-semibold" onClick={()=>setShowUpload(true)}>
            Upload
          </button>
          <select className="bg-gray-300 text-white rounded-lg px-3 py-2 text-sm shadow">
            <option>All</option>
            <option>PDF</option>
            <option>Video</option>
            <option>Image</option>
            <option>Docs</option>
            <option>PowerPoint</option>
          </select>
        </div>
      </div>

      {/* storage */}
      <div className='bg-white rounded-xl p-3'>
       
          <p className="text-sm text-gray-600 mb-1">Storage used: 1.3 GB / 5 GB</p>
          {/* thanh storage và 2 btn */}
          <div className='flex'>
                 {/* thanh storage */}
                <div className='flex bg-gray-200  h-8 rounded-sm w-[60rem] mr-3 '>
                    <div
                    className="bg-indigo-300 h-8 rounded-sm"
                    style={{ width: '26%' }} 
                  />
                  <div
                    className="bg-pink-300 h-8 rounded-sm"
                    style={{ width: '10%' }} 
                  />
                  <div
                    className="bg-green-300 h-8 rounded-sm"
                    style={{ width: '5%' }} 
                  />
                </div>
             {/* button */}
              <button className='rounded-xl bg-indigo-200  shadow-2xl mr-2 px-3 py-1.5' onClick={()=>setShowViewBin(true)}>View bin</button>
             <div className='relative'>
            <button
              onClick={() => {
                if (selectMode) {
                  // Nếu đang ở chế độ chọn → Cancel
                  setSelectMode(false);
                  setShowSelect(false);
                  setSelectedIds([]); // bỏ hết lựa chọn
                  setActiveDropdownIdx(null); // tắt dropdown nếu đang mở
                } else {
                  // Bật chế độ chọn
                  setSelectMode(true);
                  setShowSelect(true);
                }
              }}
              className='border-2 rounded-xl shadow-2xl hover:bg-gray-200 px-3 py-1.5'
            >
              {selectMode ? "Cancel" : "Select files"}
              
            </button>

          </div>

          
             


          </div>
       


          {/* chú thích cho storage */}
            <div className='flex mt-2'>
              <div  className="bg-indigo-300 h-5 rounded-sm mr-2"
                    style={{ width: '2%' }} />
                    <p>Documents</p>

                    <div  className="bg-pink-300 h-5 rounded-sm ml-5 mr-2"
                    style={{ width: '2%' }} />
                    <p>Video</p>

                    <div  className="bg-green-300 h-5 rounded-sm ml-5 mr-2"
                    style={{ width: '2%' }} />
                    <p>Image</p>
                  
                
            </div>
    
     </div>
     <div className='flex gap-2 p-3'>
                        {selectMode && (
                <button
                  className="mb-4 ml-3 px-3 py-1 bg-blue-500 text-white rounded"
                  onClick={() => {
                    if (selectedIds.length === FILES.length) {
                      setSelectedIds([]); // Deselect all
                    } else {
                      setSelectedIds(FILES.map(f => f.id)); // Select all
                    }
                  }}
                >
                  {selectedIds.length === FILES.length ? "Cancel" : "Select all"}
                </button>
              )}
                    {/* down và xoá */}
              {selectedIds.length > 0 && (
                <div className="flex gap-2 mt-4">
                    <div className="flex p-3 items-center hover:bg-gray-300">
                      <FiArrowDown className="mr-3 " />
                      <p>Download</p>
                    </div>
            
                <div className="flex p-3 items-center hover:bg-gray-300">
                      <FiTrash2 className="mr-3 " />
                      <p>Remove</p>
                </div>
                      </div>
              )}
                  </div>

      {/* Grid of files */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FILES.map((file, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-xl shadow space-y-1">
            <div className='flex '>
                   {selectMode && (
            <input
              type="checkbox"
              checked={selectedIds.includes(file.id)}
              onChange={(e) => handleToggleFile(file.id)}
            />
           )}
           <div className='relative ml-60'>
              <FiMoreVertical
                className='ml-auto cursor-pointer'
                onClick={() => setActiveDropdownIdx(activeDropdownIdx === idx ? null : idx)}
              />
              {activeDropdownIdx === idx && (
                <div className="absolute top-2 right-24 z-50">
                  <DropdownSelect onEditClick={
                    ()=> setShowEditFile(true)
                  
                  } />
                </div>
              )}
            </div>
            </div>
       

           
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
      {
        showUpload &&(
          <div className='bg-black/40 fixed inset-0 z-50 items-center justify-center'>
              <Upload onClose={
              () => setShowUpload(false)
              }/>
          </div>
        )
      }
      {showViewBin &&(
        <div className='bg-black/40 fixed inset-0 z-50 items-center justify-center'>
          <ViewBin onClose={
            ()=> setShowViewBin(false)
          }
          />

        </div>
      )}
      {showEditFile && (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
    <EditFile onClose={() => setShowEditFile(false)} />
  </div>
)}
    </div>
  )
}

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

export default File
