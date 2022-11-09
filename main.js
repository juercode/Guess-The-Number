let magicNumber = Math.trunc(Math.random()*20+1);
let highscore = 0;
let score = Number(document.querySelector('#myScore').textContent);

function playagain() {
    const playAgain = document.querySelector('#playAgain')
    playAgain.style.display = 'inline';
}


document.querySelector('#myHighscore').textContent = highscore;
document.querySelector('#playAgain').addEventListener('click', function() {
score = 20;
document.querySelector('#myScore').textContent = score;
document.querySelector('#letsPlay').textContent = 'Lets play the game!';
document.querySelector('body').style.backgroundColor = 'navy';
document.querySelector('#guess').value = '';
playAgain.style.display = 'none';
magicNumber = Math.trunc(Math.random()*20+1);
console.log(magicNumber);
})

document.querySelector('#mainButton').addEventListener('click', function() {
    let myNumber = Number(document.querySelector('#guess').value);
    if (!myNumber) {
        document.querySelector('#letsPlay').textContent = 'Enter a valid number please';
    }
    else if (myNumber === magicNumber) {
        document.querySelector('#letsPlay').textContent = 'Congratulations you found it!';
        document.querySelector('body').style.backgroundColor = 'green';

        playagain();
        if (highscore < score ) {
            highscore = score;
            document.querySelector('#myHighscore').textContent = highscore;
        }
    }

    else if (myNumber > magicNumber) {
        if (score > 1) {
            document.querySelector('#letsPlay').textContent = 'Enter a smaller number';
            score--;
            document.querySelector('#myScore').textContent = score;
        }
        else {
            document.querySelector('#letsPlay').textContent = 'You loose the game!'
            document.querySelector('body').style.backgroundColor = 'black';
            playagain()


        }
    }

    else if (myNumber < magicNumber) {
        if (score > 1) {
            document.querySelector('#letsPlay').textContent = 'Enter a bigger number';
            score--;
            document.querySelector('#myScore').textContent = score;
        }
        else {
            document.querySelector('#letsPlay').textContent = 'You loose the game!'
            document.querySelector('body').style.backgroundColor = 'black';
            playagain()
        }
    }
})
