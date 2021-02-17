// // PacMan MOVEMENT

// // !----------------------------------------- Creating the clock ---------------------------------------------!

// class Chronometer {
//   constructor() {
//     this.currentTime = 6000;
//     this.intervalId = 0;
//   }
//   startClick(callback, stop) {
//     const intervalId = setInterval(() => {
//       this.currentTime --;
//       callback();
//       stop()
//     },10);
//     this.intervalId = intervalId;
//    }
  
//   getMinutes() {
//      let minutes = this.currentTime / 6000; 
//      return Math.floor(minutes);
//   }

//   getSeconds() {
//     let seconds = (this.currentTime % 6000)/100;
//     return Math.floor(seconds);
//   }

//   getMilliseconds() {
//     let milliseconds = this.currentTime % 100;
//     return milliseconds;
//   }

//   twoDigitsNumber(num) {
//     if (num < 10) {
//       return `0${num.toString()}`;
//     } else {
//       return num.toString();
//     }
//   }

//   stopClick() {
//     if (this.currentTime === 0) clearInterval(this.intervalId);
//   }

//   resetClick() {
//     this.currentTime =1000;
//   }
 
// }


// // !----------------------------- Printing the time!! ----------------------------------------------!

// const newChronometer = new Chronometer();

// // get the buttons:



// // get the DOM elements that will serve us to display the time:
// let minDec = document.getElementById("minDec");
// let minUni = document.getElementById("minUni");
// let secDec = document.getElementById("secDec");
// let secUni = document.getElementById("secUni");
// let milDec = document.getElementById("milDec");
// let milUni = document.getElementById("milUni");


// function printTime() {
 
//   printSeconds();
//   printMinutes();
//   printMilliseconds();
// }

// function printMinutes() {
//   // ... your code goes here

//   let mins = newChronometer
//     .twoDigitsNumber(newChronometer.getMinutes())
//     .split("");
//   minDec.innerText = mins[0];
//   minUni.innerText = mins[1];
// }

// function printSeconds() {
//   // ... your code goes here
//   let secs = newChronometer
//     .twoDigitsNumber(newChronometer.getSeconds())
//     .split("");

//   secDec.innerText = secs[0];
//   secUni.innerText = secs[1];
// }

// // ==> BONUS
// function printMilliseconds() {
//   // ... your code goes here
//   let mSecs = newChronometer
//     .twoDigitsNumber(newChronometer.getMilliseconds())
//     .split("");
//   milDec.innerText = mSecs[0];
//   milUni.innerText = mSecs[1];
// }


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

const PMTut = new Character("PacMan", 1, 4);
const g1Tut = new Character("ghost1", 8, 8);



// 1a. grid.

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
baseTut.forEach(arr => grid.push([...arr]))

  


 
// 1.b set all the element links


  const PacManTut = document.getElementById("PMTut");
  const ghostTut = document.getElementById("ghostTut")
  const ScoreTut = document.getElementById("scoreTut");
  const btnStartTut = document.getElementById("startTut")
  let intervalIdTut = 0;
  let intervalId2Tut = 0;
  

// 1.c set the starting postions.

let basePMTutX = PMTut.x
let basePMTutY = PMTut.y

let baseg1TutX = g1Tut.x
let baseg1TutY = g1Tut.y


PacManTut.style.gridRow = `${basePMX+1}/10`;
PacManTut.style.gridColumn = `${basePMY+1}/10`;

ghost1.style.gridRow = `${baseg1TutX+1}/10`;
ghost1.style.gridColumn = `${baseg1TutY+1}/10`;
g1Tut.direction = "U"




// !------------------------------- 2. move directions with arrows. ---------------------------------------------!

// 2. movement with arrows can only start once the timer has started. Start button must be pressed otherwise no movement. 

