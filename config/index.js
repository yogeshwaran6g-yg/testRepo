require('dotenv').config({path:'./.env'})



let HOST = process.env.HOST
let env = process.env.NODE_ENV==="development"?"development" : "production";


let config = {
    env,
    db:{
        HOST,
        USERNAME : "root",
        PASSWORD : "pass1234",

    }



    
}








module.exports = {
    config
}