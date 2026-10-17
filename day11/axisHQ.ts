export abstract class AxisHeadquarter{ // LOOSE ABSTRACTION

    // implemented method
    public corporateOfficeLocaton():void{
        console.log("HQ of the axis bank is Mumbai");     
    }
    // unimplemeneted method
    abstract loanApproval():void;

    constructor(){
        console.log("welcome kit for new customers");  
    }

}
// new AxisHeadquarter() 
// Cannot create an instance of an abstract class, till the abstract class is considered as incomplete class