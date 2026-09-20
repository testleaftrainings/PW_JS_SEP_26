function verifyLogin(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Authenticating....")
        setTimeout(() => {
            if (username === "demosalesmanager" && password === "crmfa") {
                resolve("Login successful, Home page is visible")
            }
            else {
                reject("Invalid Login credentials, still in the login page")
            }
        }, 2000)
    })

}
// verifyLogin("demosalesmanager", "crmfa")
//     .then((value)=>{console.log(value)})
//         .catch((reason)=>{console.log(reason)}).finally(()=>{console.log("async operation is completed successfully");
//         })   //caller

async function checkLogin(uname,pword){

    try{
       const successMessage = await verifyLogin(uname,pword)
       console.log(successMessage)
    }catch(error){
        console.log(error)
    }finally{
        console.log("async operation is completed successfully")
    }
}

checkLogin("demosalesmanager","crmfa")