document.addEventListener('keydown', function(e) {
    
    if (btnStartTut.classList.contains("no-click")) {
        
        switch (e.key) {
            case "ArrowLeft":
                
      if (grid[PMTut.x][PMTut.y-1]!=='O') {
          clearInterval(intervalId)
          PMTut.direction = "L";
          console.log(PMTut.direction);
          moveForward()
          
        };
      break;
    
    case "ArrowUp":
        
        if (grid[PMTut.x-1][PMTut.y]!=='O') {
            clearInterval(intervalId)
            PMTut.direction = "U";
            console.log(PMTut.direction);
            moveForward()
        };
        break;
        
        case "ArrowRight":
            
      if (grid[PMTut.x][PMTut.y+1]!=='O') {
        clearInterval(intervalId)
        PMTut.direction = "R";
        console.log(PMTut.direction);
        moveForward()
    };
      break;

      case "ArrowDown":
          
      if (grid[PMTut.x+1][PMTut.y]!=='O') { 
          clearInterval(intervalId)
          PMTut.direction = "D";
          console.log(PMTut.direction);
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

    

    switch (PMTut.direction) {
      case "U":
        if (PMTut.x === 0) {
          clearInterval(intervalId);
        } else if (grid[PMTut.x - 1][PMTut.y] === "O") {
          clearInterval(intervalId);
        } else if (grid[PMTut.x - 1][PMTut.y] === "V") {
          clearInterval(intervalId);
        } else {
          PMTut.x--;
          PacManTut.style.gridRow = `${PMTut.x + 1}/10`;

          
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;

      case "R":
        if (PMTut.y === grid[0].length - 1) {
          clearInterval(intervalId);
        } else if (grid[PMTut.x][PMTut.y + 1] === "O") {
          clearInterval(intervalId);
        } else if (grid[PMTut.x][PMTut.y + 1] === "V") {
          clearInterval(intervalId);
        } else {
          PMTut.y++;
          PacManTut.style.gridColumn = `${PMTut.y + 1}/10`;

          
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;

      case "D":
        if (PMTut.x === grid.length - 1) {
          clearInterval(intervalId);
        } else if (grid[PMTut.x + 1][PMTut.y] === "O") {
          clearInterval(intervalId);
        } else if (grid[PMTut.x + 1][PMTut.y] === "V") {
          clearInterval(intervalId);
        } else {
          PMTut.x++;
          PacManTut.style.gridRow = `${PMTut.x + 1}/10`;

          
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;

      case "L":
        if (PMTut.y === 0) {
        } else if (grid[PMTut.x][PMTut.y - 1] === "O") {
          clearInterval(intervalId);
        } else if (grid[PMTut.x][PMTut.y - 1] === "V") {
          clearInterval(intervalId);
        } else {
          PMTut.y--;
          PacManTut.style.gridColumn = `${PMTut.y + 1}/10`;
          
          
          removePill();
          scorePoints();
          roundOver();
          
        }
        break;
    }
    // console.log(PMTut.pillCount)
    // PMTut.route.push({x:PMTut.x, y:PMTut.y})
  }, 175);
};



// !---------------------------------- 4. update the score each time ---------------------------------------!

const scorePoints = function() {
    if (grid[PMTut.x][PMTut.y]==='.') {
    PMTut.points += 10;
    PMTut.pillCount ++;
    grid[PMTut.x][PMTut.y] = ' ';
    
    };
}

// !--------------------------------- 5. remove the pills once over them. ---------------------------------------!

const removePill = function() {

  let square = document.getElementById(`p${PMTut.x}-${PMTut.y}`)
  square.classList.add("active")
  

}

// !--------------------------------- 6. reset board when all collected -----------------------------------------!




const roundOver = function() {
    if (PMTut.pillCount===27) {
      
        clearInterval(intervalId);

        PacManTut.style.gridRow = `${basePMX+1}/10`
        PacManTut.style.gridColumn = `${basePMY+1}/10`

        PMTut.x = basePMX;
        PMTut.y = basePMY;

        ghost1.style.gridRow = `${baseg1TutX+1}/10`;
        ghost1.style.gridColumn = `${baseg1TutY+1}/10`;

        g1Tut.x = baseg1TutX;
        g1Tut.y = baseg1TutY;
        g1Tut.direction = "U"
        
        let resetPill = document.getElementsByClassName("pill")
        for (let i=0; i<resetPill.length; i++) {
            resetPill[i].classList.remove("active");
        }
        
        grid.splice(0,10);
        base.forEach(arr => grid.push([...arr]));
        console.log(grid)
        PMTut.pillCount = 0;
        
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
      PMTut.points = 0;
      Score.innerText = 0;
        
    // reset board, pills and grid.

    PacManTut.style.gridRow = `${basePMX+1}/10`
    PacManTut.style.gridColumn = `${basePMY+1}/10`

    PMTut.x = basePMX;
    PMTut.y = basePMY;

    ghost1.style.gridRow = `${baseg1TutX+1}/10`;
    ghost1.style.gridColumn = `${baseg1TutY+1}/10`;

    g1Tut.x = baseg1TutX;
    g1Tut.y = baseg1TutY;
    g1Tut.direction = "U"


    
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
      //     g1Tut.x--;
      //     counter++;
      //     ghost1.style.gridRow = `${g1Tut.x+1}/10`;
      //     } else if (counter < 14) {
      //       g1Tut.x++;
      //     counter++;
      //     ghost1.style.gridRow = `${g1Tut.x+1}/10`
      //     } else {
      //       counter = 0
      //     }
          
      //   }, 300);}

                
const moveGhost = function () {
      
      
    
      intervalId2 = setInterval(() => {

        ghostHit()
        Score.innerText = PM.points
      

        if (g1Tut.direction === "U") {
          if (grid[g1Tut.x - 1][g1Tut.y] === "O") {
            g1Tut.direction = "L";
          } else if (grid[g1Tut.x - 1][g1Tut.y] === "V") {
            clearInterval(intervalId);
          } else {
            g1Tut.x--;
            ghost1.style.gridRow = `${g1Tut.x + 1}/10`;
          }
        }

        if (g1Tut.direction === "R") {
          if (grid[g1Tut.x][g1Tut.y + 1] === "O") {
            g1Tut.direction = "U";
          } else if (grid[g1Tut.x][g1Tut.y + 1] === "V") {
            clearInterval(intervalId);
          } else {
            g1Tut.y++;
            ghost1.style.gridColumn = `${g1Tut.y + 1}/10`;
          }
        }

        if (g1Tut.direction === "D") {
          if (grid[g1Tut.x + 1][g1Tut.y] === "O") {
            g1Tut.direction = "R";
          } else if (grid[g1Tut.x + 1][g1Tut.y] === "V") {
            clearInterval(intervalId);
          } else {
            g1Tut.x++;
            ghost1.style.gridRow = `${g1Tut.x + 1}/10`;
          }
        }

        if (g1Tut.direction === "L") {
          if (grid[g1Tut.x][g1Tut.y - 1] === "O") {
            g1Tut.direction = "D";
          } else if (grid[g1Tut.x][g1Tut.y - 1] === "V") {
            clearInterval(intervalId);
          } else {
            g1Tut.y--;
            ghost1.style.gridColumn = `${g1Tut.y + 1}/10`;
          }
        }
        
      }, 300);
    };
  
// !------------------------------------------- 8. ghost hit -----------------------------------------------------------!

const ghostHit = function () {
 
  if (g1Tut.x===PMTut.x && g1Tut.y===PMTut.y) {
   
    console.log(`${g1Tut.x} and ${PMTut.x}`)
    console.log(`${g1Tut.x} and ${PMTut.x}`);
    
    PMTut.points -= 100
    clearInterval(intervalId);
    clearInterval(intervalId2);
    PacManTut.style.gridRow = `${basePMTutX+1}/10`
    PacManTut.style.gridColumn = `${basePMTutY+1}/10`

    PMTut.x = basePMTutX;
    PMTut.y = basePMTutY;

    ghost1.style.gridRow = `${baseg1TutX+1}/10`;
    ghost1.style.gridColumn = `${baseg1TutY+1}/10`;

    g1Tut.x = baseg1TutX;
    g1Tut.y = baseg1TutY;
    g1Tut.direction = "U"
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
//       PacManTut.style.gridColumn = `${ghost.y+1}/10`;

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




// g1Tut.direction = 'U';
// let intervalIdGhost = setInterval(ghostMove(g1Tut), 175);

// 2.a direction change with buttons.
                            
                            
    // up.onclick = () => {
    
    //   if (grid[PMTut.x-1][PMTut.y]!=='O') {
    //     clearInterval(intervalId)
    //     PMTut.direction = "U";
    //     console.log(PMTut.direction);
    //     moveForward()
    //     };
        
    //   };
        
    // down.onclick = () => {
        
    //   if (grid[PMTut.x+1][PMTut.y]!=='O') { 
    //     clearInterval(intervalId)
    //     PMTut.direction = "D";
    //     console.log(PMTut.direction);
    //     moveForward()
    //    };
        
    //   }
    
    // left.onclick = () => {
        
    //   if (grid[PMTut.x][PM.y-1]!=='O') {
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