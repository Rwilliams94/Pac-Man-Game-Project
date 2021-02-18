// !----------------------------------------- Creating the clock ---------------------------------------------!

export class Chronometer {
  constructor() {
    this.currentTime = 0;
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
    clearInterval(this.intervalId);
  }

  resetClick() {
    this.currentTime =time;
  }
 
}


// !----------------------------- Printing the time!! ----------------------------------------------!

const newChronometer = new Chronometer();

// get the buttons:



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


// !----------------------------  1. creation of the character. -------------------------------------------!

// 1. creation of characters, grids and starting positions


class Character {
    constructor(name, x, y){
        this.name = name;
        this.x = x;
        this.y = y;
        this.direction = "";
        this.route = [{x:x, y:y}];
        this.points = 0;
        this.pillCount = 0;
        this.life = 3
    }

 
}



const PM = new Character("PacMan", 9, 19);
const g1 = new Character("ghost1", 9, 9);
const g2 = new Character("ghost2", 3, 27);
const g3 = new Character("ghost3", 18, 37);
const g4 = new Character("ghost4", 11, 13);



const base = [
 
['O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O'],
['O','.','.','.','.','O','O','O','O','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','O','O'],
['O','.','O','O','.','O','O','O','O','.','O','O','O','.','O','.','O','.','O','.','O','.','O','O','O','.','O','O','O','O','O','.','O','O','O','O','O','.','O','O'],
['O','.','O','O','.','.','.','.','.','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','.','O','.','.','.','.','.','O','O','O','O','O','.','O','O'],
['O','.','O','O','.','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','.','O','.','O','O','O','.','.','.','.','.','.','.','O','O'],
['O','.','O','O','.','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','.','O','.','O','O','O','.','O','.','O','.','O','.','O','O'],
['O','.','O','O','.','O','.','.','.','.','O','.','O','.','O','.','O','.','O','.','O','.','.','.','.','.','O','.','O','O','O','.','O','.','O','.','O','.','O','O'],
['O','.','O','O','.','O','.','O','O','.','O','.','O','.','O','.','O','.','.','.','O','.','O','O','O','.','O','.','O','O','O','.','O','.','O','.','O','.','O','O'],
['O','.','O','O','.','O','.','O','O','.','O','O','O','.','O','.','O','O','O','O','O','.','O','.','O','.','O','.','O','O','O','.','O','.','.','O','.','.','O','O'],
['O','.','O','O','.','O','.','O','O','.','.','.','.','.','.','.','O','.','.','I','O','.','O','.','O','.','O','.','O','O','O','.','O','.','O','.','.','O','O','O'],
['O','.','O','O','.','O','.','O','O','O','O','.','O','O','O','.','O','.','O','.','O','.','O','O','O','.','O','.','.','.','.','.','O','O','.','.','O','O','O','O'],
['O','.','O','O','.','O','.','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','O','O','.','O','.','O','.','.','O','O','O'],
['O','.','O','O','.','O','.','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','.','.','.','.','.','.','.','O','.','.','O','.','.','O','O'],
['O','.','O','O','.','O','.','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','O','O','.','O','.','O','.','O','.','O','O'],
['O','.','O','O','.','.','.','.','.','.','.','.','O','.','O','.','O','.','O','.','O','.','O','.','O','.','.','.','.','.','.','.','O','.','O','.','O','.','O','O'],
['O','.','O','O','.','O','O','O','O','O','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','.','O','O','O','O','O','.','O','.','O','.','O','.','O','O'],
['O','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','O','O'],
['O','.','O','O','O','O','O','O','O','.','O','O','O','O','O','.','O','O','O','O','O','O','O','O','O','.','O','O','O','O','O','O','O','O','O','O','O','.','O','O'],
['O','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','.','O','O'],
['O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O','O'],

]

let grid = [];
base.forEach(arr => grid.push([...arr]))
 
// mode switching

