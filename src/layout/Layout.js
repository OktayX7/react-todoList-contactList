import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const menuItems = [
    {
      id: 1,
      text: "Todo App",
      path: "/",
    },
    {
      id: 2,
      text: "Contact App",
      path: "/contact-app",
    },
  ];
  return (
    <>
      <nav className="navbar navbar-light bg-dark">
        <div className="container">
          <ul className="nav m-auto">
            {menuItems.map((item) => (
              <li key={item.id} className="nav-item ">
                <Link to={item.path} className="nav-link text-light fs-5 fw-bolder my-2">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
