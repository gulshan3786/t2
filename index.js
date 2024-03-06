import express from "express";
import db from "./db.mjs";
import router from "./route.mjs";

const app=express();
const port=3001;
app.set('view engine','ejs');
db.connect((err)=>{
    if(err){
        console.error("there is connection error",err)
    }else{
        console.log('database connected successfully');
        app.use("/",router);
        app.listen(port,(req,res)=>{
            console.log(`server is listening on ${port}`);
        });
    }
});
