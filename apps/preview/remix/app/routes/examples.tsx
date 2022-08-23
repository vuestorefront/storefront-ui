import { NavLink, Outlet, useParams, useSearchParams } from '@remix-run/react';
import { useState } from 'react';
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import fs from '../utils/files.server'

export async function loader() {
  const filenames = fs.readdirSync('./app/routes/examples');
  const components = filenames.map((file) => file.match(/([\w\d_-]*)\.?[^\\\/]*$/i)[1]).sort()
  return json(components);
}

export default function Index() {
  const [isOpen, setIsOpen] = useState(true);
  const [searchParams] = useSearchParams();
  const isDocs = searchParams.get('docs');
  const components = useLoaderData();

  return (
    <div className="e-page-examples">
      {!isDocs && (
        <div className={`sidebar ${isOpen ? '' : 'sidebar-collapsed'}`}>
          <button
            className={`sidebar-toggle ${isOpen && 'sidebar-toggle-collapsed'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            &lt;&lt;
          </button>
          <h2 className="sidebar-heading">Components</h2>
          <ul className="sidebar-list">
            {components.map((component) => {
              return (
                <li key={component}>
                  <NavLink to={`/examples/${component}`}>{component}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <Outlet />
    </div>
  );
}
