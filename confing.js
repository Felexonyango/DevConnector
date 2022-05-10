var dotenv =require('dotenv');
dotenv.config()
require('process')

 var config ={}; 

 config.DB=""+process.env.DB,
 config.JWT_SECRETE=""+process.env.JWT_SECRETE,
config.githubClientId=""+process.env.githubClientId,
config.githubSecret=""+process.env.githubSecret,
config.PASSWORD=""+process.env.PASSWORD,
config.CLIENT_ID=""+process.env.CLIENT_ID,
config.CLIENT_SECERETE=""+ process.env.CLIENT_SECERETE,
 module.exports =config
