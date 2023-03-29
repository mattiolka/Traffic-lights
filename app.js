const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');



function trafficLightsOff() {
    const colors = [red, yellow, green];

    colors.forEach(i => {
        i.style.boxShadow = 'none';
    })

    red.style.backgroundColor = '#411715';
    yellow.style.backgroundColor = '#353112';
    green.style.backgroundColor = '#0f2a12';
}

trafficLightsOff();