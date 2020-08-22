import React, { useState, useEffect } from 'react';
import './App.css';
import { useForm } from "react-hook-form";
import purple from "./logo.svg"
import 'materialize-css';
import M from "materialize-css";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
 

function Navbar() {

  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  
  const [loading,setLoading] =useState(true);


  return (
    <div className="white-text">

<div className="sweet-loading">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      </div>


     <nav className="" style={{backgroundColor:"#1a237e", height:"70px"}}>
    <div className="nav-wrapper" style={{backgroundColor:"#1a237e"}}>


      <a href="#" className="brand-logo white-text logo-text " style={{fontSize:"4vmax"}}>Skyrocket Ventures</a>

<div className="hide-on-med-and-down">
      <ul id="nav-mobile" className="right ">
        <li><a className="white-text nav-text" href="">Employees</a></li>
        <li><a className="white-text nav-text" href="">Contact</a></li>
        <li><a className="white-text nav-text" href="">About</a></li>
      </ul>
      </div>
    </div>
  </nav>
</div>
  )

}
    
export default Navbar;
