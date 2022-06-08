import react from 'react';
import styled from "styled-components";

// import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState,useContext } from "react";
import GlobalStyles from "./GlobalStyles"

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Addrecipe from "./components/Addrecipe";
import Viewrecipe from "./components/Viewrecipe";


const App = () => {

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      {/* <Login /> */}
      <Main>
        <Switch>
        {/* <Routes> */}
          <Route exact path="/">
              <Homepage />
          </Route>
          <Route exact path="/login">
              <Login />
          </Route>
          <Route path="/add-recipe">
            <Addrecipe />
          </Route>
          <Route path="/view-recipe">
            <Viewrecipe />
          </Route>
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

const Main = styled.div`
  background: var(--color-orange);
  display: flex;
  flex-direction: column;
  height: calc(100vh - 110px);
`;

export default App;


// import {useEffect, useState} from 'react';
// import jwt_decode from 'jwt-decode';
// // const { MongoClient } = require("mongodb");
// // const path = require("path");
// // require("dotenv").config({path: "../server/.env"});

// // const { CLIENT_ID,CLIENT_SECRET } = process.env;

// function App() {

//   const [user, setUser] = useState({})

//   const handlecallback = (response)=>{
//   //  console.log("Encode token" + response.credential)
//    const userObj = jwt_decode(response.credential)
//    console.log(userObj)
//   //  console.log("test")
//     setUser(userObj)
//     document.getElementById("signInDiv").hidden=true;
//   }

//   const handleSignout = ()=>{
//     setUser({});
//     document.getElementById("signInDiv").hidden=false;
//   }
//   useEffect(()=>{ 
//     /* global google */
//     google.accounts.id.initialize({
//       client_id: "474484987872-8j83f3q0uaqh30ml2tke3rhqujbnr4v8.apps.googleusercontent.com",
//       callback: handlecallback
//     })

//     google.accounts.id.renderButton(
//       document.getElementById("signInDiv"),
//       {theme: "outline", size: "large"}
//     )

//   },[])


//   return (
    
//     <div className='App'>
//       <div id="signInDiv"></div>
//       {Object.keys(user).length !=0 &&
//        <button onClick={(e)=>handleSignout(e)}>Sign Out</button>
//       }
     
      
      
//       {user &&
//         <div>
//           {/* add ? for optional chaining */}
//           <img src={user?.picture}></img>
//           <h3>{user.name}</h3>
//         </div>
//       }

//     </div>          
//   );
// }

// export default App;
