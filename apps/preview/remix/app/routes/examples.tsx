import { NavLink, Outlet, useParams, useSearchParams } from "@remix-run/react";
import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const isDocs = searchParams.get("docs");
  return (
    <div className="e-page-examples">
      {!isDocs &&
        <div className={`sidebar ${isOpen ? 'sidebar-collapsed' : ''}`}>
          <button
            className={`sidebar-toggle ${isOpen && 'sidebar-toggle-collapsed'}`}
            onClick={() => setIsOpen(!isOpen)}>&lt;&lt;</button>
          <h2 className="sidebar-heading">Components</h2>
          <ul className="sidebar-list">
            <li><NavLink to="/examples/componentExample">Component Example Link</NavLink></li>
            <li><NavLink to="/examples/some">Some other component</NavLink></li>
            <li><NavLink to="/examples/VsfButton">Button</NavLink></li>
          </ul>
        </div>
      }

      <Outlet />
    </div>
  );
}
