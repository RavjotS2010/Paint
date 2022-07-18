var mouseEvent="Empty";

canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color= "red";
width=2;

canvas.addEventListener("mousedown",my_MouseDown);

function my_MouseDown(e) {
    color= document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent= "mouseDown";
}

canvas.addEventListener("mousemove",my_Mousemove);

function my_Mousemove(e) {
    var current_postion_of_mouse_x= e.clientX- canvas.offsetLeft;
    var current_postion_of_mouse_y= e.clientY- canvas.offsetTop;
    
    if(mouseEvent== "mouseDown") {

        console.log("Current postion of x and y coordinates =");
        console.log("X="+current_postion_of_mouse_x+",Y=" + current_postion_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_postion_of_mouse_x,current_postion_of_mouse_y, radius ,0 , 2* Math.PI);

        ctx.stroke();
    }
}   




canvas.addEventListener("mouseup",my_Mouseup);

function my_Mouseup(e) {
    mouseEvent = "mouseup"
}

canvas.addEventListener("mouseLeave",my_MouseLeave);

function my_MouseLeave(e) {
    mouseEvent = "MouseLeave"
}


function clear_area() {
    ctx.clearRect(0,0,canvas.width, canvas.height);

}