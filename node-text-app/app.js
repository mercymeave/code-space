const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
const fetch = require("node-fetch");

//init out nexmo
const nexmo = new Nexmo({
    apiKey: '261e8ec0',
    apiSecret: 'QW2FpaQ2uYdzOmjq',
}, {debug:true});

//init out application 
const app = express()

//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/public'));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//index route
app.get('/', (request, response) =>{
    response.render('index.html');
});

//catch post from out main js
app.post('/', (request, response) =>{
    // response.send(request.body);
    // console.log(request.body)
    const phoneNumber = request.body.number;
    const textMessage = request.body.text;

    const from = 'Vonage APIs';
    const to = phoneNumber;
    const text =  textMessage;
    nexmo.message.sendSms(from, to, text, {type:'unicode'}, (error,responseData) =>{
        if(error){
            console.log(error)
        }else{
            console.dir(responseData);
            //get repsponse data
            const data = {
                id: responseData.messages[0]['message-id'],
                number: responseData.messages[0]['to']
            }
            //send to client
            io.emit('smsStatus', data);
        }
    });
});

//Port
const port = 3000;

//start server
const server = app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});

//connect to sockets
const io = socketio(server);
io.on('connection', (socket) =>{
    console.log('Connected'); 
    io.on('disconnect', () =>{
        console.log('Disconnected');
    })
});