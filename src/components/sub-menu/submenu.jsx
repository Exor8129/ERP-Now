import React from 'react';
import { Link } from 'react-router-dom';
import './submenu.css';
// You can import icons from the lucide-react library as needed
// import { FileText, FilePlus2, FileChartLine } from 'lucide-react';

const Submenu = ({ items, basePath }) => {
  return (
    <div className="submenu">
      {items.map(({ label, icon: Icon, path }, index) => (
        <div key={index} className="submenu-item">
          <Icon /> {/* Render the icon component */}
          <Link className="sub-link" to={basePath + path}>
            {label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
