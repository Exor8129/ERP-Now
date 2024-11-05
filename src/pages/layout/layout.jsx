import React, { useState } from "react";
import "./layout.css";
import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  LibraryBig,
  LogOut,
  PackagePlus,
  ReceiptIndianRupee,
  Settings,
  Unplug,
  Workflow,
  FileText,
  FilePlus2,
  FileChartLine,
} from "lucide-react";
import { Divider } from "@mui/material";
import Submenu from "../../components/sub-menu/submenu";

const LayoutPage = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuVisibilityHandler = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const submenus = {
    sales: [
      { label: 'Invoices', icon: FileText, },
      { label: 'New Invoice', icon: FilePlus2 },
      { label: 'Sale Report', icon: FileChartLine }
    ],
    // Define other submenus for different sections
    purchase: [
      { label: 'Purchase Orders', icon: FileText },
      { label: 'New Order', icon: FilePlus2 }
    ],
    finance: [
      { label: 'Financial Reports', icon: FileText },
      { label: 'Expenses', icon: FilePlus2 }
    ],
    // Add more submenus as needed
  };

  return (
    <div className="layout-main-container">
      <div className="sidenav-container">
        <div className="logo">
          <p>ERPNow</p>
        </div>
        <div className="profile">
          <div className="profile-img">
            <p> logo </p>
          </div>
          <div className="icons">
            <p>icons Here</p>
          </div>
        </div>
        <div className="divider">
          <Divider variant="Middle" />
        </div>
        <div className="list-container">
          <div className="tabs">
            <div className="link-wrapper">
              <Link to={""} className="tab-links">
                <LayoutDashboard />
                Dashboard
              </Link>
            </div>
            <Link to={"sales"} onClick={() => menuVisibilityHandler('sales')} className="tab-links">
              <ReceiptIndianRupee />
              Sales
            </Link>
            <div className={`sub-menu ${activeSubmenu === 'sales' ? 'active' : ''}`}>
              <Submenu items={submenus.sales} />
            </div>
            <Link onClick={() => menuVisibilityHandler('purchase')} className="tab-links">
              <PackagePlus />
              Purchase
            </Link>
            <div className={`sub-menu ${activeSubmenu === 'purchase' ? 'active' : ''}`}>
              <Submenu items={submenus.purchase} />
            </div>
            <Link onClick={() => menuVisibilityHandler('finance')} className="tab-links">
              <LibraryBig />
              Finance
            </Link>
            <div className={`sub-menu ${activeSubmenu === 'finance' ? 'active' : ''}`}>
              <Submenu items={submenus.finance} />
            </div>
            {/* Add more links and submenus as needed */}
            <Link to={"complaints"} className="tab-links">
              <Unplug />
              Complaints
            </Link>
            <Link to={"operations"} className="tab-links">
              <Workflow />
              Operations
            </Link>
          </div>
        </div>
        <div className="divider">
          <Divider variant="Middle" />
        </div>

        <div className="side-footer">
          <Link to={"settings"} className="tab-links">
            <Settings />
            Settings
          </Link>
          <Link to={"logout"} className="tab-links">
            <LogOut />
            Logout
          </Link>
        </div>
      </div>
      <div className="pages-container">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutPage;
