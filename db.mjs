import mysql from "mysql2";

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"db_26"
});
db.connect((err)=>{
    if(err){
        console.error("couldnot connect",err);
    }else{
        console.log("connected successfully");
    }
});

export default db;