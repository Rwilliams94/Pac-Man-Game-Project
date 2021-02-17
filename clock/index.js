// !----------------------------------------- Creating the clock ---------------------------------------------!

export class Chronometer {
  constructor() {
    this.currentTime = 1000;
    this.intervalId = 0;
  }
  startClick(callback, stop) {
    const intervalId = setInterval(() => {
      this.currentTime --;
      callback();
      stop()
    },10);
    this.intervalId = intervalId;
   }
  
  getMinutes() {
     let minutes = this.currentTime / 6000; 
     return Math.floor(minutes);
  }

  getSeconds() {
    let seconds = (this.currentTime % 6000)/100;
    return Math.floor(seconds);
  }

  getMilliseconds() {
    let milliseconds = this.currentTime % 100;
    return milliseconds;
  }

  twoDigitsNumber(num) {
    if (num < 10) {
      return `0${num.toString()}`;
    } else {
      return num.toString();
    }
  }

  stopClick() {
    if (this.currentTime === 0) clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime =1000;
  }
 
}


// !----------------------------- Printing the time!! ----------------------------------------------!

const newChronometer = new Chronometer();

// get the buttons:
const btnStart = document.getElementById("start");


// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");


function printTime() {
  printSeconds();
  printMinutes();
  printMilliseconds();
}

function printMinutes() {
  // ... your code goes here

  let mins = newChronometer
    .twoDigitsNumber(newChronometer.getMinutes())
    .split("");
  minDec.innerText = mins[0];
  minUni.innerText = mins[1];
}

function printSeconds() {
  // ... your code goes here
  let secs = newChronometer
    .twoDigitsNumber(newChronometer.getSeconds())
    .split("");

  secDec.innerText = secs[0];
  secUni.innerText = secs[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
  let mSecs = newChronometer
    .twoDigitsNumber(newChronometer.getMilliseconds())
    .split("");
  milDec.innerText = mSecs[0];
  milUni.innerText = mSecs[1];
}
