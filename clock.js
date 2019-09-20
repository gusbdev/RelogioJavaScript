const hand = document.querySelector('.hand');
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    const now = new Date(); //Pega a hora atual

    const seconds = now.getSeconds(); //Pega os segundos
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //console.log(secondHand);

    const minutes = now.getMinutes(); //Pega os minutos
    const minDegress = ((minutes / 60) * 360 + 90);
    minHand.style.transform = `rotate(${minDegress}deg)`;

    const hour = now.getHours(); //Pega as horas
    const hourDegrees = ((hour / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    removeBug(secondHand, secondsDegrees);
    removeBug(minHand, minDegress);
    removeBug(hourHand, hourDegrees);
    
    console.log(secondsDegrees);
}

function removeBug(element, degreess){
    if(degreess === 90){
        element.style.transition = 'all 0.0s';
    }
}

setInterval(setDate, 1000);
setDate();