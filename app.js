const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

const buttonOff = document.querySelector('.button-off');
const buttonOn = document.querySelector('.button-on');

let interval1;
let interval2;
let interval3;


buttonOff.addEventListener('click', trafficLightsOff);
buttonOn.addEventListener('click', trafficLightsOn);

 const colors = [
        {color: red, on: '#d23129', off: '#411715', boxShadow: '0 0 10px rgba(255, 65, 54, 0.5)'},
        {color: yellow, on: '#FFDC00', off: '#353112', boxShadow: '0 0 10px rgba(255, 220, 0, 0.5)'},
        {color: green, on: '#2ECC40', off: '#0f2a12', boxShadow: '0 0 10px rgba(46, 204, 64, 0.5)'}
    ]


function trafficLightsOff() {
    colors.forEach(i => {
        i.color.style.boxShadow = 'none';
        i.color.style.backgroundColor = i.off;
    })

    buttonOff.style.backgroundColor = '#dd180e';
    buttonOn.style.backgroundColor = '#a8cea2';
    clearInterval(interval1);
    clearInterval(interval2);
    clearInterval(interval3);
}

function trafficLightsOn() {
    interval1 = setInterval(() => {
        colors[0].color.style.backgroundColor = colors[0].on;
        colors[0].color.style.boxShadow = colors[0].boxShadow; 


        colors[1].color.style.backgroundColor = colors[1].off;
        colors[1].color.style.boxShadow = 'none';

        colors[2].color.style.backgroundColor = colors[2].off;
        colors[2].color.style.boxShadow = 'none';

    }, 1000);

    interval2 = setInterval(() => {
        colors[1].color.style.backgroundColor = colors[1].on;
        colors[1].color.style.boxShadow = colors[1].boxShadow; 


        colors[0].color.style.backgroundColor = colors[0].off;
        colors[0].color.style.boxShadow = 'none';

        colors[2].color.style.backgroundColor = colors[2].off;
        colors[2].color.style.boxShadow = 'none';
    }, 2000);

    interval3 = setInterval(() => {
        colors[2].color.style.backgroundColor = colors[2].on;
        colors[2].color.style.boxShadow = colors[2].boxShadow; 


        colors[0].color.style.backgroundColor = colors[0].off;
        colors[0].color.style.boxShadow = 'none';
    }, 3000);

   

    buttonOn.style.backgroundColor = '#28df0b';
    buttonOff.style.backgroundColor = '#aa7875';




}


