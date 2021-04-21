import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {
    loadUserProperties
} from "./orchestrator/userData.js"

const app = express();

//middlewares
app.use(bodyParser.json());
app.use(cors());


app.post("/signin", ({body:{username,password}},res)=>{
    let adminUsername = "root";
    let adminPassword = "admin";
    if(username===adminUsername && password === adminPassword){
        res.send("Authentication Successful");
    }
    else{
        res.send("Authentication Failed");
    }
})

app.get("/users", (req, res)=>{
   const userProperties = loadUserProperties();
   res.send(userProperties);
})



app.listen(5000,()=>{
    console.log("Listening on port 5000")
});