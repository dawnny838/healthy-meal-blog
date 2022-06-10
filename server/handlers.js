"use strict";
const { MongoClient } = require("mongodb");
const path = require("path");
require("dotenv").config({path: "./.env"});


//create env file and import it
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// to generate unique ids:
const { v4: uuidv4 } = require("uuid");



//----------------------------------------------------------------
const addRecipe = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");

        const {number, type, name, img, ingredient, instruction} = request.body;

        const id = uuidv4()

        const result = await db.collection("recipes").insertOne({id: id,  number, type, name, img, ingredient, instruction})

        
        // const query = { flight: flight, "seats.id": seat };
        // const newSeatValues = { $set: {"seats.$.isAvailable": false} };
        // const bookedSeat = await db.collection("flights").updateOne(query, newSeatValues);
        
        if(result){
            response.status(201).json({
                status: 201,
                id,
                message: "recipe added"
            })

        }else{
            response.status(400).json({
                status: 400,
                message: "recipe not added"
            })
        }
        client.close();
        console.log("addRecipe disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getRecipes = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");
        const result = await db.collection("recipes").find().toArray();
        // console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "recipe found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "recipe not found"
            })
        }
        client.close();
        console.log("getRecipe disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getIngredients = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");
        const result = await db.collection("ingredients").find().toArray();
        // console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "ingredient found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "ingredient not found"
            })
        }
        client.close();
        console.log("getIngredients disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};
//----------------------------------------------------------------
const getRecipe = async(request, response) => {
    const client = new MongoClient(MONGO_URI, options);
    
    const id = request.params.id;
    
    try{
        await client.connect();
        const db = client.db("healthblog");
        // change find to findOne, to avoid to toArray
        const result = await db.collection("recipes").findOne({id: id});
        // console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                id,
                data: result,
                message: "recipe id found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "recipe id not found"
            })
        }
        client.close();
        console.log("getRecipe disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const deleteRecipe = async(request, response) => {

    const client = new MongoClient(MONGO_URI, options);
    
    const id = request.params.id;

    try{
        await client.connect();
        const db = client.db("healthblog");

        //grab the target
        const findRecipe = await db.collection("recipes").findOne({id});
        console.log("findRecipe", findRecipe)

        //updated
        // const queryOldSeat = { flight: findOldSeat.flight, "seats.id": findOldSeat.seat };
        // const oldSeatValues = { $set: {"seats.$.isAvailable":true} };
        // const releaseSeat = await db.collection("flights").updateOne(queryOldSeat, oldSeatValues);
        // console.log("oldSeatValues ", oldSeatValues)
        // console.log("releaseSeat", releaseSeat)

        //find reservation id and deleted
        const result = await db.collection("recipes").deleteOne({id});
        console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "recipe deleted"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "recipe not deleted"
            })
        }
        client.close();
        console.log("deleteRecipe disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------

const updateRecipe = async (request, response) => {

    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");

        //updated 
        const {id, effect, ingredient, instruction, timing } = request.body;
        const queryid = { id };
        const newValues = { $set: {effect:effect, ingredient:ingredient, instruction:instruction, timing:timing} };

        //grab the 
        // 
        const findRecipe = await db.collection("recipes").findOne({id});
        console.log("findRecipe", findRecipe)

        //updated the
        const updatedRecipe = await db.collection("recipes").updateOne(findRecipe, newValues);
        console.log("updatedRecipe2", updatedRecipe)    
        
        if( updatedRecipe.modifiedCount==1){
            response.status(200).json({
                status: 200,
                updatedRecipe,
                message: "recipe updated"
            })
        
        }else{
            response.status(400).json({
                status: 400,
                message: "wrong information"
            })
        }
        client.close();
        console.log("updateRecipe disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};
// --------
//----------------------------------------------------------------
const addComment = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");

        const {user,email, comment} = request.body;

        const id = uuidv4()

        const result = await db.collection("comments").insertOne({id: id, user,email,comment}) 
       
        if(result){
            response.status(201).json({
                status: 201,
                id,
                message: "comment added"
            })

        }else{
            response.status(400).json({
                status: 400,
                message: "comment not added"
            })
        }
        client.close();
        console.log("addComment disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getComments = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");
        const result = await db.collection("comments").find().toArray();
        console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "comment found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "comment not found"
            })
        }
        client.close();
        console.log("getComment disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getComment= async(request, response) => {
    const client = new MongoClient(MONGO_URI, options);
    
    const id = request.params.id;
    
    try{
        await client.connect();
        const db = client.db("healthblog");
        // change find to findOne, to avoid to toArray
        const result = await db.collection("comments").findOne({id: id});
        // console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                id,
                data: result,
                message: "comment id found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "comment id not found"
            })
        }
        client.close();
        console.log("getcomment disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const deleteComment = async(request, response) => {

    const client = new MongoClient(MONGO_URI, options);
    
    const id = request.params.id;

    try{
        await client.connect();
        const db = client.db("healthblog");

        //grab the target
        const findRecipe = await db.collection("comments").findOne({id});
        console.log("findComment", findComment)

        //find  id and deleted
        const result = await db.collection("comments").deleteOne({id});
        console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "comment deleted"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "comment not deleted"
            })
        }
        client.close();
        console.log("deletecommente disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------

const updateComment = async (request, response) => {

    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");

        //updated 
        const {id, comment} = request.body;
        const queryid = { id };
        const newValues = { $set: {comment:comment} };

        //grab the 
        // 
        const findComment = await db.collection("comments").findOne({id});
        console.log("findComment", findComment)

        //updated the
        const updatedComment = await db.collection("comment").updateOne(findComment, newValues);
        console.log("updatedcomment", updatedComment)

        
       

       
        
        if( updatedComment.modifiedCount==1){
            response.status(200).json({
                status: 200,
                updatedRecipe,
                message: "recipe updated"
            })
        
        }else{
            response.status(400).json({
                status: 400,
                message: "wrong information"
            })
        }
        client.close();
        console.log("updatecomment disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
}

// --------
//----------------------------------------------------------------
const addUser = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");

        const {userName, email, role} = request.body;

        const id = uuidv4()

        const result = await db.collection("users").insertOne({id: id, userName, email}) 
       
        if(result){
            response.status(201).json({
                status: 201,
                id,
                message: "user added"
            })

        }else{
            response.status(400).json({
                status: 400,
                message: "user not added"
            })
        }
        client.close();
        console.log("addUser disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getUsers = async (request, response) => {
    const client = new MongoClient(MONGO_URI, options);

    try{
        await client.connect();
        const db = client.db("healthblog");
        const result = await db.collection("users").find().toArray();
        console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                data: result,
                message: "user found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "user not found"
            })
        }
        client.close();
        console.log("getUser disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------
const getUser= async(request, response) => {
    const client = new MongoClient(MONGO_URI, options);
    
    const id = request.params.id;
    
    try{
        await client.connect();
        const db = client.db("healthblog");
        // change find to findOne, to avoid to toArray
        const result = await db.collection("users").findOne({id: id});
        // console.log("result", result)

        if(result){
            response.status(200).json({
                status: 200,
                id,
                data: result,
                message: "user found"
            })
        }else{
            response.status(404).json({
                status: 404,
                message: "usernot found"
            })
        }
        client.close();
        console.log("getUser disconnected!");
    }
    catch(err){
        console.log(err.stack);
    }
};

//----------------------------------------------------------------

module.exports = {
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

    getIngredients
   
};
