var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var s1 = document.querySelector("#first");
var num = document.querySelector("input[type='number']");
var winningScore= document.querySelector("p span");
p1Score = 0;
var s2 = document.querySelector("#second");
p2Score = 0;
var stop = false;
var parScore = 7;
var resetButton = document.getElementById("reset");


p1Button.addEventListener("click", function(){
  if(!stop)
  {
    p1Score++;
   if(p1Score === parScore)
   {
       s1.classList.add("end");
       stop = true;
   }
   s1.textContent = p1Score;
}
});

p2Button.addEventListener("click", function(){
   if(!stop){
    p2Score++;
    if(p2Score === parScore)
   {
       s2.classList.add("end");
       stop = true;
   }
    s2.textContent = p2Score;
}
});

resetButton.addEventListener("click",function(){
    alert("You CLICKED Reset Button");
    reset();

});

function reset(){
    p1Score = 0;
    p2Score = 0;
    s1.textContent = p1Score;
    s2.textContent = p2Score;
    s1.classList.remove("end");
    s2.classList.remove("end");
    stop = false;
}

num.addEventListener("change",function(){
    winningScore.textContent = this.value;
    parScore = Number(this.value);
    reset();




});





 












 
