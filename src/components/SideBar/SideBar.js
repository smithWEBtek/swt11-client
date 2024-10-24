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
        <div dangerouslySetInnerHTML={{ __html: sideBarContent }} />
      </nav>
    </aside>
  )
}

export default SideBar;