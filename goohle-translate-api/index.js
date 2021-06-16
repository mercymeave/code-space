// bring in express
const express = require('express');

// brinrg in body parser
const bodyParser = require('body-parser');

// ejs template engine
const ejs = require('ejs');

// translate api
const translate = require('@vitalets/google-translate-api');

//init our application 
const app = express()

//setup template engine
app.set('view-engine', 'html');
app.engine('html', ejs.renderFile);

//public folder setup
app.use(express.static(__dirname + '/public'));

//body parser middleware
app.use(express.urlencoded({extended:true}));

//index route
app.get('/', (req, res) =>{
    res.render('index.ejs');
});

// post the form data to post routw
app.post('/translate', (req, res) => {  
    // get form data from the request body 
    const text = req.body.text
    const language = req.body.language
    translate(text, {to: language}).then(response => {
       res.render('index.ejs', {translatedText:response.text})
    }).catch(err => {
        console.error(err);
    });
})

// Port varibale
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`App runnning on port ${PORT}`)
})
