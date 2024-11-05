import React from 'react';
import "./submenu.css"
import { Link } from 'react-router-dom';
// import {FileText,FilePlus2} from 'lucide-react'


const Submenu = ({ items },pathName) => {
  return (
    <div className="submenu">
      {items.map(({ label, icon: Icon, }, index) => (
        <div key={index} className="submenu-item">
          <Icon /> {/* Render the icon component */}
          {/* <span>{label}</span> Render the label */}
          <Link className='sub-link' to={pathName}>{label}</Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
