import React, { useState , useEffect } from 'react';
import Home from "./Home"
import Navbar from "./Navbar"
import axios from "axios";
import Footer from "./Footer" 

function App() {
   
  return (
    <div className="outer-div">
        <Navbar />
        <Home/>
        <Footer />
       </div>
  ); 

}
export default App;

{/*
  

  const MAPBOX_TOKEN="pk.eyJ1IjoicmV5YW5naWxhbmkiLCJhIjoiY2tjajU0dmVoMWlhbzJ4bTJseXR2eHNwMyJ9.4MPVurBGJ8EPllQqdCrUCg"
  const also_key="a3tuenltqmlqoeoqejjmjz5ic0v6ovdl"
  const A_ID="ASVHPETK"
  const APP_ID="nG0YPY2EEPf0aMrGG5dv"
  const ID_KEY="bFMkt1xfwCWsW6JaDqaLHfSxOF3_hV4YM-ZU1xXeQHw"
  const ANOTHER_KEY = "8lMKyz7W8H8qwAoRhTrfcNQ4vAhhQff2"

  const key_we ="73aa259834524879bfc184102202807"
   const oorl = "https://api.raisely.com/v3/check-user" 
  const mail = "test@test.com"
  
    const otherParam= {
    "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
    "data": {
        "email":`${mail}`
    }};

    useEffect(() => {
      getCord()
     } ,[]);

     fetch(
      " https://api.raisely.com/v3/check-user",{
        "campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a",
        "data": {
            "firstName": "boi",
            "lastName": "reyan",
            "email": "reyanahtesham@gmail.com",
            "password": "gilanisahab"
        }
    })
    .then(results=>results.json())
    .then(console.log)
  
   
  const parmos={"campaignUuid": "46aa3270-d2ee-11ea-a9f0-e9a68ccff42a","data": {"email":"test@test.com"}} 

   const getCord = async () => {
     const response = await fetch("https://api.raisely.com/v3/signup",parmos);  
     const data= await response.json();
     console.log(data)
   }
   

*/}