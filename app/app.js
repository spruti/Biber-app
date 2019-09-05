const holes = document.querySelectorAll('.hole');
const point = document.querySelector('.points');

let createbibers;
let points = 0;
let indexHolePrev = 0;

function createBiber() {
    let biber = document.createElement('img'), indexHole;

    do {
        indexHole = Math.floor(Math.random() * (holes.length));
    } while (indexHole == indexHolePrev);

    indexHolePrev = indexHole;

    biber.src = './biber_big_1_0.png';
    holes[indexHole].insertAdjacentElement('afterbegin', biber);
    let biberImg = document.querySelector('.hole img');
    biberImg.onclick = () => points++;

    point.innerHTML = points;

    console.log(indexHolePrev);

    setTimeout(() => {
        biberImg.classList.add('hidden');
        setTimeout(() => {
            holes[indexHole].innerHTML = "";
        }, 700);
    }, 800);
}