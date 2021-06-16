canvas=document.getElementById("mycanvas");

ctx=canvas.getContext("2d");

car_width = 200;
car_height =100;

background_img = "images.jpg";
car1_img = "lambo.png";
car2_img = "terrorist.jpg";

car1_x = 10;
car1_y = 10;

car2_x = 10;
car2_y = 10;


function add() {

    background_imgtag = new Image();
    background_imgtag.onload= uploadbackground;
    background_imgtag.src= background_img;

    car1_imgtag = new Image();
    car1_imgtag.onload= uploadcar1;
    car1_imgtag.src= car1_img;

    car2_imgtag = new Image();
    car2_imgtag.onload= uploadcar2;
    car2_imgtag.src= car2_img;
}

function  uploadbackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function  uploadcar1() {
    ctx.drawImage(car1_imgtag,car1_x,car1_y,car_width,car_height);
}

function  uploadcar2() {
    ctx.drawImage(car2_imgtag,car2_x,car2_y,car_width,car_height);
}



window.addEventListener("keydown",my_keydown);

function my_keydown(e){

keyPressed=e.keyCode;
console.log(keyPressed);

if(keyPressed=="38"){
    up();
    console.log("up");
}

if(keyPressed=="40"){
    down();
    console.log("down");
}

if(keyPressed=="37"){
    left();
    console.log("left");
}

if(keyPressed=="39"){
    right();
    console.log("right");
}
}
function up()
{
    if(car1_y>=0){
     car1_y-=10;
     console.log("when up arrow is pressed ="+ car1_x + "-"+ car1_y);
     uploadbackground();
         uploadcar1();
     
    }
}

function down()
{
    if(car1_y<=500){
     car1_y+=10;
     console.log("when down arrow is pressed ="+ car1_x + "| y"+car1_y);
     uploadbackground();
         uploadcar1();
     
    }
}

function right()
{
    if(car1_x<=700){
     car1_x+=10;
     console.log("when right arrow is pressed ="+ car1_x + "-"+car1_y);
     uploadbackground();
         uploadcar1();
     
    }
}

function left()
{
    if(car1_x>=0){
     car1_x-=10;
     console.log("when left arrow is pressed ="+ car1_x + "| y"+car1_y);
     uploadbackground();
         uploadcar1();
     
    }
}

function up()
{
    if(car2_y>=0){
     car2_y-=10;
     console.log("when up arrow is pressed ="+ car2_x + "-"+ car2_y);
     uploadbackground();
         uploadcar2();
     
    }
}

function down()
{
    if(car2_y<=500){
     car2_y+=10;
     console.log("when down arrow is pressed ="+ car2_x + "| y"+car2_y);
     uploadbackground();
         uploadcar2();
     
    }
}

function right()
{
    if(car2_x<=700){
     car2_x+=10;
     console.log("when right arrow is pressed ="+ car2_x + "-"+car2_y);
     uploadbackground();
         uploadcar2();
     
    }
}

function left()
{
    if(car2_x>=0){
     car2_x-=10;
     console.log("when left arrow is pressed ="+ car2_x + "| y"+car2_y);
     uploadbackground();
         uploadcar2();
     
    }
}