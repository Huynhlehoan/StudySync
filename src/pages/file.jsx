import React from 'react'
import { useState } from 'react'
import Upload from '../components/Upload'
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
    type: "pdf",
    tag: "React",
    size: "125MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    type: "word",
    tag: "Java",
    size: "55MB",
    title: "Client-Server RMI",
    time: "12:02 6/27/2025"
  },
  {
    type: "excel",
    tag: "NoSQL",
    size: "15MB",
    title: "Cách cài đặt MongoDB",
    time: "12:02 6/27/2025"
  },
  {
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
    type: "video",
    tag: "React",
    size: "125MB",
    title: "Các hook cơ bản trong react",
    time: "12:02 6/27/2025"
  },
  {
    type: "img",
    tag: "other",
    size: "125KB",
    title: "Sitemap",
    time: "12:02 6/27/2025"
  },
  {
    type: "img",
    tag: "other",
    size: "205KB",
    title: "Các bước khởi nghiệp",
    time: "12:02 6/27/2025"
  }
]

const File = () => {
  const [showUpload, setShowUpload]=useState(false);
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
          <select className="bg-gray-200 rounded-lg px-3 py-2 text-sm shadow">
            <option>All</option>
            <option>PDF</option>
            <option>Video</option>
          </select>
        </div>
      </div>

      {/* Grid of files */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {FILES.map((file, idx) => (
          <div key={idx} className="bg-gray-100 p-4 rounded-xl shadow space-y-1">
            <div className="flex items-center justify-between">
              <div className="text-4xl">
                {getFileIcon(file.type)}
              </div>
              <span className="text-xs px-2 py-1 rounded-full font-semibold text-white"
                style={{ backgroundColor: getTagColor(file.tag) }}
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
    </div>
  )
}

// 🎨 Lấy màu tag
function getTagColor(tag) {
  switch (tag) {
    case "Java": return "#a5b4fc"
    case "React": return "#fca5a5"
    case "English": return "#d1d5db"
    case "Chinese": return "#fde68a"
    case "UX/UI": return "#fbcfe8"
    case "NoSQL": return "#86efac"
    case "other": return "#e9d5ff"
    default: return "#ccc"
  }
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
