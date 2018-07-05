/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var a, scores,activePlayer,roundScore,gamePlaying,br=0,cilj=0;
var brk=0;
a = [0,0];
function init (){
 gamePlaying = true;
scores = [0,0];
roundScore = 0;
activePlayer =0 ;    
    
}
init();
var ime1 = prompt('Ime igraca 1 :');
var ime2 = prompt('Ime igraca 2 :');
//var cilj = prompt('Do kog rezultata ce da se igra ? ');
document.querySelector("#name-0").textContent = ime1;
document.querySelector("#name-1").textContent = ime2;
//console.log(dice);
//document.querySelector('#current-'+activePlayer).textContent = dice;
//var x = document.querySelector('#current-1').textContent;
//console.log(x);
document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice1').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.btn-roll').addEventListener('click', function() {
if(gamePlaying ){  
     
    brk+=1;
    var dice =Math.floor(Math.random() * 6)+1; 
    var dice1 = Math.floor(Math.random() * 6)+1; 
    var dicez = dice1+dice;
    br = br+1;
    a[0] === 0 ? a[0] = dice : a[1] = dice;
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+ dice + '.png';
    var diceDom1 = document.querySelector('.dice1');
    diceDom1.style.display = 'block';
    diceDom1.src = 'dice-'+ dice1 + '.png';
    console.log(br + " " + dice);  
    if(brk<=1)      
    cilj = document.querySelector('.final-score').value;   
    if(!cilj)
        {
            cilj = 100;
        }
    console.log(cilj);
      if(a[0] === 6 && a[1] === 6)
        {   console.log(dice);   
            
           var ap1 = activePlayer;
           scores[ap1]=0;
            changePlayer();
            document.querySelector("#score-"+ap1).textContent = scores[ap1];
        }
    else{
        
       if(dice !== 1 && dice1 !== 1)
       {
         roundScore += dicez;
         document.querySelector("#current-"+activePlayer).textContent = roundScore;
       }  
       else{
        /*if(activePlayer ===1)
            {
            activePlayer = 0;
                roundScore = 0;
                document.querySelector("#current-1").textContent = roundScore;
            }
        else if(activePlayer ===0)
            {
                activePlayer =1;
                roundScore = 0;
                document.querySelector("#current-0").textContent = roundScore;
            }*/
        changePlayer();
        
      }
      
    }
   if (br === 2)
          {            
              br =0;
              a= [0,0];
          }
   
}
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    gameplaying = true;
    if(gamePlaying){
    scores[activePlayer] += roundScore  ;
    br = 0;
    a = [0,0];
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= cilj)
        {
            gamePlaying = false;
            var i;
            activePlayer === 0 ? i=ime1: i=ime2;
            console.log(activePlayer);
            
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
            alert("Pobedio je igrac "+ i);
        }
    else {
    changePlayer();
    }
        
    
    
    }
});
function changePlayer(){
    
    ap = activePlayer
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector("#current-"+ap).textContent = roundScore;
        document.querySelector('.player-'+ap+'-panel').classList.toggle('active');
        document.querySelector('.player-'+activePlayer+'-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',function(){   
init();
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('.player-0-panel').classList.add('active');    


});     