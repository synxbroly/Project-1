//set random image for dice 1



let randomNo1 = Math.floor(Math.random()*6+1);
let img1Src = "images/"+("dice" + randomNo1 +".png");
document.querySelector("#img1").setAttribute("src",img1Src);

//set random image for dice 2


let randomNo2 = Math.floor(Math.random()*6+1);
let img2Src = "images/"+("dice" + randomNo2 +".png");
document.querySelector("#img2").setAttribute("src",img2Src);

// changing h1 to display winner



if (randomNo1>randomNo2){
    document.querySelector("h1").innerHTML="Player 1 wins";              
}
else if (randomNo1==randomNo2){
    document.querySelector("h1").innerHTML="It's a draw";
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins";

}




