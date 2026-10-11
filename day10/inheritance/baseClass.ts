export class WrapperClass{
// AM :  PUBLIC PRIVATE PROTECTED
// properties
public browerName:string = "Chrome"
private sessionToken:string =""
protected frameworkName:string ="HyridPlaywrightFramework"

// Encapsulation 
public set setToken(v : string) {
    this.sessionToken = v;
}
public get getToken() : string {
    return this.sessionToken
}

// Method signature
public clickTheElement():void{
console.log("Element Clicked Successfully");
}
private frameworkDesign():void{
console.log("Page Object Model is Design Pattern");
}
protected waitForElementToLocate(){
console.log("Locator is fetched successfully");
    
}
protected enterText(value :string):void{
console.log("Text is entered successfully as "+ value);  
}
public performAction():void{
this.frameworkDesign()
this.setToken="ab73872vuv9wvy83972982gbg"
console.log(this.getToken);
}
}
// new object is to be created 

// const wrap = new WrapperClass()
// console.log(wrap.browerName);
// wrap.clickTheElement()
// wrap.performAction()
// wrap.setToken="ab73872vuv9wvy83972982gbg"
// console.log(wrap.getToken);




