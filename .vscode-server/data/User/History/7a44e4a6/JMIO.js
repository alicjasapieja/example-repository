const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');

function jump () {
dino.classList.add ('jump-animation');
setTimeout(() => {
dino.classList.removel('jump-animation');
},500 ) ;
}

document.addEventListener('keypress',() => {
    if (dino.classList.contains(jump-animation)) {
        jump()
    }
});
//assign funcions to keycodes
function control (e) {
    if (e.keycode === 38) {
        jump ()
    }
    document.addEventListener('keydown',control)
