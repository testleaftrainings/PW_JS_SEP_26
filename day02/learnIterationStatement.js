// Requirement: print from number 1 to 10
let i = 1
// incremental operator // decremental operator
// console.log(i++);   // console.log(i--);

// while  

while (i <= 10) {
    console.log(i)
    i++ // infite looop is executed
}

// do while

do {
    console.log(i);
    i++
} while (i <= 10)

// for
// syntax : //for(initialiaztion; condition; iteration)
// Requirement : odd numbers to skipped while printing
for (let j = 1; j <= 10; j++) {
    if (j % 2 === 1) {
        continue;
    }
    console.log(j);
}

//  Functional Requirement:
//  A player must complete at least 2 rounds and at most 5 rounds.
//  If the player is unhealthy, the game stops right after 2 rounds. 
//  If the player is healthy, the game continues up to 5 rounds.

let isHealthy = false
const maxGoal = 5
const minGoal = 2
for (let round = 1; round <= maxGoal; round++) {
    // condition 1: ifHealty ,maxGoal
    // condition 2 : minGoal
    if (!isHealthy && round > minGoal) {
        break
    }
    console.log("round no :" + round + " completed");
}