let modeSet = 0

 
// 1.b set all the element links



  const PacMan = document.getElementById("PM");
  const ghost1 = document.getElementById("ghost1");
  const Score = document.getElementById("score");
  const btnStart = document.getElementById("start");
  const btnTutorial = document.getElementById("tutorial-button");
  const btnMode = document.getElementById("mode-button");
  const joystick = document.getElementById("joystick");
  const gameOver = document.getElementById("game-over");
  const tryAgain = document.getElementById("try");
  const scoreText = document.getElementById("score-text");
  const clock = document.getElementById("clock");
  const marathon = document.getElementById("marathon");
  const sprint = document.getElementById("sprint");
  const lives = document.getElementById("lives")
  

  const life1 = document.querySelector(".life.one");
  const life2 = document.querySelector(".life.two");
  const life3 = document.querySelector(".life.three");

  const audioStart = document.getElementById("audio-start")
  const audioEnd = document.getElementById("audio-end")
  const audioHit = document.getElementById("audio-hit")
  const audioIntergalactic = document.getElementById("audio-intergalactic")
  const audioInterstellar = document.getElementById("audio-interstellar")



  function playStart() {
    audioStart.play()
  }

  function playEnd() {
    audioEnd.play()
  }

  function playHit() {
    audioHit.play()
  }

  function playInterstellar() {
    audioInterstellar.play()
  }

  function endInterstellar() {
    audioInterstellar.pause();
    audioInterstellar.currentTime = 0;
  }

  function playIntergalactic() {
    audioIntergalactic.play()
  }

  function endIntergalactic() {
    audioIntergalactic.pause();
    audioIntergalactic.currentTime = 0;
  }

  // mode switcher


  let gridWalls = document.getElementsByClassName("grid-wall");
  let gridCells = document.getElementsByClassName("grid-cell");
  let up = document.getElementsByClassName("up");
  let down = document.getElementsByClassName("down");
  let left = document.getElementsByClassName("right");
  let right = document.getElementsByClassName("left");
  let btn = document.getElementsByClassName("btn");
  let btnOuter = document.getElementsByClassName("button-outer");
  let hSBoxes = document.getElementsByClassName("highscore-box");


  btnMode.onclick = function() {

   // !--------------------- Reset all ----------------------------!
      
     // stop clocks and movement
     newChronometer.stopClick()  
     setStop()
     clearInterval(intervalId);
     clearInterval(intervalId1);
     clearInterval(intervalId2);
     clearInterval(intervalId3);
     clearInterval(intervalId4);
     btnStart.classList.remove("no-click")
     
    
     console.log(btnStart.classList);
 
     // resest time
     
     newChronometer.resetClick();
     minDec.innerText = startMinDec;
     minUni.innerText = startMinUni;
     secDec.innerText = startSecDec;
     secUni.innerText = startSecUni;
     milDec.innerText = 0;
     milUni.innerText = 0;
     PM.points = 0;
     Score.innerText = 0;
         
     // reset board, pills and grid.
 
       resetPos();
 
       let resetPill = document.getElementsByClassName("pill")
         for (let i=0; i<resetPill.length; i++) {
             resetPill[i].classList.remove("active");
         }
         
       grid.splice(0,grid.length);
       base.forEach(arr => grid.push([...arr]));
 
       PM.pillCount = 0;

      // !--------------------- Switch mode ----------------------------!

    if (modeSet === 0) {
      
      modeSet = 1;

      

      joystick.classList.toggle("mode");
      clock.classList.toggle("mode");
      sprint.classList.toggle("mode");
      marathon.classList.toggle("mode");
      lives.classList.toggle("mode");


    for (let i=0; i<gridWalls.length; i++) {
      gridWalls[i].classList.toggle("mode");
    }

    for (let i=0; i<gridCells.length; i++) {
      gridCells[i].classList.toggle("mode");
    }

    for (let i=0; i<up.length; i++) {
      up[i].classList.toggle("mode");
    }

    for (let i=0; i<down.length; i++) {
      down[i].classList.toggle("mode");
    }

    for (let i=0; i<left.length; i++) {
      left[i].classList.toggle("mode");
    }

    for (let i=0; i<right.length; i++) {
      right[i].classList.toggle("mode");
    }

    for (let i=0; i<btn.length; i++) {
      btn[i].classList.toggle("mode");
    }

    for (let i=0; i<btnOuter.length; i++) {
      btnOuter[i].classList.toggle("mode");
    }

    
    for (let i=0; i<hSBoxes.length; i++) {
      hSBoxes[i].classList.toggle("mode");
    }

    } else {

      modeSet = 0;

      joystick.classList.toggle("mode");
      clock.classList.toggle("mode");
      sprint.classList.toggle("mode");
      marathon.classList.toggle("mode");
      lives.classList.toggle("mode");


    for (let i=0; i<gridWalls.length; i++) {
      gridWalls[i].classList.toggle("mode");
    }

    for (let i=0; i<gridCells.length; i++) {
      gridCells[i].classList.toggle("mode");
    }

    for (let i=0; i<up.length; i++) {
      up[i].classList.toggle("mode");
    }

    for (let i=0; i<down.length; i++) {
      down[i].classList.toggle("mode");
    }

    for (let i=0; i<left.length; i++) {
      left[i].classList.toggle("mode");
    }

    for (let i=0; i<right.length; i++) {
      right[i].classList.toggle("mode");
    }

    for (let i=0; i<btn.length; i++) {
      btn[i].classList.toggle("mode");
    }

    for (let i=0; i<btnOuter.length; i++) {
      btnOuter[i].classList.toggle("mode");
    }

    for (let i=0; i<hSBoxes.length; i++) {
      hSBoxes[i].classList.toggle("mode");
    }
    }
      
  }

  
  tryAgain.onclick = function() {
    gameOver.classList.toggle("active")
  }


  let intervalId = 0;
  let intervalId1 = 0;
  let intervalId2 = 0;
  let intervalId3 = 0;
  let intervalId4 = 0;

// 1.c set the starting postions.


//Main

let basePMLife = PM.life

let basePMX = PM.x
let basePMY = PM.y

let baseG1X = g1.x
let baseG1Y = g1.y

let baseG2X = g2.x
let baseG2Y = g2.y

let baseG3X = g3.x
let baseG3Y = g3.y

let baseG4X = g4.x
let baseG4Y = g4.y


const resetPos = function() {

  PacMan.style.backgroundImage = "url(./img/spaceman-still-down.png)"

 PacMan.style.gridRow = `${basePMX+1}/20`;
 PacMan.style.gridColumn = `${basePMY+1}/39`;

 PM.x = basePMX;
 PM.y = basePMY;
 
 ghost1.style.gridRow = `${baseG1X+1}/20`;
 ghost1.style.gridColumn = `${baseG1Y+1}/39`;

 g1.x = baseG1X;
 g1.y = baseG1Y;
 g1.direction = "U"

 ghost2.style.gridRow = `${baseG2X+1}/20`;
 ghost2.style.gridColumn = `${baseG2Y+1}/39`;

 g2.x = baseG2X;
 g2.y = baseG2Y;
 g2.direction = "U"

 ghost3.style.gridRow = `${baseG3X+1}/20`;
 ghost3.style.gridColumn = `${baseG3Y+1}/39`;

 g3.x = baseG3X;
 g3.y = baseG3Y;
 g3.direction = "U"

 ghost4.style.gridRow = `${baseG4X+1}/20`;
 ghost4.style.gridColumn = `${baseG4Y+1}/39`;

 g4.x = baseG4X;
 g4.y = baseG4Y;
 g4.direction = "U"
}

