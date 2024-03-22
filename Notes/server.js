const express = require('express');
const app = express();
const ejs = require('ejs');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send("yo");
});

app.get('/lol/:param1/:param2', (req, res) => {
    const params = req.params;
    res.render('index', { param1: params.param1, param2: params.param2 });
});
app.get('/hello', (req,res)=>{
    res.sendFile(__dirname + '/public/hello.html');
})

const middleFn = (req, res, next) => {
    req.params.name = capitalize(req.params.name);
    next(); 
};

app.get('/middleware/:name/:username', middleFn, (req, res) => {
    const params = req.params;
    const query = req.query;
    res.render('middleware', { name: params.name, username: params.username , query: query});
});


const capitalize = (str) => {
    return str.toUpperCase();
    
};
const middle1 = (req, res, next) => {
    console.log("You entered middleware 1");
    next();
}

const middle2 = (req, res, next) => {
    console.log("You entered middleware 2");
    next();
}

app.get('/me', middle1, middle2, (req, res) => {
    res.send("middleware chaining");
});

const PORT = 6001;

app.listen(PORT, () => {
    console.log(`Server up and running at ${PORT}`);
});
