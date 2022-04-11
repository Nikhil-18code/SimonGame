document.querySelector("body").addEventListener("click",function(){
  
})
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=false;
document.addEventListener("keypress",function(){
    if(!started){
        // document.querySelector("#level-title").innerHTML="Level "+level;
        nextSequence();
        started=true;
    }
})


for (let i = 0; i < buttonColors.length; i++) {
    
    document.querySelectorAll(".btn")[i].addEventListener("click",function(){
        var userChosenColor=(this.id);
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        animatePress(userChosenColor);
        checkAnswer(userClickedPattern.length-1);
    });   
}
function checkAnswer(e){
    if(gamePattern[e]===userClickedPattern[e]){
    //    console.log("success");
       if(userClickedPattern.length==gamePattern.length){
           setTimeout(function(){
               nextSequence();
           },1000);
       }
    }
    else{
        playSound("wrong");
        document.querySelector("body").classList.toggle("game-over");
        setTimeout(function(){
        document.querySelector("body").classList.toggle("game-over"); 
        document.querySelector("#level-title").innerHTML="Game Over,press any key to restart"; 
        },200)
        startOver();
        
}
}
function startOver(){
    gamePattern=[];
    started=false;
    level=0;
}
function nextSequence(){
    level++;
    userClickedPattern=[];
    document.querySelector("#level-title").innerHTML="Level "+level;
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    console.log(gamePattern);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColor){
    document.querySelector("."+currentColor).classList.toggle("pressed");
    setTimeout(function(){
        document.querySelector("."+currentColor).classList.toggle("pressed");
    },100);
}