resetPos()


const startMinDec = 0;
const startMinUni = 0;
const startSecDec = 3;
const startSecUni = 0;
 
let time = startMinDec*60000 + startMinUni*6000 + startSecDec*1000 + startSecUni*100;
newChronometer.currentTime = time;
minDec.innerText = startMinDec;
minUni.innerText = startMinUni;
secDec.innerText = startSecDec;
secUni.innerText = startSecUni;
milDec.innerText = 0;
milUni.innerText = 0;

const basePlayerSpeed = 150;
const baseGhostSpeed = 175;
let ghostSpeed = baseGhostSpeed;
let playerSpeed = basePlayerSpeed;




// !------------------------------- 2. move directions with arrows. ---------------------------------------------!

// 2. movement with arrows can only start once the timer has started. Start button must be pressed otherwise no movement. 




document.addEventListener("keydown", function (e) {
  if (btnStart.classList.contains("no-click")) {
    switch (e.key) {
      case "ArrowLeft":
        
        if (grid[PM.x][PM.y - 1] !== "O") {
          clearInterval(intervalId);
          PM.direction = "L";
          moveForward();
        }
        break;

      case "ArrowUp":
        
        if (grid[PM.x - 1][PM.y] !== "O") {
          clearInterval(intervalId);
          PM.direction = "U";

          moveForward();
        }
        break;

      case "ArrowRight":
        
        if (grid[PM.x][PM.y + 1] !== "O") {
          clearInterval(intervalId);
          PM.direction = "R";

          moveForward();
        }
        break;

      case "ArrowDown":
        
        if (grid[PM.x + 1][PM.y] !== "O") {
          clearInterval(intervalId);
          PM.direction = "D";

          moveForward();
        }
        break;
    }
  }
});

//                !---------------- 2. joystick move -------------------!




document.addEventListener("keydown", (e) => {
  

switch(e.key) {

    case "ArrowDown":
    joystick.classList.toggle("down-side");
    break;

    case "ArrowRight":
    joystick.classList.toggle("right-side");
    break;
  
    case "ArrowUp":
    joystick.classList.toggle("up-side");
    break;
  
    case "ArrowLeft":
    joystick.classList.toggle("left-side")
    break;


}


})


document.addEventListener("keyup", (e) => {
  

switch(e.key) {

    case "ArrowDown":
    joystick.classList.toggle("down-side");
    break;

    case "ArrowRight":
    joystick.classList.toggle("right-side");
    break;
  
    case "ArrowUp":
    joystick.classList.toggle("up-side");
    break;
  
    case "ArrowLeft":
    joystick.classList.toggle("left-side")
    break;

}


})







// !------------------------------------ 3. player movement ---------------------------------------!

// 3. Move forward function - never stopping once the first click is made and will depend on the
// direction of travel. (each direction click should stop and start the function again to avoid double speed.)
// the function will stop when hitting the barriers or another object (eventually the enemies)

const moveForward = function () {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    switch (PM.direction) {
      case "U":

        if (PM.x === 0) {
          clearInterval(intervalId);
        } else if (grid[PM.x - 1][PM.y] === "O") {
          clearInterval(intervalId);
        } else {
          PM.x--;
          PacMan.style.gridRow = `${PM.x + 1}/20`;

          PacMan.style.backgroundImage = "url(./img/spaceman-run-up.gif)"

          ghostHit()
          Score.innerText = PM.points
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;

      case "R":
        if (PM.y === grid[0].length - 1) {
          clearInterval(intervalId);
        } else if (grid[PM.x][PM.y + 1] === "O") {
          clearInterval(intervalId);
        } else {
          PM.y++;
          PacMan.style.gridColumn = `${PM.y + 1}/39`;
          PacMan.style.backgroundImage = "url(./img/spaceman-run-right.gif)"
          
          ghostHit()
          Score.innerText = PM.points
          removePill();
          scorePoints();
          roundOver();
        }
        break;

      case "D":
        if (PM.x === grid.length - 1) {
          clearInterval(intervalId);
        } else if (grid[PM.x + 1][PM.y] === "O") {
          clearInterval(intervalId);
        } else {
          PM.x++;
          PacMan.style.gridRow = `${PM.x + 1}/20`;
          PacMan.style.backgroundImage = "url(./img/spaceman-run-down.gif)"

          ghostHit()
          Score.innerText = PM.points
          removePill();
          scorePoints();
          roundOver();
        }
        break;

      case "L":
        if (PM.y === 0) {
        } else if (grid[PM.x][PM.y - 1] === "O") {
          clearInterval(intervalId);
        }  else {
          PM.y--;
          PacMan.style.gridColumn = `${PM.y + 1}/39`;
          PacMan.style.backgroundImage = "url(./img/spaceman-run-left.gif)"

          ghostHit()
          Score.innerText = PM.points
          removePill();
          scorePoints();
          roundOver();
        }
        break;
    }
    // console.log(PM.pillCount)
    // PM.route.push({x:PM.x, y:PM.y})
  }, playerSpeed);
};



// !---------------------------------- 4. update the score each time ---------------------------------------!

const scorePoints = function() {
    if (grid[PM.x][PM.y]==='.') {
    PM.points += 10;
    PM.pillCount ++;
    grid[PM.x][PM.y] = ' ';
    };
}

