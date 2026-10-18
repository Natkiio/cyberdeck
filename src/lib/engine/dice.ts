// Take a 2d6 + 3 and return each die rolled plus the total 

// Roll one die with a given number of sides

//need export - otherwise rollDie not availible in other files 
export function rollDie(side: number): number { //side is what sided die you wanna roll? D6? D10? D20? etc
    const random = Math.random(); // getting a random num between 0 - 1
    const scaled = random * side; 
    const wholeNumber = Math.floor(scaled);
    return wholeNumber + 1; 
}



// Roll several die 
export function rollDice(count: number, side: number): number[] { // returns an array of numbers - count is how many time you wanan roll, side is what sided die? D6? D10? D20?
   const rolls: number[] = []; 
   for (let i = 0; i < count; i++) {
    const roll = rollDie(side); //calling the rollDie func - takes what sided die you are rolling as a parameter
    rolls.push(roll); // adding that output to the rolls array (list) 
   }

   return rolls; //give the data in rolls back to the user when called. 
}

// testing the functions
console.log(rollDie(20));
console.log(rollDice(3,6)); 