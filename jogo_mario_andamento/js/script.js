const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const score = document.querySelector('.score');

var pontuacaoScore = 0;
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);

};

function updateScore(){

    pontuacaoScore = pontuacaoScore + 1;
    score.innerHTML =  'Score: 00000' + pontuacaoScore
    //console.log(pontuacaoScore); 
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPositionLeft = mario.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
   
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.left = `${marioPosition}px`;

        mario.src = './img/game-over.png'
        mario.style.width = `75px`;
        mario.style.marginLeft = `50px`;

        clearInterval(loop);

    } else if (pipePosition < marioPositionLeft && mario.src != './img/game-over.png') {
        //pipePosition + ' + ' + marioPositionLeft + '&&' + marioPosition == 0
        console.log(pipePosition);
        console.log(marioPositionLeft);
        console.log(marioPosition);
        updateScore();
    }

}, 10);

document.addEventListener('keydown', jump);

