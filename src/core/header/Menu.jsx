// import React from 'react'
import { NavLink } from "react-router-dom";
import "./TopMenu.css";

export const Menu = () => {
  return (
    <div>
      <nav className="navMenu">
        <ul>
          <li>
            <NavLink to="clock">Clock</NavLink>
          </li>

          <li>
            <NavLink to="collapsable">Collapsable</NavLink>
          </li>
          <li>
            <NavLink to="json">Jsonplaceholder</NavLink>
          </li>
          <li>
            <NavLink to="students">Students</NavLink>
          </li>
          <li>
            <NavLink to="mui">Mui Table</NavLink>
          </li>
          <li>
            <a href="https://www.cnn.com" target="_blank">
              CNN
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

{
  /* it is recommended that we dont use <a href></a> for links instead we use <Navelinks /> or <link> for within the application */
}
