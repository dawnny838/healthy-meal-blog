"use strict";

// import the needed node_modules.
const express = require("express");
const morgan = require("morgan");
const app = express();

const {
   
  getRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
  updateRecipe,

  getComments,
  getComment,
  addComment,
  deleteComment,
  updateComment,

 
  getUsers,
  getUser,
  addUser,
} = require("./handlers");

// express()
    // Below are methods that are included in express(). We chain them for convenience.
    // --------------------------------------------------------------------------------

    // This will give us will log more info to the console. see https://www.npmjs.com/package/morgan
    app.use(morgan("tiny"))
    app.use(express.json())

    // Any requests for static files will go into the public folder
    app.use(express.static("public"))

    // Nothing to modify above this line
    // ---------------------------------
    
   app.get("/api/get-recipes", getRecipes) //all 
    .get("/api/get-recipe/:id", getRecipe) //get one
    .post("/api/add-recipe", addRecipe)
    .patch("/api/update-recipe", updateRecipe)
    .delete("/api/delete-recipe/:id", deleteRecipe)

    .get("/api/get-comments", getComments)
    .get("/api/get-comment/:id", getComment)
    .post("/api/add-comment", addComment)
    .patch("/api/update-comment/:id", updateComment)
    .delete("/api/delete-comment/:id", deleteComment)

    .get("/api/get-users", getUsers)
    .get("/api/get-user/:id", getUser)
    .post("/api/add-user", addUser)
    // .delete("/api/update-user/:id", updateUser)

    // ---------------------------------
    // Nothing to modify below this line

    // this is our catch all endpoint.
    .get("*", (req, res) => {
        res.status(404).json({
        status: 404,
        message: "This is obviously not what you are looking for.",
        });
    })

    // Node spins up our server and sets it to listen on port 8000.
    .listen(8000, () => console.log(`Listening on port 8000`));


// // 
// const express = require('express')
// const app = express()
// const port = 8000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
// // 
// app.listen(port, () => {
//   console.log(`Listening on port ${port}`)
// })

// //
