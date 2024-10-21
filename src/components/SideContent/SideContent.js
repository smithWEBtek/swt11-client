const SideContent = ({ title, body }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0 sidecontent">
      <div className="p-4">
        <h2 className="text-xl font-bold sidecontent-title">SideContent title</h2>
      </div>
      <nav className="p-4">
        <div className="sidecontent-body">SideContent body</div>
      </nav>
    </aside>
  )
}

export default SideContent;