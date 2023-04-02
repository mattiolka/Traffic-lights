const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const buttonOff = document.querySelector('.button-off');
const buttonOn = document.querySelector('.button-on');

const colors = [
    {color: red, on: '#d23129', off: '#411715', boxShadow: '0 0 10px rgba(255, 65, 54, 0.5)'},
    {color: yellow, on: '#FFDC00', off: '#353112', boxShadow: '0 0 10px rgba(255, 220, 0, 0.5)'},
    {color: green, on: '#2ECC40', off: '#0f2a12', boxShadow: '0 0 10px rgba(46, 204, 64, 0.5)'}
    ];

let isActive;

buttonOff.addEventListener('click', () => {
    offColors();
    isActive = false;
    buttonOff.style.backgroundColor = '#dd180e';
    buttonOn.style.backgroundColor = '#a8cea2';
});

buttonOn.addEventListener('click', () => {
    isActive = true;
    current = 'green';
    process();
});

function offColors(){
    colors.forEach(i => {
        i.color.style.boxShadow = 'none';
        i.color.style.backgroundColor = i.off;
    })
}

function redOn() {
    colors[0].color.style.backgroundColor = colors[0].on;
    colors[0].color.style.boxShadow = colors[0].boxShadow;
} 
function yellowOn() {
    colors[1].color.style.backgroundColor = colors[1].on;
    colors[1].color.style.boxShadow = colors[1].boxShadow;
}
function greenOn() {
    colors[2].color.style.backgroundColor = colors[2].on;
    colors[2].color.style.boxShadow = colors[2].boxShadow;
}
    
function process(){
    if (!isActive) return;

    function nextCurrent() {
        if(current == 'green') return [current, 'yellow']
        if(current == 'red') return [curent, 'yellow']
        if(current == 'yellow') return [current, previous == 'green' ? 'red' : 'green']
    }
 
    offColors();
    if(current === 'green') greenOn();
    if(current === 'red') redOn();
    if(current === 'yellow') yellowOn();

    setTimeout(() => {
        [previous, current] =  nextCurrent();
        process();
    }, (current === 'green' || current === 'red') ? 1000 : 200 );

    buttonOn.style.backgroundColor = '#28df0b';
    buttonOff.style.backgroundColor = '#aa7875';
}

