//(function () {

var sendReset = document.getElementById("reset");
var socket = io() //.connect('http://localhost:3000')
var userdraw = {};
//var sendReset;
var usercolor_input = document.getElementById('user_color');
var usercolor = usercolor_input.value;


function setup() {
    createCanvas(710, 400);
    background(102);
    //frameRate(5);
}

function draw() {
    stroke(255);
    if (mouseIsPressed === true) {
        //line(mouseX, mouseY, pmouseX, pmouseY);
        //console.log(mouseX,mouseY)
        userdraw = {
            usercolor: usercolor,
            mX: mouseX,
            mY: mouseY,
            pmX: pmouseX,
            pmY: pmouseY,
        }
        //if (userdraw.mX != userdraw.pmX && userdraw.mY != userdraw.pmY) {
            socket.emit('mouse_draw', userdraw)
        //}
        //console.log(userdraw)

    }
    socket.on('draw_all', function (data) {
        //console.log(data.alldraw.mX);
        stroke(data.alldraw.usercolor);
        line(data.alldraw.mX, data.alldraw.mY, data.alldraw.pmX, data.alldraw.pmY)
    })

    socket.on('clearcanvas', function () {
        background(102);
    })
}
//console.log(sendReset)
sendReset.addEventListener('click', function (event) {
    //console.log("button click ok")
    socket.emit('reset', {
        message: "reset"
    })
})

usercolor_input.addEventListener("input", function() {

   usercolor = usercolor_input.value;
    //console.log(usercolor)

    }, false);

//setup();
//draw();

//})();
