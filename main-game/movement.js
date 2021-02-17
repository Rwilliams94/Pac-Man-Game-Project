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
    if (this.currentTime === 0) clearInterval(this.intervalId);
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
    }

 
}

const PM = new Character("PacMan", 9, 19);
const g1 = new Character("ghost1", 9, 9);
const g2 = new Character("ghost2", 3, 27);
const g3 = new Character("ghost3", 18, 37);
const g4 = new Character("ghost4", 11, 13);


// 1a. grid.

// const practiceGrid = [
//   ['O','O','O','O','O','O','O','O','O','O'],
//   ['O','P','P','P','P','P','P','P','P','O'],
//   ['O','P','O','O','P','O','O','O','P','O'],
//   ['O','P','O','O','P','O','O','O','P','O'],
//   ['O','P','O','O','I','O','O','O','P','O'],
//   ['O','P','O','O','O','O','O','O','P','O'],
//   ['O','P','P','P','P','P','O','O','P','O'],
//   ['O','P','O','O','O','P','O','O','P','O'],
//   ['O','P','O','O','O','P','P','P','P','O'],
//   ['O','O','O','O','O','O','O','O','O','O']
// ]


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
 


 
// 1.b set all the element links


  const PacMan = document.getElementById("PM");
  const ghost1 = document.getElementById("ghost1")
  const Score = document.getElementById("score");
  const btnStart = document.getElementById("start")
  const joystick = document.getElementById("joystick")
  let intervalId = 0;
  let intervalId1 = 0;
  let intervalId2 = 0;
  let intervalId3 = 0;
  let intervalId4 = 0;
  

  

// 1.c set the starting postions.

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
const startMinUni = 1;
const startSecDec = 0;
const startSecUni = 0;
 
let time = startMinDec*60000 + startMinUni*6000 + startSecDec*1000 + startSecUni*100;
newChronometer.currentTime = time;
minDec.innerText = startMinDec;
minUni.innerText = startMinUni;
secDec.innerText = startSecDec;
secUni.innerText = startSecUni;
milDec.innerText = 0;
milUni.innerText = 0;



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
  }, 175);
};



// !---------------------------------- 4. update the score each time ---------------------------------------!

const scorePoints = function() {
    if (grid[PM.x][PM.y]==='.') {
    PM.points += 10;
    PM.pillCount ++;
    grid[PM.x][PM.y] = ' ';
    };
}

// !--------------------------------- 5. remove the pills once over them. ---------------------------------------!

const removePill = function() {

  let square = document.getElementById(`p${PM.x}-${PM.y}`)
  square.classList.add("active")
  

}

// !--------------------------------- 6. reset board when all collected -----------------------------------------!

const roundOver = function() {
    if (PM.pillCount===348) {
      
        clearInterval(intervalId);
        resetPos();
        

        let resetPill = document.getElementsByClassName("pill")
        for (let i=0; i<resetPill.length; i++) {
            resetPill[i].classList.remove("active");
        }
        
        grid.splice(0,grid.length);
        base.forEach(arr => grid.push([...arr]));

    
        PM.pillCount = 0;
        
    }
}


// !----------------------------- 7. start and stop game!! ----------------------------------------------!

btnStart.addEventListener("click", () => {
    // ... your code goes here
    newChronometer.startClick(printTime, setStop);
    btnStart.classList.toggle("no-click");
    moveGhost();
    
});

function setStop() {
    // ... your code goes here
    if (newChronometer.currentTime <= 0) {
        
        // stop clocks and movement
        
        newChronometer.stopClick();
        clearInterval(intervalId);
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
        btnStart.classList.toggle("no-click");

        // alert score and end game 
        
        alert(`GAME OVER! you scored ${document.getElementById("score").innerText}`);
        
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
        
    };
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
    
  }, 200);
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
    
  }, 200);
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

  }, 200);
        

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

  }, 200);
        

}


const moveGhost = function() {
  moveGhost1();
  moveGhost2();
  moveGhost3();
  moveGhost4();


}

    
// !------------------------------------------- 8. ghost hit -----------------------------------------------------------!

const ghostHit = function () {
 
  if (g1.x===PM.x && g1.y===PM.y) {
     
    PM.points -= 500
    clearInterval(intervalId);
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    resetPos();
    moveGhost();

  }

  if (g2.x===PM.x && g2.y===PM.y) {
     
    PM.points -= 500
    clearInterval(intervalId);
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    resetPos();
    moveGhost();

  }

if (g3.x===PM.x && g3.y===PM.y) {
     
    PM.points -= 500
    clearInterval(intervalId);
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    resetPos();
    moveGhost();

  }

if (g4.x===PM.x && g4.y===PM.y) {
     
    PM.points -= 500
    clearInterval(intervalId);
    clearInterval(intervalId1);
    clearInterval(intervalId2);
    clearInterval(intervalId3);
    clearInterval(intervalId4);
    resetPos();
    moveGhost();

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




