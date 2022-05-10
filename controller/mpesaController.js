require('dotenv').config();
const datetime = require('node-datetime');
const axios = require('axios');
const User =require("../models/User")
const { response } = require('express');
const auth = require('../middleware/auth');
const passKey = process.env.PASSKEY;
const shortCode = process.env.SHORTCODE;
const consumerKey = process.env.CONSUMER_KEY;
const consumerSecret = process.env.CONSUMER_SECRETE;

const mpesa = require('../models/mpesa');

const newPassword =  (req,res) => {
    const dt = datetime.create();
    const formarted = dt.format('YmdHMS');

    const passString = shortCode + passKey + formarted;

    const base64Encodedpassword = Buffer.from(passString).toString('base64');

    return base64Encodedpassword;
};

const mpesaPassword = (req,res) => {

    res.send(newPassword());

};

const token = (req,res,next) => {
  
    const url = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';

    const auth = 'Basic ' + Buffer.from(consumerKey + ':' + consumerSecret).toString('base64');
    const headers = {
        Authorization:auth,
    };
    
    axios
    .get(url,{
        headers:headers,
    })
    .then((response) => {
        let data =response.data;
        let access_token =data.access_token;
        req.token = access_token;
       
        next();

    })
    .catch((error) => console.log(error));

};

const stkPush =  async(req,res) => {
    try{
        const token = req.token;
        res.send(token);
        const dt = datetime.create();
        const formarted = dt.format('YmdHMS');
       
        const user = await User.findById(req.user.id).select("-password");

        const Mpesa = new mpesa({ 
        
            phone:req.body.phone,
            amount:req.body.amount,
            name: user.name,
             avatar: user.avatar,
            user: req.user.id
        })
       
        const headers = {
           Authorization: 'Bearer ' + token,
        };
       
        const stkUrl = 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest';
        const data = {
           BusinessShortCode:shortCode,
           Password: newPassword(),
           Timestamp:formarted,
           TransactionType: "CustomerPayBillOnline",
           Amount: Mpesa.amount,
           PartyA: Mpesa.phone,
           PartyB: 174379,
           PhoneNumber: Mpesa.phone,
           CallBackURL: "https://mydomain.com/path",
           AccountReference: "GAS STORE",
           TransactionDesc: "LIPA NA MPESA" 
         };
       
        const response= await  axios.post(stkUrl,data,{headers:headers})
       
        return response.data
    }
    catch(err){
        console.log(err)
        

    }
    
 
};

module.exports = {
    newPassword,
    mpesaPassword,
    token,
    stkPush,
    
   
};