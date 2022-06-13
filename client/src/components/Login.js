
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import styled from 'styled-components';

import CommentForm from './CommentForm';

// const { MongoClient } = require("mongodb");
// const path = require("path");
// require("dotenv").config({path: "../server/.env"});

//create env file and import it
// const { CLIENT_ID,CLIENT_SECRET } = process.env;

const Login=()=> {

  const [user, setUser] = useState({})

  const handlecallback = (response)=>{
  //  console.log("Encode token" + response.credential)
   const userObj = jwt_decode(response.credential)
   console.log(userObj)
  //  console.log("test")
    setUser(userObj)
    document.getElementById("signInDiv").hidden=true;
  }

  const handleSignout = ()=>{
    setUser({});
    document.getElementById("signInDiv").hidden=false;
  }
  useEffect(()=>{ 
    /* global google */
    google.accounts.id.initialize({
      client_id: "474484987872-8j83f3q0uaqh30ml2tke3rhqujbnr4v8.apps.googleusercontent.com",
      callback: handlecallback
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )

  },[])


  return (
    
    <Wrapper className='App'>
      <div id="signInDiv"></div>

      <Div1>
      {Object.keys(user).length !==0 &&
       <button onClick={(e)=>handleSignout(e)}>Sign Out</button>
      }
      </Div1>
      
      
      {user &&
        <div>
          {/* add ? for optional chaining */}
          {/* <img src={user?.picture} alt="no img"></img> */}

          <img src={user?.picture} width="80" alt=""></img>
          <h3>{user.name}</h3>

          {/* {(user.name !==null)? (<CommentForm user = {user.name} email={user.email}/>): null} */}

        </div>
      }
       {user.name &&
        <div>
            <CommentForm user = {user.name} email={user.email}/>

        </div>
      }

    </Wrapper>          
  );
}

export default Login;

const Wrapper = styled.div`
margin-left: 5px;
`
const Div1 = styled.div`
margin-bottom: 5px;
`
