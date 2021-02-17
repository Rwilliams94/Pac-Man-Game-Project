// PACMAN MOVEMENT

// !----------------------------------------- Creating the clock ---------------------------------------------!

export class Chronometer {
  constructor() {
    this.currentTime = 6000;
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



// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");


function printTime() {
  ghostHit()
  Score.innerText = PM.points
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

const PM = new Character("PacMan", 1, 4);
const g1 = new Character("ghost1", 8, 8);



// 1a. grid.

const base = [
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

let grid = [];
base.forEach(arr => grid.push([...arr]))

  


 
// 1.b set all the element links


  const PacMan = document.getElementById("PM");
  const ghost1 = document.getElementById("ghost1")
  const Score = document.getElementById("score");
  const btnStart = document.getElementById("start")
  let intervalId = 0;
  let intervalId2 = 0;
  

// 1.c set the starting postions.

let basePMX = PM.x
let basePMY = PM.y

let baseG1X = g1.x
let baseG1Y = g1.y


PacMan.style.gridRow = `${basePMX+1}/10`;
PacMan.style.gridColumn = `${basePMY+1}/10`;

ghost1.style.gridRow = `${baseG1X+1}/10`;
ghost1.style.gridColumn = `${baseG1Y+1}/10`;
g1.direction = "U"




// !------------------------------- 2. move directions with arrows. ---------------------------------------------!

// 2. movement with arrows can only start once the timer has started. Start button must be pressed otherwise no movement. 

document.addEventListener('keydown', function(e) {
    
    if (btnStart.classList.contains("no-click")) {
        
        switch (e.key) {
            case "ArrowLeft":
                
      if (grid[PM.x][PM.y-1]!=='O') {
          clearInterval(intervalId)
          PM.direction = "L";
          console.log(PM.direction);
          moveForward()
          
        };
      break;
    
    case "ArrowUp":
        
        if (grid[PM.x-1][PM.y]!=='O') {
            clearInterval(intervalId)
            PM.direction = "U";
            console.log(PM.direction);
            moveForward()
        };
        break;
        
        case "ArrowRight":
            
      if (grid[PM.x][PM.y+1]!=='O') {
        clearInterval(intervalId)
        PM.direction = "R";
        console.log(PM.direction);
        moveForward()
    };
      break;

      case "ArrowDown":
          
      if (grid[PM.x+1][PM.y]!=='O') { 
          clearInterval(intervalId)
          PM.direction = "D";
          console.log(PM.direction);
          moveForward()
        };
        break;
        
    }
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
        } else if (grid[PM.x - 1][PM.y] === "V") {
          clearInterval(intervalId);
        } else {
          PM.x--;
          PacMan.style.gridRow = `${PM.x + 1}/10`;

          
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
        } else if (grid[PM.x][PM.y + 1] === "V") {
          clearInterval(intervalId);
        } else {
          PM.y++;
          PacMan.style.gridColumn = `${PM.y + 1}/10`;

          
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
        } else if (grid[PM.x + 1][PM.y] === "V") {
          clearInterval(intervalId);
        } else {
          PM.x++;
          PacMan.style.gridRow = `${PM.x + 1}/10`;

          
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;

      case "L":
        if (PM.y === 0) {
        } else if (grid[PM.x][PM.y - 1] === "O") {
          clearInterval(intervalId);
        } else if (grid[PM.x][PM.y - 1] === "V") {
          clearInterval(intervalId);
        } else {
          PM.y--;
          PacMan.style.gridColumn = `${PM.y + 1}/10`;
          
          
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
    if (PM.pillCount===27) {
      
        clearInterval(intervalId);

        PacMan.style.gridRow = `${basePMX+1}/10`
        PacMan.style.gridColumn = `${basePMY+1}/10`

        PM.x = basePMX;
        PM.y = basePMY;

        ghost1.style.gridRow = `${baseG1X+1}/10`;
        ghost1.style.gridColumn = `${baseG1Y+1}/10`;

        g1.x = baseG1X;
        g1.y = baseG1Y;
        g1.direction = "U"
        
        let resetPill = document.getElementsByClassName("pill")
        for (let i=0; i<resetPill.length; i++) {
            resetPill[i].classList.remove("active");
        }
        
        grid.splice(0,10);
        base.forEach(arr => grid.push([...arr]));
        console.log(grid)
        PM.pillCount = 0;
        
    }
}


// !----------------------------- start and stop game!! ----------------------------------------------!

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
        btnStart.classList.toggle("no-click");
        clearInterval(intervalId2);

        // alert score and end game 
        
        alert(`GAME OVER! you scored ${document.getElementById("score").innerText}`);
        
        // resest time
        
        newChronometer.resetClick();
      minDec.innerText = 0;
      minUni.innerText = 1;
      secDec.innerText = 0;
      secUni.innerText = 0;
      milDec.innerText = 0;
      milUni.innerText = 0;
      PM.points = 0;
      Score.innerText = 0;
        
    // reset board, pills and grid.

    PacMan.style.gridRow = `${basePMX+1}/10`
    PacMan.style.gridColumn = `${basePMY+1}/10`

    PM.x = basePMX;
    PM.y = basePMY;

    ghost1.style.gridRow = `${baseG1X+1}/10`;
    ghost1.style.gridColumn = `${baseG1Y+1}/10`;

    g1.x = baseG1X;
    g1.y = baseG1Y;
    g1.direction = "U"


    
      let resetPill = document.getElementsByClassName("pill")
        for (let i=0; i<resetPill.length; i++) {
            resetPill[i].classList.remove("active");
        }
        
      grid.splice(0,10);
      base.forEach(arr => grid.push([...arr]));
      console.log(grid)
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

        

        
// !---------------------------------------- 7. ghost movement. ----------------------------------------------------------!
      
 
        
      // const ghostMove = function() {
            
      //   let counter = 0

      //   setInterval(() => {
      //     if (counter < 7) {
      //     g1.x--;
      //     counter++;
      //     ghost1.style.gridRow = `${g1.x+1}/10`;
      //     } else if (counter < 14) {
      //       g1.x++;
      //     counter++;
      //     ghost1.style.gridRow = `${g1.x+1}/10`
      //     } else {
      //       counter = 0
      //     }
          
      //   }, 300);}

                
const moveGhost = function () {
      
      
    
      intervalId2 = setInterval(() => {

        
      

        if (g1.direction === "U") {
          if (grid[g1.x - 1][g1.y] === "O") {
            g1.direction = "L";
          } else if (grid[g1.x - 1][g1.y] === "V") {
            clearInterval(intervalId);
          } else {
            g1.x--;
            ghost1.style.gridRow = `${g1.x + 1}/10`;
          }
        }

        if (g1.direction === "R") {
          if (grid[g1.x][g1.y + 1] === "O") {
            g1.direction = "U";
          } else if (grid[g1.x][g1.y + 1] === "V") {
            clearInterval(intervalId);
          } else {
            g1.y++;
            ghost1.style.gridColumn = `${g1.y + 1}/10`;
          }
        }

        if (g1.direction === "D") {
          if (grid[g1.x + 1][g1.y] === "O") {
            g1.direction = "R";
          } else if (grid[g1.x + 1][g1.y] === "V") {
            clearInterval(intervalId);
          } else {
            g1.x++;
            ghost1.style.gridRow = `${g1.x + 1}/10`;
          }
        }

        if (g1.direction === "L") {
          if (grid[g1.x][g1.y - 1] === "O") {
            g1.direction = "D";
          } else if (grid[g1.x][g1.y - 1] === "V") {
            clearInterval(intervalId);
          } else {
            g1.y--;
            ghost1.style.gridColumn = `${g1.y + 1}/10`;
          }
        }
        
      }, 300);
    };
  
// !------------------------------------------- 8. ghost hit -----------------------------------------------------------!

const ghostHit = function () {
 
  if (g1.x===PM.x && g1.y===PM.y) {
   
    console.log(`${g1.x} and ${PM.x}`)
    console.log(`${g1.x} and ${PM.x}`);
    
    PM.points -= 100
    clearInterval(intervalId);
    clearInterval(intervalId2);
    PacMan.style.gridRow = `${basePMX+1}/10`
    PacMan.style.gridColumn = `${basePMY+1}/10`

    PM.x = basePMX;
    PM.y = basePMY;

    ghost1.style.gridRow = `${baseG1X+1}/10`;
    ghost1.style.gridColumn = `${baseG1Y+1}/10`;

    g1.x = baseG1X;
    g1.y = baseG1Y;
    g1.direction = "U"
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
        
    // };