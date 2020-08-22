import React from 'react';
import './App.css';
import first from "./Images/First.png"
import second from "./Images/second.jpg"
import third from "./Images/third.jpg"
import 'materialize-css';
import M from "materialize-css";
import { transform } from 'framer-motion';
import Typist from 'react-typist';

function Home() {
  return (
    <div> 
      <div className="title-div center-align">  
            <h1 className="main-title ">The Sky Is <h1 className="title-sub">the limit </h1>
       Just The Beginning.
      </h1>
      </div>
{/* in people 
in the future 
in our entrpenuers*/}
      <div className="row ooper">      
      <div className="col s5">
        <h1 className="center-align titles">We Believe</h1>
        <Typist>
        <h3 className="center-align one">In our Entrepreneurs</h3>
        <Typist.Backspace count={22} delay={300} />
  <h3 className="center-align one">In the Future</h3>
  <Typist.Backspace count={22} delay={300} />
  <h3 className="center-align one">In People</h3>

  <Typist.Backspace count={22} delay={300} />
   <h3 className="center-align one">In our Entrepreneurs</h3>
        <Typist.Backspace count={22} delay={300} />
  <h3 className="center-align one">In the Future</h3>
  <Typist.Backspace count={22} delay={300} />
  <h3 className="center-align one">In People</h3>
      </Typist>
            </div>
    
      <img className="col s7" style={{width:"57vmax"}} src={first} />
      </div>

      <div className="row ooper">
      <img src={second} style={{width:"57vmax"}} className="col s7"  />
    <div className="col s5">
      <h1 className="center-align titles">The future is ours</h1>
      <h3 className="center-align one">We are new but have a million dolar pipeline</h3>
      </div> 
     </div>

     <div className="row ooper">
     <div className="col s5">
          <h1 className="center-align titles">Explosive starts</h1>
          <h3 className="center-align one">We stay with the companies we create until the end</h3>
        </div>

      <img src={third} style={{width:"57vmax"}} className=" col s7" />
       
</div>
</div>
  )

}
    
export default Home;
