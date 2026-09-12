// Var declaration --> 1995
// Dynamically typed / loosely typed
// string,boolean,number
// 1) DECLARATION & INITIALIZATION
var course = "Playwright"
// 2) RE INITIALIZATION
course ="cypress"
course = 8765753
course = true
console.log(typeof course)
// 3) RE DECLARATION
var course=null // global scope
console.log(typeof course)
// 4) SCOPE RESTRICTION  - not block scoped, it is function scope
function getNationality(){// function scope 
   
    { // block scope
        var courtry = "India"
    }
     console.log(courtry);
}
getNationality()
//console.log(courtry,course); //ReferenceError: courtry is not defined

// 5. HOISTING
console.log(courseDuration);
var courseDuration ="2 months or 8 weekends"