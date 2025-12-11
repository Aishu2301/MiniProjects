'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess){
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess===secretNumber){
        document.querySelector('.message').textContent='Correct Number';
        document.querySelector('.number').textContent=secretNumber;
        if (highscore<score){
            highscore=score;
        }
        
        document.querySelector('.highscore').textContent=highscore;
        document.querySelector('body').style.backgroundColor= '#60b347';
        document.querySelector('.number').style.width='30rem';
        
        
    }else if(guess>secretNumber){

        if (score>1){
            document.querySelector('.message').textContent='Too High';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }
        
        
    }else if(guess<secretNumber){

        if (score>1){
            document.querySelector('.message').textContent='Too low';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='You lost the game';
            document.querySelector('.score').textContent=0;
        }
        
    }
});

document.querySelector('.again').addEventListener(
    'click', function(){
        secretNumber=Math.trunc(Math.random()*20)+1;
        score=20;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?';
        document.querySelector('.highscore').textContent=highscore;
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.guess').value='';
        document.querySelector('body').style.backgroundColor='#33358bff';
        document.querySelector('.number').style.width='15rem';

    }
)