// !---------------------------------- High scores ---------------------------------------!



const highscoreMarathon = [0,0,0,0,0];
const highscoreSprint = [0,0,0,0,0];

let marathonHighscores = document.querySelectorAll(".h-score-m")
let sprintHighscores = document.querySelectorAll(".h-score-s")

for (let i=0; i<highscoreSprint.length; i++) {
  highscoreSprint[i] = localStorage.getItem(`${i}s`)
}

for (let i=0; i<highscoreMarathon.length; i++) {
  highscoreMarathon[i] = localStorage.getItem(`${i}m`)
}

for (let i=0; i<highscoreSprint.length; i++) {
      
  sprintHighscores[i].innerText = `${highscoreSprint[i]}`  
}

for (let i=0; i<highscoreMarathon.length; i++) {
  marathonHighscores[i].innerText = `${highscoreMarathon[i]}`
  
}

const addHighScore = function() {

  if (modeSet === 0) {

    highscoreSprint.push(PM.points);
    highscoreSprint.sort((a,b) => b-a)
    highscoreSprint.pop()
    
    for (let i=0; i<highscoreSprint.length; i++) {
      
      sprintHighscores[i].innerText = `${highscoreSprint[i]}`
      localStorage.setItem(`${i}s`,highscoreSprint[i])
      
    }

  } else {

    highscoreMarathon.push(PM.points);
    highscoreMarathon.sort((a,b) => b-a)
    highscoreMarathon.pop()

    for (let i=0; i<highscoreMarathon.length; i++) {
      marathonHighscores[i].innerText = `${highscoreMarathon[i]}`
      localStorage.setItem(`${i}m`,highscoreMarathon[i])
    }


  }
}


// !--------------------------------- 5. remove the pills once over them. ---------------------------------------!

const removePill = function() {

  let square = document.getElementById(`p${PM.x}-${PM.y}`)
  square.classList.add("active")
  

}

// !--------------------------------- 6. reset board when all collected -----------------------------------------!

const roundOver = function() {
    if (PM.pillCount===348) {

      setTimeout(() => {
        
    
      
        clearInterval(intervalId);
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
        resetPos();

        let resetPill = document.getElementsByClassName("pill")
        for (let i=0; i<resetPill.length; i++) {
            resetPill[i].classList.remove("active");
        }
        
        

        grid.splice(0,grid.length);
        base.forEach(arr => grid.push([...arr]));

    
        PM.pillCount = 0;

        // increase ghost speed if playing marathon mode 
        
        if (modeSet === 1) {
          ghostSpeed -= 20
        }
       
        // get ghosts moving for both
        
        moveGhost();
        
        

      }, 300);

        
        
    }
}


// !----------------------------- 7. start and stop game!! ----------------------------------------------!

btnStart.addEventListener("click", () => {

    playStart()

    setTimeout(() => {
      if (modeSet === 0) {
        newChronometer.startClick(printTime, setStop);
        btnStart.classList.toggle("no-click");
        moveGhost();
        playIntergalactic();
        } else {
        btnStart.classList.toggle("no-click");
        moveGhost(); 
        playInterstellar()
        }
      
    }, 2000);
   

    
    
});

function setStop() {

    

    if (modeSet === 0) {

      // !--------------------- Time trial mode ----------------------------!
      

      if (newChronometer.currentTime <= 0) {


        endIntergalactic();
        playEnd()
        
        // stop clocks and movement
        
          newChronometer.stopClick();
          clearInterval(intervalId);
          clearInterval(intervalId1);
          clearInterval(intervalId2);
          clearInterval(intervalId3);
          clearInterval(intervalId4);
          btnStart.classList.toggle("no-click");

          // alert score and end game 
            
          scoreText.innerText = `${PM.points}`
          gameOver.classList.toggle("active")
          addHighScore()
          
            
          
          
          // resest time
          
          newChronometer.resetClick();
          minDec.innerText = startMinDec;
          minUni.innerText = startMinUni;
          secDec.innerText = startSecDec;
          secUni.innerText = startSecUni;
          milDec.innerText = 0;
          milUni.innerText = 0;
          PM.points = 0;
          Score.innerText = 0;

          
      // reset board, pills and grid.

        resetPos();

        let resetPill = document.getElementsByClassName("pill")
          for (let i=0; i<resetPill.length; i++) {
              resetPill[i].classList.remove("active");
          }
          
        grid.splice(0,grid.length);
        base.forEach(arr => grid.push([...arr]));

        PM.pillCount = 0;
      }
        
    } else {
      
      // !----------------------------- Marathon mode -----------------------------!
        if (PM.life <= 0) {

          endInterstellar();
          playEnd();

        // stop movement

         // stop clocks and movement
        
         newChronometer.stopClick();
         clearInterval(intervalId);
         clearInterval(intervalId1);
         clearInterval(intervalId2);
         clearInterval(intervalId3);
         clearInterval(intervalId4);
         btnStart.classList.toggle("no-click");
       
        // alert score, reset score and end game 
              
        scoreText.innerText = `${PM.points}`
        gameOver.classList.toggle("active");
        addHighScore()

        PM.points = 0;
        Score.innerText = 0;
        ghostSpeed = baseGhostSpeed;

        // reset board, pills, grid and lives.

        resetPos();

        let resetPill = document.getElementsByClassName("pill")
          for (let i=0; i<resetPill.length; i++) {
              resetPill[i].classList.remove("active");
          }
          
        grid.splice(0,grid.length);
        base.forEach(arr => grid.push([...arr]));

        PM.pillCount = 0;
        PM.life = basePMLife

        life1.classList.remove("active");
        life2.classList.remove("active");
        life3.classList.remove("active");
     }

    }
  }
  
  // function setSplitBtn() {
      //   // ... your code goes here
      //   const li = document.createElement("li");
      //   li.innerText = newChronometer.splitClick();
      //   splits.appendChild(li);
      // }
      
    // Start/Stop Button

        

        
