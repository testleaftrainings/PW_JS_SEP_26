// form One
import { UserStory } from "./ScrumMaster";
class Developer extends UserStory{
performTask(){
    console.log("Developer starts to write the development Code");
    console.log("Once the development is done in dev, It should be deployed in QA");
}
}
const dev = new Developer()
dev.performTask()