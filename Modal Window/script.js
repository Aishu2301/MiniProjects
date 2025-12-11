'use strict';

const modal= document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclose=document.querySelector('.close-modal');
const btnsopen=document.querySelectorAll('.show-modal');
console.log(btnsopen);

const open=function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

const close = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i =0; i<btnsopen.length;i++)
    btnsopen[i].addEventListener('click', open);

btnclose.addEventListener('click', close);
overlay.addEventListener('click',close);

document.addEventListener('keydown',function(event){
    if(event.key==='Escape' && !modal.classList.contains('hidden')){
        
            close();
    }
});