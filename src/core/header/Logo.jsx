//import React from 'react'
import { NavLink } from "react-router-dom";
import HCSlogo from "/hcs_mid_32x.png";
export const Logo = () => {
  return (
    <div>
      {/* <a href="/"> */}
      <NavLink to="/">
        <img src={HCSlogo} />
        {/* it is recommended that we dont use <a href></a> for links instead we use <Navelinks /> */}
      </NavLink>
      {/* </a> */}
    </div>
  );
};