// !---------------------------------------- 8. ghost movement. ----------------------------------------------------------!

const dir = ["U", "D", "L", "R"]

function randomDir(dir) {
  return Math.floor(Math.random()* Math.floor(dir.length))
}

//                !--------------------- 8.a ghost 1 ----------------------!

const moveGhost1 = function () {

  intervalId1 = setInterval(() => {

    
    ghostHit()
    Score.innerText = PM.points


    if (g1.direction === "U") {

      if (grid[g1.x - 1][g1.y] === "O") {
        g1.direction = dir[randomDir(dir)];
      }  else {
        g1.x--;
        ghost1.style.gridRow = `${g1.x + 1}/20`;
      }
      // || grid[g1.x][g1.y-1] !== "O" || grid[g1.x][g1.y+1] !== "O"
    }

    if (g1.direction === "R") {
    
      if (grid[g1.x][g1.y+1] === "O") {
        g1.direction = dir[randomDir(dir)];
      } else {
        g1.y++;
        ghost1.style.gridColumn = `${g1.y + 1}/39`;
      }
    }

    if (g1.direction === "D") {

      if (grid[g1.x + 1][g1.y] === "O" ) {
        g1.direction = dir[randomDir(dir)];
      } else {
        g1.x++;
        ghost1.style.gridRow = `${g1.x + 1}/20`;
      }
      //|| grid[g1.x][g1.y-1] !== "O" || grid[g1.x][g1.y+1] !== "O"
    }

    if (g1.direction === "L") {
     
      if (grid[g1.x][g1.y - 1] === "O") {
        g1.direction = dir[randomDir(dir)];
      
      } else {
        g1.y--;
        ghost1.style.gridColumn = `${g1.y + 1}/39`;
      }
    }
    
  }, ghostSpeed);
};

//                !--------------------- 8.a ghost 2 ----------------------! 

const moveGhost2 = function() {

intervalId2 = setInterval(() => {

    
    ghostHit()
    Score.innerText = PM.points


    if (g2.direction === "U") {

      if (grid[g2.x - 1][g2.y] === "O") {
        g2.direction = dir[randomDir(dir)];
      }  else {
        g2.x--;
        ghost2.style.gridRow = `${g2.x + 1}/20`;
      }
      // || grid[g2.x][g2.y-1] !== "O" || grid[g2.x][g2.y+1] !== "O"
    }

    if (g2.direction === "R") {
    
      if (grid[g2.x][g2.y+1] === "O") {
        g2.direction = dir[randomDir(dir)];
      } else {
        g2.y++;
        ghost2.style.gridColumn = `${g2.y + 1}/39`;
      }
    }

    if (g2.direction === "D") {

      if (grid[g2.x + 1][g2.y] === "O" ) {
        g2.direction = dir[randomDir(dir)];
      } else {
        g2.x++;
        ghost2.style.gridRow = `${g2.x + 1}/20`;
      }
      //|| grid[g1.x][g1.y-1] !== "O" || grid[g1.x][g1.y+1] !== "O"
    }

    if (g2.direction === "L") {
     
      if (grid[g2.x][g2.y - 1] === "O") {
        g2.direction = dir[randomDir(dir)];
      
      } else {
        g2.y--;
        ghost2.style.gridColumn = `${g2.y + 1}/39`;
      }
    }
    
  }, ghostSpeed);
}

//                !--------------------- 8.a ghost 3 ----------------------!

const moveGhost3 = function () {

  let path = "UULLLLLLUULLLLLLUURRRRRRUULLLLUUUUUUURRRRUULLLLLLDDDDDLLLLDDDDDDDDDDRRRRDDRRRRRRRRRRRR";
  let counter = -1;
  
  intervalId3 = setInterval(() => {
  
    counter++;
    if (counter >= path.length) counter = -1;
     
    if (path[counter] === "U") {
      g3.x--;
      ghost3.style.gridRow = `${g3.x + 1}/20`;
    }
  
    if (path[counter] === "R") {
      g3.y++;
      ghost3.style.gridColumn = `${g3.y + 1}/39`;
    }
  
    if (path[counter] === "D") {
      g3.x++;
      ghost3.style.gridRow = `${g3.x + 1}/20`;
    }
  
    if (path[counter] === "L") {
      g3.y--;
      ghost3.style.gridColumn = `${g3.y + 1}/39`;
    }

  }, ghostSpeed);
        

}

//                !--------------------- 8.a ghost 4 ----------------------!

const moveGhost4 = function () {
       
  let path = "DDDDDRRUUUUUUUUUUUUUUURRDDDDDDRRUUUUUURRDDDDDDDDDDDDDDDLLUUUUUUULLDDDDDDDLLLLUUUUU";
  let counter = -1;
  
  intervalId4 = setInterval(() => {
  
    counter++;
    if (counter >= path.length) counter = -1;
     
    if (path[counter] === "U") {
      g4.x--;
      ghost4.style.gridRow = `${g4.x + 1}/20`;
    }
  
    if (path[counter] === "R") {
      g4.y++;
      ghost4.style.gridColumn = `${g4.y + 1}/39`;
    }
  
    if (path[counter] === "D") {
      g4.x++;
      ghost4.style.gridRow = `${g4.x + 1}/20`;
    }
  
    if (path[counter] === "L") {
      g4.y--;
      ghost4.style.gridColumn = `${g4.y + 1}/39`;
    }

  }, ghostSpeed);
        

}


