const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//set the static path
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json())
const publicVapidKey = 'BB1hwvVLRa3fx56npRsQghzXs4gq9nMmEJHKtSoPSdlU98QD7CQL_6r9lGWlP_04bBes6Ef7OXy7sGoBMu0PPZc';
const privateVapidKey = 'QIna-gxRSFrqhgyIc6guABhQ60485M2waty-iGEHzK8';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey,privateVapidKey);

//subscribe route
app.post('/subscribe', (req, res)=>{
    //get push subscription object
    const subscription = req.body;

    //send status 201
    res.status(201).json({})

    //create paylod
    const payload = JSON.stringify({title: 'Node Js Push Notification' });

    //pass the object into sendNotification
    webpush.sendNotification(subscription, payload).catch(err=> console.error(err));
})

const port = 3000;
app.listen(port, ()=>{
    console.log(`server started on ${port}`)
});