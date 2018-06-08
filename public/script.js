//(function () {

var sendReset = document.getElementById("reset");
<<<<<<< HEAD
var socket = io() //.connect('http://localhost:3000')
=======
var socket = io().connect()
>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e
var userdraw = {};
//var sendReset;
var usercolor_input = document.getElementById('user_color');
var usercolor = usercolor_input.value;

<<<<<<< HEAD
=======
// var circle
var circle = document.getElementById('circle');
var square = document.getElementById('square');
var ovale = document.getElementById('ovale');
var tri = document.getElementById('tri');
var big_star = document.getElementById('big_star');
var small_star = document.getElementById('small_star');
var shape = "line";

>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e

function setup() {
    createCanvas(710, 400);
    background(102);
    //frameRate(5);
}

function draw() {
    stroke(255);
<<<<<<< HEAD
=======

>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e
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
<<<<<<< HEAD
=======

>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e
        //if (userdraw.mX != userdraw.pmX && userdraw.mY != userdraw.pmY) {
            socket.emit('mouse_draw', userdraw)
        //}
        //console.log(userdraw)

    }
    socket.on('draw_all', function (data) {
        //console.log(data.alldraw.mX);
<<<<<<< HEAD
        stroke(data.alldraw.usercolor);
        line(data.alldraw.mX, data.alldraw.mY, data.alldraw.pmX, data.alldraw.pmY)
=======
        
        switch(shape) {
            case 'line' : stroke(data.alldraw.usercolor);
                            line(data.alldraw.mX, data.alldraw.mY, data.alldraw.pmX, data.alldraw.pmY);
                            break;

            case 'circle' : noStroke();
                            fill(data.alldraw.usercolor);
                            ellipse(data.alldraw.mX, data.alldraw.mY, 40, 40);
                            break;

            case 'square' : noStroke();
                            fill(data.alldraw.usercolor);
                            rect(data.alldraw.mX, data.alldraw.mY, 40, 40);
                            break;

            case 'ovale': noStroke();
                            fill(data.alldraw.usercolor);
                            ellipse(data.alldraw.mX, data.alldraw.mY, 50, 30);
                            break;

            case 'tri': noStroke();
                            fill(data.alldraw.usercolor);
                            triangle(data.alldraw.mX, data.alldraw.mY+Math.sqrt(675)*2/3,data.alldraw.mX-15, data.alldraw.mY-10,data.alldraw.mX+15, data.alldraw.mY-10);
                            break;

            case 'big_star' :
                            noStroke();
                            fill(data.alldraw.usercolor);
                            star(data.alldraw.mX, data.alldraw.mY, 100, 60, 12); 
                            break;

            case 'small_star' :
                            noStroke();
                            fill(data.alldraw.usercolor);
                            star(data.alldraw.mX, data.alldraw.mY, 30, 70, 5); 
                            break;

        }

>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e
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

<<<<<<< HEAD
=======
// shapes
circle.addEventListener('click', function (event){
    shape="circle";
})

square.addEventListener('click', function (event){
    shape="square";
})

ovale.addEventListener('click', function (event){
    shape="ovale";
})

tri.addEventListener('click', function (event){
    shape="tri";
})

big_star.addEventListener('click', function (event){
    shape="big_star";
})

small_star.addEventListener('click', function (event){
    shape="small_star";
})



// création d'étoile 

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


>>>>>>> 5b0a219849796370c83465d5ec71b0dd80e09c8e
//setup();
//draw();

//})();