const moveGhost = function() {
  moveGhost1();
  moveGhost2();
  moveGhost3();
  moveGhost4();


}



// !------------------------------------------- 8. ghost hit -----------------------------------------------------------!

const ghostHit = function () {

  switch (PM.direction) {
    
    case "U":

      if ((PM.x+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y) === (g4.x+" "+g4.y) ||
      (PM.x+1+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x+1+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x+1+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x+1+" "+PM.y) === (g4.x+" "+g4.y) ) {
          
          playHit()
          if (modeSet === 0) {
          PM.points -= 500
          }

          clearInterval(intervalId);
          clearInterval(intervalId1);
          clearInterval(intervalId2);
          clearInterval(intervalId3);
          clearInterval(intervalId4);
          resetPos();
          moveGhost();

          // for marathon mode

          if (modeSet === 1) {

            PM.life --
            if (PM.life === 2) {
              life3.classList.add("active");
            } else if (PM.life === 1) {
              life2.classList.add("active");
            } else if (PM.life === 0) {
              life1.classList.add("active");
            }
          }


      }

      break;

    case "R":

      if ((PM.x+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y) === (g4.x+" "+g4.y) ||
      (PM.x+" "+PM.y-1) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y-1) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y-1) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y-1) === (g4.x+" "+g4.y) ) {
        
        playHit()
          if (modeSet === 0) {
          PM.points -= 500
          }

        clearInterval(intervalId);
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
        resetPos();
        moveGhost();

        // for marathon mode

        if (modeSet === 1) {
          PM.life --
          if (PM.life === 2) {
            life3.classList.add("active");
          } else if (PM.life === 1) {
            life2.classList.add("active");
          } else if (PM.life === 0) {
            life1.classList.add("active");
          }
        }


      }

      break;

    case "D":

      if ((PM.x+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y) === (g4.x+" "+g4.y) ||
      (PM.x-1+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x-1+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x-1+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x-1+" "+PM.y) === (g4.x+" "+g4.y) ) {
        
        playHit()
          if (modeSet === 0) {
          PM.points -= 500
          }

        clearInterval(intervalId);
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
        resetPos();
        moveGhost();

        // for marathon mode

        if (modeSet === 1) {
          PM.life --
          if (PM.life === 2) {
            life3.classList.add("active");
          } else if (PM.life === 1) {
            life2.classList.add("active");
          } else if (PM.life === 0) {
            life1.classList.add("active");
          }
        }



      }

      break;

    case "L":
      if ((PM.x+" "+PM.y) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y) === (g4.x+" "+g4.y) ||
      (PM.x+" "+PM.y+1) === (g1.x+" "+g1.y) || (PM.x+" "+PM.y+1) === (g2.x+" "+g2.y) || (PM.x+" "+PM.y+1) === (g3.x+" "+g3.y) || (PM.x+" "+PM.y+1) === (g4.x+" "+g4.y) ){
      
        
        playHit()
          if (modeSet === 0) {
          PM.points -= 500
          }

        clearInterval(intervalId);
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
        resetPos();
        moveGhost();

        // for marathon mode

        if (modeSet === 1) {
          PM.life --
          if (PM.life === 2) {
            life3.classList.add("active");
          } else if (PM.life === 1) {
            life2.classList.add("active");
          } else if (PM.life === 0) {
            life1.classList.add("active");
          }
        }


      break;
  }
}
 
  setStop()

}
    

// !---------------------=------------------- 10. Tutorial functions -----------------------------------------------------------! 

const tutorial = document.getElementById("tutorial")
const btnGotIt = document.getElementById("got-it")

btnTutorial.onclick = () => {
  tutorial.classList.toggle("active")
}

btnGotIt.onclick = () => {
  clearInterval(intervalId2Tut)
  clearInterval(intervalIdTut)
  resetPosTut()
  
  let resetPill = document.getElementsByClassName("pillTut")
      for (let i=0; i<resetPill.length; i++) {
          resetPill[i].classList.remove("active");
      }
      
      gridTut.splice(0,10);
      baseTut.forEach(arr => gridTut.push([...arr]));
      PMTut.pillCount = 0;

  tutorial.classList.toggle("active")
  btnStartTut.classList.toggle("no-click");
}


const PMTut = new Character("PacMan", 1, 4);
const g1Tut = new Character("ghost1Tut", 8, 8);


const baseTut = [
  ['O','O','O','O','O','O','O','O','O','O'],
  ['O','.','.','.',' ','.','.','.','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','O','O','O','O','O','O','.','O'],
  ['O','.','.','.','.','.','.','.','.','O'],
  ['O','O','O','O','O','O','O','O','O','O']
]

let gridTut = [];
baseTut.forEach(arr => gridTut.push([...arr]))

const PacManTut = document.getElementById("PMTut");
const ghostTut = document.getElementById("ghostTut")
const ScoreTut = document.getElementById("scoreTut");
const btnStartTut = document.getElementById("startTut")

let intervalIdTut = 0;
let intervalId2Tut = 0;


let basePMTutX = PMTut.x
let basePMTutY = PMTut.y

let baseg1TutX = g1Tut.x
let baseg1TutY = g1Tut.y

