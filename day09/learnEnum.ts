// what is enum ?
// We can create the constants(fixed) Variable
// const QA ="https://qa.leaftaps.com/opentaps/control/login"
// const DEV ="https://dev.leaftaps.com/opentaps/control/login"
// const PROD ="https://prod.leaftaps.com/opentaps/control/login"

enum EnvironmentVariable {
    QA ="https://qa.leaftaps.com/opentaps/control/login",
    DEV ="https://dev.leaftaps.com/opentaps/control/login",
    PROD ="https://prod.leaftaps.com/opentaps/control/login"
}
console.log(EnvironmentVariable.QA);