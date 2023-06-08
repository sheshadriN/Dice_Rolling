'use strict'
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score_0 = document.querySelector('#score--0');
let score_1 = document.querySelector('#score--1');
let current_0 = document.querySelector('#current--0');
let current_1 = document.querySelector('#current--1');
let dice = document.querySelector('.dice');

//intial
dice.classList.add('hidden');
score_0.textContent = '0';
score_1.textContent = '0';

let activeplayer = 0,
    current = 0,
    random = 0,
    playing = true;;
let score = [0, 0];
document.querySelector('.btn--roll').addEventListener('click', function() {
    if (playing) {
        dice.classList.remove('hidden');
        random = Math.trunc(Math.random() * 6) + 1;
        console.log('button clicked');
        if (random !== 1) {
            current += random;
            score[activeplayer] += random;
            console.log(score);
            document.querySelector('#current--' + activeplayer).textContent = current;
            dice.src = 'dice-' + random + '.png';
            console.log("active player " + activeplayer);

        } else {
            current = 0;
            document.querySelector('#current--' + activeplayer).textContent = 0;
            dice.src = 'dice-' + random + '.png';
            player0.classList.toggle('player--active');
            player1.classList.toggle('player--active');
            activeplayer = activeplayer === 1 ? 0 : 1;
        }
        console.log(random);
    }
});
document.querySelector('.btn--hold').addEventListener('click', function() {

    if (playing) {
        console.log("RANDOM" + random);
        current = 0;
        console.log("current" + score[activeplayer]);

        document.querySelector('#score--' + activeplayer).textContent = score[activeplayer];
        if (score[activeplayer] >= 20) {
            document.querySelector('.player--' + activeplayer).classList.add('player--winner');
            document.querySelector('.player--' + activeplayer).classList.remove('player--active');
            playing = false;
            dice.classList.add('hidden');


        }
        document.querySelector('#current--' + activeplayer).textContent = 0;
        activeplayer = activeplayer === 1 ? 0 : 1;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        document.querySelector('#current--' + activeplayer).textContent = 0;
    }
});
document.querySelector('.btn--new').addEventListener('click', function() {
    playing = true;
    score_0.textContent = '0';
    score_1.textContent = '0';
    current_0.textContent = '0';
    current_1.textContent = '0';
    current = 0;
    score = [0, 0];
    activeplayer = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    dice.classList.add('hidden');



});