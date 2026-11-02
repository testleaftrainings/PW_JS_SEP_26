// import axios from "axios";

// let email="dilipkumar.rajendran@qeagle.com"
// let endpoint="https://qeagle-team-g1zvh4je.atlassian.net/rest/api/2/issue"
// let ApiKey="PW"
// let ApiToken="ATATT3xFfGF0DMhI-AJnT6zWLpApEBPeEL0M78A2ob39bNE2zUg3OPA0A0V3XYPpeQ0Vbjm2aWZE9B-SEvLmS1-vCxTEoOUwQSy3-82zA0msUBt_dUswdnxvC04SN-18qBJ-PDnxuO24UzWbaj5xMgczRQJqwDKp8NYVt9r06ZhrWM104Ji9UbU=0303683B"


// async function CreateJiraIssue(){

// const testData={

//     "fields":{

//         "project":{
//             "key":ApiKey
//         },

//         "summary":"Test Issue from API",

//         "description":"Creating an issue via API",
// "issuetype":{
//     name:"Task"
//     //Bug,Epic,Task,Story
// },

// "assignee":{
//     "id":"712020:6cfab4d5-1a8c-4717-9b4a-96667afe7324"
// }


//     }

// }

// //API Request to create a Jira issue
// const resValue= await axios.post(endpoint,testData,{

//     headers:{
//         "Content-Type":"application/json"
//     },
//     auth:{
//         username:email,
//         password:ApiToken
//     }
// })

// const resBody=resValue.data
// console.log("Response Body:",resBody)

// }

// CreateJiraIssue()