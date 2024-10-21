const SideContent = ({ title, body, json }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0 sidecontent">
      <div className="p-4">
        <h2 className="text-xl font-bold sidecontent-title">{title}</h2>
      </div>
      <nav className="p-4">
        <div className="sidecontent-body">{body}</div>
      </nav>
      <img src={`../assets/${json.resources.images[3]}`} alt='asdf' />
    </aside>
  )
}

export default SideContent;