const resetPosTut = function() {

PacManTut.style.backgroundImage = "url(./img/spaceman-still-down-tutorial.png)"

PacManTut.style.gridRow = `${basePMTutX+1}/10`;
PacManTut.style.gridColumn = `${basePMTutY+1}/10`;

PMTut.x = basePMTutX;
PMTut.y = basePMTutY;

ghostTut.style.gridRow = `${baseg1TutX+1}/20`;
ghostTut.style.gridColumn = `${baseg1TutY+1}/39`;

g1Tut.x = baseg1TutX;
g1Tut.y = baseg1TutY;
g1Tut.direction = "U"

}

resetPosTut()




// directions

document.addEventListener('keydown', function(e) {
    
  if (btnStartTut.classList.contains("no-click")) {
      
      switch (e.key) {
          case "ArrowLeft":
              
    if (gridTut[PMTut.x][PMTut.y-1]!=='O') {
        clearInterval(intervalIdTut)
        PMTut.direction = "L";
        moveForwardTut()
        
      };
    break;
  
  case "ArrowUp":
      
      if (gridTut[PMTut.x-1][PMTut.y]!=='O') {
          clearInterval(intervalIdTut)
          PMTut.direction = "U";
          moveForwardTut()
      };
      break;
      
      case "ArrowRight":
          
    if (gridTut[PMTut.x][PMTut.y+1]!=='O') {
      clearInterval(intervalIdTut)
      PMTut.direction = "R";
      moveForwardTut()
  };
    break;

    case "ArrowDown":
        
    if (gridTut[PMTut.x+1][PMTut.y]!=='O') { 
        clearInterval(intervalIdTut)
        PMTut.direction = "D";
        moveForwardTut()
      };
      break;
      
  }
}
})

// movement

const moveForwardTut = function () {
  clearInterval(intervalIdTut);

  intervalIdTut = setInterval(() => {

    

    switch (PMTut.direction) {
      case "U":
        if (PMTut.x === 0) {
          clearInterval(intervalIdTut);
        } else if (gridTut[PMTut.x - 1][PMTut.y] === "O") {
          clearInterval(intervalIdTut);
        } else {
          PMTut.x--;
          PacManTut.style.gridRow = `${PMTut.x + 1}/10`;
          PacManTut.style.backgroundImage = "url(./img/spaceman-run-up-tutorial.gif)"

          
          removePillTut();
          scorePointsTut();
          roundOverTut();
          
        }
        break;

      case "R":
        if (PMTut.y === gridTut[0].length - 1) {
          clearInterval(intervalIdTut);
        } else if (gridTut[PMTut.x][PMTut.y + 1] === "O") {
          clearInterval(intervalIdTut);
        } else {
          PMTut.y++;
          PacManTut.style.gridColumn = `${PMTut.y + 1}/10`;
          PacManTut.style.backgroundImage = "url(./img/spaceman-run-left-tutorial.gif)"

          
          removePillTut();
          scorePointsTut();
          roundOverTut();
          
        }
        break;

      case "D":
        if (PMTut.x === gridTut.length - 1) {
          clearInterval(intervalIdTut);
        } else if (gridTut[PMTut.x + 1][PMTut.y] === "O") {
          clearInterval(intervalIdTut);
        } else {
          PMTut.x++;
          PacManTut.style.gridRow = `${PMTut.x + 1}/10`;
          PacManTut.style.backgroundImage = "url(./img/spaceman-run-down-tutorial.gif)"

          
          removePillTut();
          scorePointsTut();
          roundOverTut();
          
        }
        break;

      case "L":
        if (PMTut.y === 0) {
          clearInterval(intervalIdTut);
        } else if (gridTut[PMTut.x][PMTut.y - 1] === "O") {
          clearInterval(intervalIdTut);
        } else {
          PMTut.y--;
          PacManTut.style.gridColumn = `${PMTut.y + 1}/10`;
          PacManTut.style.backgroundImage = "url(./img/spaceman-run-left-tutorial.gif)"
          
          
          removePillTut();
          scorePointsTut();
          roundOverTut();

        }
        break;
    }

  }, 175);
};


// Scoring 

const scorePointsTut = function() {
  if (gridTut[PMTut.x][PMTut.y]==='.') {
  PMTut.points += 10;
  PMTut.pillCount ++;
  gridTut[PMTut.x][PMTut.y] = ' ';
  
  };
}

// Remove pill

const removePillTut = function() {

  let square = document.getElementById(`t${PMTut.x}-${PMTut.y}`)
  square.classList.add("active")
  

}

// Reset board 



const roundOverTut = function() {
  if (PMTut.pillCount===27) {

    setTimeout(() => {
      
    
      clearInterval(intervalIdTut);

      resetPosTut()
      
      let resetPill = document.getElementsByClassName("pillTut")
      for (let i=0; i<resetPill.length; i++) {
          resetPill[i].classList.remove("active");
      }
      
      gridTut.splice(0,10);
      baseTut.forEach(arr => gridTut.push([...arr]));
      PMTut.pillCount = 0;

      
    }, 400);
      
  }
}

// start 


btnStartTut.addEventListener("click", () => {

  btnStartTut.classList.toggle("no-click");
  moveGhostTut();
  
});


//ghost movement 

