const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.ejs',{nbr:"", result:""});
})



//demarre le serveur web sur le port 3000
app.listen(3000, function () {
    console.log('Paint app listening on port 3000!');
})