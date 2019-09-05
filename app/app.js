const holes = document.querySelectorAll('.hole'),
    point = document.querySelector('.points');

let createbibers,
    points = 0,
    gameTime = 20000,
    indexHolePrev = 0;
let gameTimer = (gameTime / 1000);

function createBiber() {

    let biber = document.createElement('img'), indexHole;

    do {
        indexHole = Math.floor(Math.random() * (holes.length));
    } while (indexHole == indexHolePrev);
    holes[indexHole].innerHTML = "";
    indexHolePrev = indexHole;
    biber.setAttribute('data-type', biber);
    biber.src = './biber_big_1_0.png';
    holes[indexHole].insertAdjacentElement('afterbegin', biber);
    setTimeout(() => {
        holes[indexHole].firstChild.classList.add('hidden');
    }, 600);

    document.querySelector('.timer').textContent = "Осталось время: " + (gameTimer -= 0.5).toFixed(0);

}

const hole = document.querySelector('.holes');
hole.addEventListener('click', pointer);


function pointer() {
    if (event.target.dataset.type) {
        points++;
        point.textContent = `Бобров: ${points}`;
        event.target.classList.add('hidden');
    }
}


const $startBtn = document.querySelector('.startBtn');
$startBtn.addEventListener('click', () => {
    let interval = setInterval(createBiber, 500);

    setTimeout(() => {
        clearInterval(interval);
        alert(`Ваш результат: ${points} бобров`)
        points = 0
        gameTimer = (gameTime / 1000)
        point.textContent = `Бобров: 0`
    }, gameTime);

})