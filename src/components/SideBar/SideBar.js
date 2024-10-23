import { useEffect, useState } from "react";
import StaticHtmlRenderer from "../utils/StaticHtmlRenderer";

const SideBar = () => {
  const html = StaticHtmlRenderer('sidebar.html')
  const [sideBarContent, setSideBarContent] = useState('')

  useEffect(() => {
    setSideBarContent(html[0].props.dangerouslySetInnerHTML.__html)
  }, [html])

  return (
    <aside className="w-64 bg-gray-800 text-white flex-shrink-0 sidebar">
      <nav className="p-4">
        <div className="sidebar-body">
          <div className="sidebar-content" dangerouslySetInnerHTML={{ __html: sideBarContent }} />
        </div>
      </nav>
    </aside>
  )
}

export default SideBar;