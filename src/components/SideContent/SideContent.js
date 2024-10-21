const SideContent = ({ content }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0 sidecontent">
      <div className="p-4">
      </div>
      <nav className="p-4">
        <div className="sidecontent-body">
          <div className="side-content" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </nav>
    </aside>
  )
}

export default SideContent;