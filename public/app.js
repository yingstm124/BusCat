 var checkBox = document.getElementById("checkbox");
var field = document.getElementById("field");
var road = document.getElementById("road");
var body = document.getElementsByTagName("body")[0];
var sunmoon = document.getElementById("sun-moon");
var cloud = document.getElementById("cloud");
var bird = document.getElementById("bird");
    
var car = document.getElementById("car");
var legs = document.getElementById("legs");
var eyes = document.getElementsByClassName("headlight");


var wheel = document.getElementById("wheel");
var wheel_front_left = document.getElementById("wf_left");
var wheel_front_right = document.getElementById("wf_right");
var wheel_back_left = document.getElementById("wb_left");
var wheel_back_right = document.getElementById("wb_right");

var eyeleft = document.getElementById("eyeleft");
var eyeright = document.getElementById("eyeright");

var legsfront = document.getElementById("legs-front");

var sign = document.getElementById("sign");
var smile = document.getElementById("smile");


var lineCat1 = document.getElementById("lineCat1");
var lineCat2 = document.getElementById("lineCat2");
var lineCat3 = document.getElementById("lineCat3");
var lineCat4 = document.getElementById("lineCat4");

var window1 = document.getElementById("window1");
var window2 = document.getElementById("window2");
var window3 = document.getElementById("window3");
var window4 = document.getElementById("window4");
var window5 = document.getElementById("window5");
var window6 = document.getElementById("window6");
var window7 = document.getElementById("window7");
var window8 = document.getElementById("window8");
var window9 = document.getElementById("window9");

function setTime(){
    var date = new Date();

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    document.getElementById('clock-item').innerHTML = `${hour} : ${min} : ${sec}`;
}


function swap(){
    // night mode
    if(checkBox.checked == true){
        console.log("checked!");
        field.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2F5e9ddddda4495.png?alt=media&token=c64d70ca-f956-4e4a-80d4-f3198237b5b5')";
        road.style.backgroundColor = "black";
        body.style.backgroundColor = "rgb(12, 15, 15)";
        body.style.color = "#ffffff";
        sunmoon.style.backgroundImage = "linear-gradient(rgb(250, 243, 202),rgb(187, 176, 167))";
        cloud.style.background = "rgb(86, 91, 107)";
        bird.style.display = "none";
        
        sign.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2Fnight.jpg?alt=media&token=80b8a992-ec6c-461b-b861-fff91499b613')";      
        smile.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2FUntitled_Artwork%203.png?alt=media&token=6a35c115-2389-4b17-88e0-be603600f204')";    
        openEyes();
        takeOff();        

    }
    // day mode
    else{
        console.log("not checked!");
        field.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2Flol.png?alt=media&token=e3c5de14-d007-4b7f-bcc7-9df80427e91c')";
        road.style.backgroundColor = "#C5D728";
        body.style.backgroundColor = "rgb(175, 228, 243)";
        body.style.color = "black";
        cloud.style.background = "rgb(255, 255, 255)";
        bird.style.display = "block";
        sunmoon.style.backgroundImage = "linear-gradient(rgb(255, 220, 24),rgb(240, 147, 60))";
        
        sign.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2Fday.jpg?alt=media&token=5f720cb6-41a7-4f44-ae05-75f9689db07f')";      
        smile.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/comicstore-bec18.appspot.com/o/%E0%B8%9D%E0%B8%B2%E0%B8%81%E0%B8%A3%E0%B8%B9%E0%B8%9B%2FUntitled_Artwork%202.png?alt=media&token=9021a321-961e-48a4-9f38-f991fed18de3')";
        changeWinColor('rgb(206, 210, 212)');
        landding();

    }
}

function landding(){
    car.style.transform = "translate(0px, 300px) translateZ(0px) rotateX(0deg) rotateZ(0deg)";
    var sec = 0; 
    var id = setInterval(function() {AnimWheel()}, 100);
    
    function AnimWheel(){ 
        
        // 25%
        if(sec <= 30){
            closeLegs();
            wheel_front_left.style.transform = "translate(0px, 30px) translateZ(-70px) rotateX(90deg)";
            wheel_front_right.style.transform = "translate(150px, 30px) translateZ(-70px) rotateX(-90deg)";
            wheel_back_left.style.transform = "translate(0px, 30px) translateZ(-240px) rotateX(90deg)";
            wheel_back_right.style.transform = "translate(150px, 30px) translateZ(-240px) rotateX(-90deg) ";
            
        }
        // 50%
        else if(sec <= 50){
            wheel_front_left.style.transform = "translate(-80px, 15px) translateZ(-70px) rotateX(90deg)";
            wheel_front_right.style.transform = " translate(150px, 15px) translateZ(-70px) rotateX(-90deg) rotateY(0deg)";
            wheel_back_left.style.transform = "translate(-80px, 15px) translateZ(-240px) rotateX(90deg)";
            wheel_back_right.style.transform = "translate(150px, 15px) translateZ(-240px) rotateX(-90deg) rotateY(0deg)";
        }
        // 100%
        else if(sec <= 70){
            wheel_front_left.style.transform = "translate(-30px, 10px) translateZ(-70px) rotateX(0deg) rotateY(90deg)";
            wheel_front_right.style.transform = "translate(100px, 10px) translateZ(-70px) rotateX(-90deg) rotateY(90deg)";
            wheel_back_left.style.transform = "translate(-30px, 10px) translateZ(-240px) rotateX(0deg) rotateY(90deg)";
            wheel_back_right.style.transform = "translate(100px, 10px) translateZ(-240px) rotateX(-90deg) rotateY(90deg)";
            
        }
        else if(sec <= 90) {
            closeEyes();
            clearInterval(id);
        }
        sec += 10;
        console.log("test " ,sec);     
    }

}

