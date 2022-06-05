import {useEffect} from 'react';
// const { MongoClient } = require("mongodb");
// const path = require("path");
// require("dotenv").config({path: "../server/.env"});

//create env file and import it
// const { CLIENT_ID,CLIENT_SECRET } = process.env;

function App() {
  const handlecallback = (response)=>{
   console.log("Encode token" + response.credential)
  }
  useEffect(()=>{ 
    // global google
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
    <div className='App'>
      <div id="signInDiv"></div>


      
         <h1> React</h1>
      
    </div>
  );
}

export default App;
