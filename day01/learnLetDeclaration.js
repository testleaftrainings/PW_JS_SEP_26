// LET declaration --> 2015
// Dynamically typed 
// 1) DECLARATION & INITIALIZATION
let course = "Playwright"
// 2) RE INITIALIZATION --> allowed
course ="cypress"
course = 8765753
course = true
console.log(typeof course)
// 3) RE DECLARATION --> not allowed 
//let course = null // global scope
// 4) SCOPE RESTRICTION  - Block scoped
function getNationality(){// function scope 
   
    { // block scope
        let courtry = "India"
    }
    //console.log(courtry);// ReferenceError: courtry is not defined
}
getNationality() 

// 5. HOISTING - not allowed 
console.log(courseDuration); // ReferenceError: Cannot access 'courseDuration' before initialization
let courseDuration ="2 months or 8 weekends"