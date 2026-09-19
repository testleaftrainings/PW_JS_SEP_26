// Hetrogenes datatype array
let list = ["Bhuvanesh",10082,true]
// Homogenes datatype array
let courseName1 ="CYPRESS,PLAYWRIGHT,SELENIUM,QTP,TOSCA" 
let courseList =courseName1.split(",")
console.log(typeof courseList)
console.log(courseList.length) // starts with 1
// Remove
courseList.pop() // Removes the last element from an array and returns it.
courseList.shift() // Removes the first element from an array and returns it
// Add 
courseList.push("Rest Assured") // Appends new elements to the end of an array, and returns the new length of the array.
courseList.unshift("Postman") // Inserts new elements at the start of an array, and returns the new length of the array
console.log(courseList)
// Manipulation
console.log(courseList.slice(1,4));
                 //start?: number, end?: number
courseList.splice(-2,0,"Appium") // start: number, deleteCount?: number, append 

courseList.sort()
// Modern way
courseList.forEach(course => console.log(course))
// Traditional way
// for(let i=0 ;i<courseList.length; i++){
//     console.log(courseList[i])
// }
// Concat or combiniting muplitle arrays
console.log(list.concat(courseList))

let firstName = "bhuvanesh"
let orderedLiterals =firstName.split("").sort().join("")
console.log(orderedLiterals)