const moveGhostTut = function () {
      
      
    
  intervalId2Tut = setInterval(() => {

    ghostHitTut()
    ScoreTut.innerText = PMTut.points
  

    if (g1Tut.direction === "U") {
      if (gridTut[g1Tut.x - 1][g1Tut.y] === "O") {
        g1Tut.direction = "L";
      } else {
        g1Tut.x--;
        ghostTut.style.gridRow = `${g1Tut.x + 1}/10`;
      }
    }

    if (g1Tut.direction === "R") {
      if (gridTut[g1Tut.x][g1Tut.y + 1] === "O") {
        g1Tut.direction = "U";
      } else {
        g1Tut.y++;
        ghostTut.style.gridColumn = `${g1Tut.y + 1}/10`;
      }
    }

    if (g1Tut.direction === "D") {
      if (gridTut[g1Tut.x + 1][g1Tut.y] === "O") {
        g1Tut.direction = "R";
      }  else {
        g1Tut.x++;
        ghostTut.style.gridRow = `${g1Tut.x + 1}/10`;
      }
    }

    if (g1Tut.direction === "L") {
      if (gridTut[g1Tut.x][g1Tut.y - 1] === "O") {
        g1Tut.direction = "D";
      } else {
        g1Tut.y--;
        ghostTut.style.gridColumn = `${g1Tut.y + 1}/10`;
      }
    }
    
  }, 300);
};

// ghost hit 

const ghostHitTut = function () {

  switch (PMTut.direction) {
    
    case "U":

      if ((PMTut.x+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y) || (PMTut.x+1+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y) ){
          
        PMTut.points -= 200
        playHit();

        clearInterval(intervalIdTut);
        clearInterval(intervalId2Tut);
        
        resetPosTut();
        moveGhostTut();

          
      }

      break;

    case "R":

      if ((PMTut.x+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y) || (PMTut.x+" "+PMTut.y-1) === (g1Tut.x+" "+g1Tut.y) ) {
        
        PMTut.points -= 200
        playHit();

        clearInterval(intervalIdTut);
        clearInterval(intervalId2Tut);
        
        resetPosTut();
        moveGhostTut();

      
      }

      break;

    case "D":

      if ((PMTut.x+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y) || (PMTut.x-1+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y)) {
        
        PMTut.points -= 200
        playHit();

        clearInterval(intervalIdTut);
        clearInterval(intervalId2Tut);
        
        resetPosTut();
        moveGhostTut();

   
      }

      break;

    case "L":
      if ((PMTut.x+" "+PMTut.y) === (g1Tut.x+" "+g1Tut.y) ||  (PMTut.x+" "+PMTut.y+1) === (g1Tut.x+" "+g1Tut.y)) {
      
        
        PMTut.points -= 200
        playHit();

        clearInterval(intervalIdTut);
        clearInterval(intervalId2Tut);
        
        resetPosTut();
        moveGhostTut();

      }

      break;

  }

}

// !---------------------=------------------- Code Graveyard -----------------------------------------------------------! 
  
//   case 'R' :
//       if (ghost.y===grid[0].length-1) {
//         clearInterval(intervalIdGhost);
//     } else if (grid[ghost.x][ghost.y+1]==='O') {
//         clearInterval(intervalIdGhost);
//     } else if (grid[ghost.x][ghost.y+1]==='V') {
//         clearInterval(intervalIdGhost);
//     } else {

//       ghost.y++;
//       PacMan.style.gridColumn = `${ghost.y+1}/10`;

//       removePill();
//       scorePoints();
//       roundOver()
      

//       }
//       break;


//   case 'D' :
//      if (ghost.x===grid.length-1) {
    //       clearInterval(intervalIdGhost)
    //     } else if (grid[ghost.x+1][ghost.y]==='O') {
        //       clearInterval(intervalIdGhost)
        //     } else if (grid[ghost.x+1][ghost.y]==='V') {
            //       clearInterval(intervalIdGhost)
            //     } else {
                
                //       ghost.x++
                //       PacMan.style.gridRow = `${ghost.x+1}/10`
                
                
                //       }
                //       break;
                
                
                //   case 'L' :
                //      if (ghost.y===0) {
                    //     } else if (grid[ghost.x][ghost.y-1]==='O') {
                        //       clearInterval(intervalIdGhost)
                        //     } else if (grid[ghost.x][ghost.y-1]==='V') {
                            //       clearInterval(intervalIdGhost)
                            //     } else {
                                
                                //       ghost.y--
                                //       ghost1.style.gridColumn = `${ghost.y+1}/10`
                                
                                
                                //     }
                                //     break;
                                
                                
                            
                            
                            // g1.direction = 'U';
                            // let intervalIdGhost = setInterval(ghostMove(g1), 175);

// 2.a direction change with buttons.
                            
                            
    // up.onclick = () => {
    
    //   if (grid[PM.x-1][PM.y]!=='O') {
    //     clearInterval(intervalId)
    //     PM.direction = "U";
    //     console.log(PM.direction);
    //     moveForward()
    //     };
        
    //   };
        
    // down.onclick = () => {
        
    //   if (grid[PM.x+1][PM.y]!=='O') { 
    //     clearInterval(intervalId)
    //     PM.direction = "D";
    //     console.log(PM.direction);
    //     moveForward()
    //    };
        
    //   }
    
    // left.onclick = () => {
        
    //   if (grid[PM.x][PM.y-1]!=='O') {
    //     clearInterval(intervalId)
    //     PM.direction = "L";
    //     console.log(PM.direction);
    //     moveForward()
    //    };
    
    //   };
        
    // right.onclick = () => {
        
        
    //   if (grid[PM.x][PM.y+1]!=='O') {
    //     clearInterval(intervalId)
    //     PM.direction = "R";
    //     console.log(PM.direction);
    //     moveForward()
    //    };
        
//     // };
//     grid.splice(0,grid.length);
//     base.forEach(arr => grid.push([...arr]));
//     console.log(grid)
//     PM.pillCount = 0;
    
//   }
// }




