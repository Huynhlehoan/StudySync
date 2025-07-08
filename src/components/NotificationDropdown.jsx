const NotifyDropdown = () => {
  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-lg z-50 p-4">
      <h1 className="font-semibold text-sm text-gray-700 pb-2 border-b">🔔 Notifications</h1>
      <ul className="text-sm text-gray-600 divide-y">
        <li className="py-2 hover:bg-gray-100">Bạn có 1 file mới được chia sẻ</li>
        <li className="py-2 hover:bg-gray-100">Bài kiểm tra "Toán" sắp đến hạn</li>
        <li className="py-2 hover:bg-gray-100">Bạn vừa hoàn thành 1 task</li>
      </ul>
    </div>
  )
}; export default NotifyDropdown;
