// TypeScript Introduction :
// string, number, boolean, undefined, null
let course = "Playwright"
course = "Selenium"
let duration: number = 2

// all the js datatype's are applicable here in ts
// there are some special ts datatype :
// 1. any  --> It tries to implement dynamic typing behaviour here, Bypasses the type checking, 
//             forces the validation not done
// use case : for dynamic api --> value type might constantly changing
let responses: any = "success"
responses = 201
responses = true
// type assertion 
console.log((responses as string).toUpperCase())
// TypeError: response.toUpperCase is not a function
// 2.unknown --> It also tries to implement dynamic typing behaviour here, forces the validation before the use is done
let response: unknown = true
response = "true"
if (typeof response === "string") {
    console.log(response.toUpperCase())
}
// reuseable logic
// 3. never --> infinite exeucution, forcefully termination 
// throw new Error()
function stopExecution(): never {
    throw new Error("Stop's the execution")
}

function add(a: number, b: number) {
    stopExecution()
    console.log(a + b)
}

add(4, 6)

// 4. Tuple --> Similar to array , here we can group multiple values under the single reference,
//                                 forces the validation before the use
// use case : the order and format of the value should be matched 
const mentorList: [string, number, string, string] = ["Bhuvaneh", 10082, "Sai", "Yuvarani"]

// Object Literals
const Credentials: {
    role: string,
    username: string,
    password: string
} = {
    role: "admin",
    username: "demosalesmanager",
    password: "crmsfa"
}