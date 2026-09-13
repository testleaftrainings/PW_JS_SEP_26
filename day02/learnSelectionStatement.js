//use case : Amazon prime 
// rule 1 : if user click the button video should play
// rule 2 : if user is not a prime user, then user should navigate to subscription page
// Business validation : check the user profile for the subscription status.

let isPrime = true // false
if (isPrime === true) {
    console.log("Watch : video start to play, in the amazon player");
} else {
    console.log("User will redirected to Subscription Page");
}

//use case : Income Tax filing application
// rule 1 : If an individual's income is less than 3 LPA, exempted from tax
// rule 2 : If an individual's income is more than 3 LPA or equal to 3LPA, But less than 10 LPA --> 10 % tax slab
// rule 3 : If an individual's income is more than 10 LPA or equal to 10 LPA  --> 30 % tax slab
// Business validation : check the user income for select the income slab based on it.
let checkIncome = 10

if (checkIncome < 3) {
    console.log("The user is exempted for the tax or tax free")
} else if (checkIncome >= 3 && checkIncome < 10) {
    console.log("The user has to pay 10% of the tax from the income which is filled")
} else {
    console.log("The user has to pay 30% of the tax from the income which is filled")
}

// SWITCH CASE

let browserName = "chrome" // safari

switch (browserName) {
    case "chrome":
        console.log("152.0.7977.84")
        break;
    case "edge":
        console.log("152.0.4191.66")
        break;
    default:
        console.log("Unsupported Browser or Browser which is not installed in this machine");
        break;
}