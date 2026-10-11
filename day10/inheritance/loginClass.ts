import {WrapperClass} from "./baseClass"
class LoginPage extends WrapperClass{

    enterUserName(uname : string){
    this.waitForElementToLocate()
    this.enterText(uname)
    }
    enterPassword(pword : string){
    this.waitForElementToLocate()
    this.enterText(pword)    
    }
    clickLoginButton(){
    new LoginPage().clickTheElement()
    this.setToken="KJKJ44UO4HO3UJ33OB3B"
    }
}
// this --> new LoginPage()
const lp = new LoginPage()
lp.enterUserName("demosalesmanager")
lp.enterPassword("crmsfa")
lp.clickLoginButton()
console.log(lp.getToken);
