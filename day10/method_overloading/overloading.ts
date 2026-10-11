class UiActions{
    // same method name, within same class
    // public click():void;
    // method overloading can only be paratially applied
    // public click(timeout: number):void;
    // public click(timeout:number,locator:string):void;
    // single implement -- only single body is allowed
    // public click(timeout? :number,locator?:string){
    //     if(locator){
    //          console.log("it locate the element and clicking the element"); 
    //     }
    //     else if(timeout){
    //         console.log("it will wait until "+ timeout +" sec, before clicking the element");  
    //     }else if(!timeout && !locator){
    //         console.log("element clicked successfully")
    //     }

    // Options Object Pattern
    public click(options?:{timeout?:number,locator?:string,delay?:number,snapShot?:boolean}){
        Object.entries(options ?? {}).forEach(([key,value])=>{
            console.log(`${key} ${value}`)
        })
    }
        
    }
// Method overloading 
// const action = new UiActions()
// action.click(3000)
// action.click()
// action.click(1000,".decorativeSumbit")

 // Options Object Pattern
  const action = new UiActions()
  action.click({timeout:8000,snapShot:true})
  action.click({delay:1000,locator:".decorativeSumbi"})
  action.click()
