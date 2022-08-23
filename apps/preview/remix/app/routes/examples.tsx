import { NavLink, Outlet, useParams, useSearchParams } from "@remix-run/react";
import { useState } from "react";

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const isDocs = searchParams.get("docs");
  const components = ['VsfProgress', 'VsfButton'].sort(); //Generate component list, because we need sorted list
  return (
    <div className="e-page-examples">
      {!isDocs &&
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <button
            className={`sidebar-toggle ${isOpen && 'sidebar-toggle-collapsed'}`}
            onClick={() => setIsOpen(!isOpen)}>&lt;&lt;</button>
          <h2 className="sidebar-heading">Components</h2>
          <ul className="sidebar-list">
            {components.map(component => {
              return <li key={component}><NavLink to={`/examples/${component}`}>{component}</NavLink></li>
            })}
          </ul>
        </div>
      }
      <Outlet />
    </div>
  );
}