function changeWinColor(color){

    window1.style.backgroundColor = color;
    window2.style.backgroundColor = color;
    window3.style.backgroundColor = color;
    window4.style.backgroundColor = color;
    window5.style.backgroundColor = color;
    window6.style.backgroundColor = color;
    window7.style.backgroundColor = color;
    window8.style.backgroundColor = color;
    window9.style.backgroundColor = color;
    
}



function takeOff(){
    
    car.style.transform = "translate(-100px, 0px) translateZ(-400px) rotateX(-10deg) rotateZ(2deg)";
    var sec = 0; 
    var id = setInterval(function() {AnimWheel()}, 100);

    function AnimWheel(){ 
    
        // 25%
        if(sec <= 30){
            wheel_front_left.style.transform = "translate(-30px, 30px) translateZ(-70px) rotateX(90deg) rotateY(90deg)";
            wheel_front_right.style.transform = "translate(100px, 30px) translateZ(-70px) rotateX(-90deg) rotateY(0deg)";
            wheel_back_left.style.transform = "translate(-30px, 30px) translateZ(-240px) rotateX(90deg) rotateY(90deg)";
            wheel_back_right.style.transform = "translate(100px, 30px) translateZ(-240px) rotateX(-90deg) rotateY(0deg)";
        }
        // 50%
        else if(sec <= 50){
            wheel_front_left.style.transform = "translate(-80px, 15px) translateZ(-70px) rotateX(90deg)";
            wheel_front_right.style.transform = " translate(150px, 15px) translateZ(-70px) rotateX(-90deg) rotateY(0deg)";
            wheel_back_left.style.transform = "translate(-80px, 15px) translateZ(-240px) rotateX(90deg)";
            wheel_back_right.style.transform = "translate(150px, 15px) translateZ(-240px) rotateX(-90deg) rotateY(0deg)";
        }
        // 100%
        else if(sec <= 70){
            wheel_front_left.style.transform = "translate(30px, 15px) translateZ(-70px) rotateX(90deg)";
            wheel_front_right.style.transform = "translate(50px, 15px) translateZ(-70px) rotateX(-90deg)";
            wheel_back_left.style.transform = "translate(30px, 15px) translateZ(-240px) rotateX(90deg)";
            wheel_back_right.style.transform = "translate(50px, 15px) translateZ(-240px) rotateX(-90deg) rotateY(0deg)";    
        }
        else if(sec <= 90){
            openLegs();
            stayOnSky();
            clearInterval(id);
        }
        sec += 10;
        console.log("test " ,sec);     
    }

}

function stayOnSky(){
    id = setInterval(function() {onsky()}, 300);
    sec = 0;
    function onsky(){
        if(checkBox.checked == false){
            clearInterval(id);
            
        }
        else{
            if(sec <= 2){
                car.style.transform = "translate(-100px, 10px) translateZ(-400px) rotateX(-5deg) rotateZ(2deg)";
                changeWinColor('black');
                movesmile('18px');
            }
            else if(sec <= 4){
                car.style.transform = "translate(-100px, 0px) translateZ(-400px) rotateX(-5deg) rotateZ(2deg)";
                changeWinColor('rgb(238, 205, 56)');
                movesmile('18px');
            }
            else if(sec <= 6){
                car.style.transform = "translate(-100px, 10px) translateZ(-400px) rotateX(-5deg) rotateZ(2deg)";
                changeWinColor('rgb(255, 233, 37)');
                movesmile('18px');
            }
            else if(sec <= 10) {
                car.style.transform = "translate(-100px, 10px) translateZ(-400px) rotateX(-5deg) rotateZ(2deg)";
                changeWinColor('rgb(238, 205, 56)');
                movesmile('8px');
            }
            else {
                sec = 0;
            }
            sec += 1;
            console.log(sec);
        }
        
    }
}

function movesmile(w){
    smile.style.height = w;
}

function openEyes(){

    eyeleft.style.width = "4px";
    eyeleft.style.height = "10px";
    eyeleft.style.transform = "translate(10px, 5px) rotateZ(0deg)";
    eyeleft.style.animation = "moveeyesleft 8s linear infinite";

    eyeright.style.width = "4px";
    eyeright.style.height = "10px";
    eyeright.style.transform = "translate(10px, 5px) rotateZ(0deg)";
    eyeright.style.animation = "moveeyesright 8s linear infinite";
}

function closeEyes(){
    eyeleft.style.height = "20px";
    eyeleft.style.transform = "translate(10px, 0px) rotateZ(-90deg)";
    eyeleft.style.animation = "none";

    eyeright.style.height = "20px";
    eyeright.style.transform = "translate(100px, 0px) rotateZ(-90deg)";
    eyeright.style.animation = "none";
}

function openLegs(){
    legs.style.animation = "displayLegs 2s linear infinite";
    legs.style.display = "inline-block";
}

function closeLegs(){
    legs.style.display = "none";
}


function main (){
    var t = setInterval(function() {setTime()}, 1000);
}



main();