function preload(){

}

function setup(){
    canvas=createCanvas(400,400);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video, 35, 35, 300, 300);
    fill("red");
    circle(35,30,50);
    circle(350,350,50);
    circle(350,30,50);
    circle(35,350,50);
    fill("green");
    rect(60,337,267,25);
    rect(60,16,267,25);
    rect(24,56,25,267);
    rect(337,56,25,267);
}

function take_snapshot(){
    save('student_name.png');
}