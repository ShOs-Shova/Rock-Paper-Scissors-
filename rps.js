let score =JSON.parse(localStorage.getItem('score')) ||{
  wins:0,
  ties:0,
  losses:0
 }; 

 WhatTheHell();
   let id;
   let isAutoPlaying=false;
 function runAutoPlay(){
  if(!isAutoPlaying){
   id= setInterval(()=>{
      const playerMove=countComputerMove();
      finalAnswer(playerMove);
    },1000);
    isAutoPlaying=true;
  }else{
    clearInterval(id);
    isAutoPlaying=false; 
  }
 }
 document.querySelector('.js-paper-button').addEventListener('click',()=>{
  finalAnswer('Paper');
 })
 document.querySelector('.js-rock-button').addEventListener('click',()=>{
  finalAnswer('Rock');
 })
 document.querySelector('.js-scissors-button').addEventListener('click',()=>{
  finalAnswer('Scissors');
 })
  function finalAnswer(userPick){
    const computerMove= countComputerMove();
  let result='';
  if(userPick=='Scissors'){
  if(computerMove==='Rock'){
    result='You lose';
  }else if(computerMove==='Scissors'){
    result='Tie';
  }else if(computerMove==='Paper'){
    result='You win';
  }
}else if(userPick=='Paper'){
  if(computerMove==='Rock'){
    result='You win';
  }else if(computerMove==='Scissors'){
    result='You lose';
  }else if(computerMove==='Paper'){
    result='Tie';
  }
  }else if(userPick==='Rock'){
    if(computerMove==='Rock'){
  result='Tie';
}else if(computerMove==='Scissors'){
  result='You win';
}else if(computerMove==='Paper'){
  result='You lose';
}
  }
  if(result=='You win'){
    score.wins++;
  }else if(result=='You lose'){
    score.losses++;
  }else if(result=='Tie'){
    score.ties++;
  }
  localStorage.setItem('score',JSON.stringify(score));

  WhatTheHell();
  Page(result,computerMove,userPick);
  
}

document.body.addEventListener('keydown',(event)=>{
  if(event.key=='r'){
    finalAnswer('Rock');
  }else if(event.key=='p'){
    finalAnswer('Paper');
  }else if(event.key=='s'){
    finalAnswer('Scissors');
  }

})


function WhatTheHell(){
  document.querySelector('.js-score').innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
  document.querySelector('.js-result').innerHTML='';
  document.querySelector('.js-moves').innerHTML='';
}
  function Page(result,computerMove,userPick){
    document.querySelector('.js-result').innerHTML=result;
    document.querySelector('.js-moves').innerHTML=`  You <img src="images/${userPick}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    Computer`;
  }

function countComputerMove(){
  let computerMove='';
  console.log(computerMove);
  
  const randomNum= Math.random();
if(randomNum>=0 && randomNum<1/3){
  computerMove='Rock';
}else if(randomNum >=1/3 && randomNum<2/3){
    computerMove='Paper';
}else if(randomNum >=2/3 && randomNum<1){
  computerMove='Scissors';
}

return computerMove;
}


