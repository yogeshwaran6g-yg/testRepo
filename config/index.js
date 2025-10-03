require('dotenv').config({path:'./.env'})

let HOST = process.env.HOST
let env = process.env.NODE_ENV==="development"?"development" : "production";

module.exports = {

        
        env,
        db:{
            HOST,
            USERNAME : "root",
            PASSWORD : "pass1234",
            DB_NAME  : "my_web_app"
        },

    
    }