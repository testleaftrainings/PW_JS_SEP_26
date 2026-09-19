// 1. Named function
// syntax : function functionName(){
//   body of the function --> All reuseable logics were written here
//    }

function greet(learnName){
 console.log(`Hi, ${learnName}. Welcome to testleaf`)
 // console.log("Hi,"+learnName+" .Welcome to testleaf")
}
greet("PriyaSiva") //caller
greet("Abinaya") // caller

// calculator 
// 2. Ananomous function
let addNum = function (a,b){
return a+b
}
console.log(addNum(76868,938373) + addNum(876,13));  //caller

// 3. Arrow function 
// =>  fat arrow
let multNum = (a,b) => a*b
console.log(multNum(2,3) * multNum(4,3)); // 6 * 12  //caller
// multNum(multNum(2,3),multNum(4,3)) // function(function,function) // call back hell 

// 4. IIFE
;(function(username){
   console.log(`username is entered as ${username}, Welcome to leaftaps`) 
})("demosalesmanger")

// 5. Call Back function
// fetch user history --> action
function recommendedMovie(){
    console.log("Track's the user watch history : langage,genre,cast,crew")
}
// optimized recommendation --> action
function aiRecommendation(){
    console.log("optimized the movie recommendation")
}
function profileLogin(username,history,suggestion){
    console.log(`Welcome, ${username} to amazon prime video`)
    history()
    suggestion()
}
profileLogin("bhuvanesh",recommendedMovie,aiRecommendation) // caller
// recommendedMovie()// caller
// aiRecommendation()// caller




