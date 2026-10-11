// form two
import { UserStory } from "./ScrumMaster";
class Tester extends UserStory{
    performTask(){
        console.log("Change the status of task to --> in progress");
        console.log("starts the Testcase generation, Execute the test in QA environment");
    }
}

const qa = new Tester()
qa.performTask()