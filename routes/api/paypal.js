const express = require("express");
const router =express.Router()
const User = require("../../models/User");
const config =require('../../confing')
const paypal =require('paypal-rest-sdk');
const Pay =require('../../models/paypal')
const auth =require('../../middleware/auth')
var PAYPAL_API = 'https://api-m.sandbox.paypal.com';
paypal.configure({
    'host': PAYPAL_API, //sandbox or live //add your own credentials
    'client_id': config.CLIENT_ID,
    'client_secret': config.CLIENT_SECERETE
});


router.post('/Payment',  async(req, res)=>{
    try{
       // const user = await User.findById(req.user.id).select("-password");

      const pay = new  Pay({
    
        amount:req.body.amount,
      
      
      });
      await pay.save()
    //setting up a json with all the payment details
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:5000/executepay/",
            "cancel_url": "http://localhost:5000/cancelPayment/"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Devconnector",
                    "item": "project",
                    "price": pay.amount,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": pay.amount
            },
            "description": "This is the payment description."
        }]
    };
    

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            
            res.send(payment);
        };
    });
}
catch(error){
    console.log(error)
    res.status(500).send("Server Error");
}
});

//execute payment after redirect
router.get('/success', auth, async(req, res)=>{
try{


      const user = await User.findById(req.user.id).select("-password");

       const pay = new  Pay({
        amount:req.body.amount,
        user: user.id
      
      });

    var payment_Id = req.query.paymentId;
    var payer_id = req.query.PayerID;
    var execute_payment_json = {
        "payer_id": payer_id,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": pay.amount
            }
        }]
    };
    
    paypal.payment.execute(payment_Id, execute_payment_json, function (error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
           
            res.send(payment);
        }
    });
}
catch(error){
    console.log(error)
    res.status(500).send("Server Error");
}
});

router.get('/cancelPayment',auth, async(req, res)=>{
    try{
        res.send('Transaction cancelled');
    }
    catch(error){
        console.log(error)
        res.send('Transaction failed to be  cancelled');
    }

});
//create invoice 

router.post('/invoice',auth, async(req,res)=>{
  try{
    const user = await User.findById(req.user.id).select("-password");

    const pay = new  Pay({
    name:user.name,
     amount:req.body.amount,
     email:req.body.email,
     phone:req.body.phone,
     line1:req.body.line1,
     city:req.body.line1,
     state:req.body.state,
     postal_code:req.body.postal_code,
     country_code:req.body.email,
     user: user.id
   
   });
   await pay.save()
    var create_invoice_json = {
        "merchant_info": {
            "email": pay.email,
            "name": pay.name,
           
            "business_name": "Medical Professionals, LLC",
            "phone": {
                "country_code": pay.country_code,
                "national_number": pay.phone
            },
            "address": {
                "line1": pay.line1,
                "city": pay.city,
                "state": pay.state,
                "postal_code": pay.postal_code,
                "country_code": pay.country_code
            }
        },
        "billing_info": [{
            "email": pay.email
        }],
        "items": [{
            "name": user.name,
            "quantity": pay.quantity,
            "unit_price": {
                "currency": "USD",
                "value": "100.00"
            }
        }],
        "note": "Medical Invoice 16 Jul, 2013 PST",
        "payment_term": {
            "term_type": "NET_45"
        },
        "shipping_info": {
            "name": pay.name,
            
            "business_name": pay.business_name,
            "phone": {
                "country_code": pay.country_code,
                "national_number": pay.phone
            },
            "address": {
                "line1": pay.line1,
                "city": pay.city,
                "state": pay.state,
                "postal_code": pay.postal_code,
                "country_code":pay.country_code
            }
        },
        "tax_inclusive": false,
        "total_amount": {
            "currency": "USD",
            "value": "100.00"
        }
    };
    
    paypal.invoice.create(create_invoice_json, function (error, invoice) {
        if (error) {
            throw error;
        } else {
            res.send(invoice)
        }
    });
}
catch(error){
    console.log(error)
    res.status(200).send("server error")
}

})



   
module.exports=router