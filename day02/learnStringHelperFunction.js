let companyName = "Testleaf"
let courseName = "Playwright"
// if(companyName.includes("Testleaf")){
// }
console.log("compares the string and the result is : " + companyName.includes("Testleaf"))
console.log("length of the string is : " + companyName.length);
console.log(companyName.indexOf('t'));
console.log(companyName.lastIndexOf('e'));
console.log(companyName.charAt(7))
// slice() 
console.log(courseName.slice(-8));
// replace(),replaceAll()
let langName = "java java java";
let alterLangName = langName.replaceAll("java", "ts")
console.log(alterLangName);
// split()
console.log(langName.split(" "))
// printed every alphabet
// Print the value in reverse order
let reverseWord=""
for (let i = companyName.length-1; i >=0 ; i--) {
    reverseWord += companyName.charAt(i)
}
 console.log(reverseWord)