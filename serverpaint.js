const express = require('express');
const ejs = require('ejs');

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index.ejs',{nbr:"", result:""});
})



//demarre le serveur web sur le port 3000
let server = app.listen(3000, function () {
    console.log('Paint app listening on port 3000!');
})

const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log('New user connected')
    //socket.username = 'Anonymous'
    
    socket.on('mouse_draw', (data) => {
        socket.mouse = data
        //console.log(socket.mouse)
        io.sockets.emit('draw_all',{
            alldraw: socket.mouse
        })
    })
    
    socket.on('reset', (data) => {
        //console.log(data)
        io.sockets.emit('clearcanvas',{
            message: "clear"
        })
    })
})
