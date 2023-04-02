const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const buttonOff = document.querySelector('.button-off');
const buttonOn = document.querySelector('.button-on');

let interval0;

const colors = [
    {color: red, on: '#d23129', off: '#411715', boxShadow: '0 0 10px rgba(255, 65, 54, 0.5)'},
    {color: yellow, on: '#FFDC00', off: '#353112', boxShadow: '0 0 10px rgba(255, 220, 0, 0.5)'},
    {color: green, on: '#2ECC40', off: '#0f2a12', boxShadow: '0 0 10px rgba(46, 204, 64, 0.5)'}
    ];

buttonOff.addEventListener('click', trafficLightsOff);
buttonOn.addEventListener('click', trafficLightsOn);

function trafficLightsOff() {
    offColors();
;
    buttonOff.style.backgroundColor = '#dd180e';
    buttonOn.style.backgroundColor = '#a8cea2';
    clearInterval(interval0);
}

function offColors(){
    colors.forEach(i => {
        i.color.style.boxShadow = 'none';
        i.color.style.backgroundColor = i.off;
    })
}

function redOn() {
    offColors();
    colors[0].color.style.backgroundColor = colors[0].on;
    colors[0].color.style.boxShadow = colors[0].boxShadow;
} 
function yellowOn() {
    offColors();
    colors[1].color.style.backgroundColor = colors[1].on;
    colors[1].color.style.boxShadow = colors[1].boxShadow;
}
function greenOn() {
    offColors();
    colors[2].color.style.backgroundColor = colors[2].on;
    colors[2].color.style.boxShadow = colors[2].boxShadow;
}

let current = 'red';

function trafficLightsOn() {


    interval0 = setInterval(() => {
        if(current === 'red') {
            setTimeout(redOn, 0);
            current = 'green';
        } 

        setTimeout(yellowOn, 1000);

        if(current === 'green') {
            setTimeout(greenOn, 2000);
            current = 'red';
        }
        setTimeout(yellowOn, 3000);
        
    }, 4000);

    buttonOn.style.backgroundColor = '#28df0b';
    buttonOff.style.backgroundColor = '#aa7875';
}

