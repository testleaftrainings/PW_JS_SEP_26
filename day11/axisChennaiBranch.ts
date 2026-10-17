import { RBI } from "./learnInterface";
import { AxisHeadquarter } from "./axisHQ";
class AxisBank extends AxisHeadquarter implements RBI  {
    loanApproval(): void {
      console.log("any loan amount less then 1 crore can be approved by the manager of the specific branch");
    }
    npci(): void {
        console.log('All the account statements to be be submitted to NPCI');
        
    }
    repoRate(): void {
      console.log("Repo Rate (RR): 5.50%");  
    }
    cashReserveRatio(): void {
      console.log("Cash Reserve Ratio (CRR): 3.00%");
    }
    knowYourCustomerNorms(): void {
       console.log("Aadhar card and Pan card details is mandatory to create or renew a bank account");
    }
}
const chennaiBranch = new AxisBank()
chennaiBranch.repoRate()
chennaiBranch.cashReserveRatio()
chennaiBranch.knowYourCustomerNorms()
chennaiBranch.npci()
chennaiBranch.corporateOfficeLocaton()
chennaiBranch.loanApproval()
