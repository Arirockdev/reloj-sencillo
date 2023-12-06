const doc = document;

const firstContainer = doc.querySelector('.container');

  const clockBlock = doc.createElement('div');
  clockBlock.setAttribute('id', 'time');

const totalTime = () => {

  
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  
  hours = (hours < 10) ? `0${hours}` : hours;
  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds; 
  const totalTime =  `${hours}:${minutes}:${seconds}`
  clockBlock.innerHTML = totalTime
}

setInterval(totalTime, 1000)

firstContainer.appendChild(clockBlock) 