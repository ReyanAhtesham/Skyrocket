import React from 'react';
import './App.css';
import first from "./Images/First.png"
import second from "./Images/second.jpg"
import third from "./Images/third.jpg"
import 'materialize-css';
import M from "materialize-css";
import { transform } from 'framer-motion';


function Footer() {
  return (
  
    <footer > 
  <div className="row" style={{backgroundColor:"#1a237e",marginBottom:"0px"}}>
    <div className="col s7">
    <form className="">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First Name" id="first_name" type="text"/>
        </div>
        <div className="input-field col s6">
          <input placeholder="Last Name" id="last_name" type="text"/>
        </div>
      </div>
      
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Email" id="email" type="email"/>
        </div>
      </div>
      
      </form>
  
    </div>

    <div className="col s5">
    <div className="row">
        <div className="input-field col s12">
          <input placeholder="Message" id="message" type="text" />
        </div>
      </div>
      <h5 className="white-text" style={{marginLeft:"30px",marginTop:"30px"}}>Links</h5>
      <div>
      <i className="linkos small material-icons lime accent-1" style={{marginLeft:"30px"}}>phone</i>
      <i className="linkos small material-icons lime accent-1" style={{marginLeft:"30px"}}>facebook</i>
      <i className="linkos small material-icons lime accent-1" style={{marginLeft:"30px"}}>mail</i>
      <i className="linkos small material-icons lime accent-1" style={{marginLeft:"30px"}}>local_fire_department</i>
      </div>
  
    </div>
  </div>
</footer>
 )

}
    
export default Footer;
{/*
<footer className="page-footer" style={{backgroundColor:"#1a237e",paddingBottom:"50px"}}>
          <div className=" titles">
            <div className="row">
              <div className="col l6 s12">
              <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First Name" id="first_name" type="text"/>
        </div>
        <div className="input-field col s6">
          <input placeholder="Last Name" id="last_name" type="text"/>
        </div>
      </div>
      
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Email" id="email" type="email"/>
        </div>
      </div>
      
      </form>
  </div>
         </div>
              <div className="col l4">
                  <div className="row">
        <div className="input-field col s12">
          <input placeholder="Message" id="message" type="text" />
        </div>
      </div>
      <h5 className="white-text" style={{marginLeft:"30px",marginTop:"30px"}}>Links</h5>
      <div>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>phone</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>facebook</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>mail</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>local_fire_department</i>
      </div>

              </div>
            </div>
          </div>
          
        </footer> */}





        {/*
        
    <footer > 
  <div className="row" style={{backgroundColor:"#1a237e",marginBottom:"0px"}}>
    <div className="col s7">
    <form className="">
      <div className="row">
        <div className="input-field col s6">
          <input placeholder="First Name" id="first_name" type="text"/>
        </div>
        <div className="input-field col s6">
          <input placeholder="Last Name" id="last_name" type="text"/>
        </div>
      </div>
      
      <div className="row">
        <div className="input-field col s12">
          <input placeholder="Email" id="email" type="email"/>
        </div>
      </div>
      
      </form>
  
    </div>

    <div className="col s5">
    <div className="row">
        <div className="input-field col s12">
          <input placeholder="Message" id="message" type="text" />
        </div>
      </div>
      <h5 className="white-text" style={{marginLeft:"30px",marginTop:"30px"}}>Links</h5>
      <div>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>phone</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>facebook</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>mail</i>
      <i className="linkos small material-icons cyan accent-2" style={{marginLeft:"30px"}}>local_fire_department</i>
      </div>
  
    </div>
  </div>
</footer>
 */}