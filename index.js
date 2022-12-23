var score1=[];
var score2=[];
var count=0;
var player1=1;
var player2=0;
var sum1=0;
var sum2=0;

document.querySelector("button").addEventListener("click",playing);
function playing(){
    playsound("mixkit-arcade-game-jump-coin-216");
    count++;
var random1=Math.floor(Math.random()*6)+1;

document.querySelectorAll("img")[0].setAttribute("src",random1+"l.jpg");
var random2=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src",random2+"r.jpg");

if(player1==1&&random1==random2){
    playsound("wrong");
  
    $("body").addClass("game-over");
    $("h1").html("PLayer 1 Out");
   
    setTimeout(function(){
        $("body").removeClass("game-over");
    },2000);
    count=0;
    player1=0;
    player2=1;
    
    setTimeout(function(){$("h1").html("Player 2 to Bat")},2000);
    setTimeout(function(){$("h1").html("Play")},2500);
    
}
else if(player2==1&&random1==random2){
   
    count=0;
    player2=0;
    player1=1;
    
    if(sum1>sum2){
        playsound("win");
        $("body").addClass("game-won");
    setTimeout(function(){$("h1").html("Player 1 Won the Match")
    $(".rematch").css("display","block");
    
});
    setTimeout(function(){
        $("body").removeClass("game-won");
    },2000);
    setTimeout(function(){$("h1").html("Play")},5000);
    // setTimeout(function(){
    //     $(".pl1").html("Score=0");
    //     $(".pl2").html("Score=0");
    // },3000);
    }

    else if(sum2>sum1){
        playsound("win");
        $("body").addClass("game-won");
    setTimeout(function(){$("h1").html("Player2 Won the Match")
    $(".rematch").css("display","block");

});
    setTimeout(function(){
        $("body").removeClass("game-won");
    },2000);
    setTimeout(function(){$("h1").html("Play")},2000);
    }
    else{
        playsound("draw");
        $("body").addClass("game-draw");
        setTimeout(function(){$("h1").html("Match Tied")});
        setTimeout(function(){
            $("body").removeClass("game-draw");
        },2000);
        setTimeout(function(){$("h1").html("Play")},2000);
        // setTimeout(function(){
        //     $(".pl1").html("Score=0");
        //     $(".pl2").html("Score=0");
        // },3000);
        }
    
 
    sum1=sum2=0;
    score1=[];
    score2=[];

    
}
if(player1==1&&player2==0){
score1.push(random1);

var sum=0;

 for(var i=0;i<count;i++){
 sum=sum+score1[i];
 sum1=sum;
 }
$(".pl1").html("Score="+sum);
}
if(player2==1&&player1==0&&random1!=random2){

    score2.push(random2);
    
    var sum=0;
    
     for(var i=0;i<count;i++){
     sum=sum+score2[i];
     sum2=sum;
     }
    $(".pl2").html("Score="+sum);
    if(sum>sum1){
        playsound("win");
        $("body").addClass("game-won");
    setTimeout(function(){
        $("h1").html("Player 2 Won the Match");
        $(".rematch").css("display","block");
        

    });
    setTimeout(function(){
        $("body").removeClass("game-won");
    },2000);
    setTimeout(function(){$("h1").html("Play")},2000);
    // setTimeout(function(){
    //     $(".pl1").html("Score=0");
    //     $(".pl2").html("Score=0");
    // },3000);
    count=0;
    player2=0;
    player1=1;
    
    
    }
    
    }

}

function playsound(name){
var audio=new Audio(name+".mp3");
var audio1=new Audio(name+".wav");
audio.play();
audio1.play();
}
$(".rematch").click(function(){
    window.location.reload();
});