// type alais ?
// using type alais you can create a customized data or datatype for flexible
// execution at the run time
// use case : facebook username field

// Union  --> | --> datatype widening / expansion
type facebookUsername = string | number
let enterUserName: facebookUsername = "98763573"

type standardPwBrowser = "chrome" | "edge" | "firefox" | "safari"

let enterBrowserName: standardPwBrowser = "chrome" // type narrowing

// Type Narrowing Enterprises Framework Level
function selectAutomationBrowser(browserName: standardPwBrowser) {
    switch (browserName.toLowerCase()) {
        case "chrome":
            console.log("chrome browser is successfully launched")
            break;
        case "edge":
            console.log("edge browser is successfully launched")
            break;
        case "firefox":
            console.log("firefox browser is successfully launched")
            break;
        case "safari":
            console.log("safari browser is successfully launched")
            break;
    }
}
selectAutomationBrowser("firefox")

// Intersection --> & --> HRM Portal
// Fetch the Company / homogeneous  DB 
type basicEmpInfo = {
    name: string
    id: number
}
// Fetch from the 3rd party DB / hetergeneous
type optionalEmpInfo = {
    isInsured: boolean
}

type consolidateEmpInfo = basicEmpInfo & optionalEmpInfo

let hrmPortal: consolidateEmpInfo = {
    name: "Bhuvanesh",
    id: 1082,
    isInsured: false
}
Object.values(hrmPortal).forEach((value) => {
   console.log(value) 
});

console.log(hrmPortal.name)
