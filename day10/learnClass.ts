class Employee {// scope of the class
    // global reference // Properties // global variable
    name: string
    role: string
    department: string
    empId: number

    // name1:string="Hari"
    // role1:string="Vice - President"
    // department1:string="Engineering - Project"
    // empId1:number=1901

    constructor(name: string, role: string, department: string, empId: number) {
        console.log("Consturcted is exectued here")
        // this --> this keywork will always map's to the current class instance
        this.name = name // i have assigned local variable to the global variable
        this.role = role
        this.department = department
        this.empId = empId
    }

    // Action --> Method
    selfIntroduction() {
        console.log(`Hi, I am ${this.name}, working as ${this.role} in ${this.department} and my employee id is ${this.empId}`);
    }

}
// using the object global reference should be called
// syntax to create the real entity or object
// const object = new ClassName()
const you = new Employee("Bhuvanesh", "Sr.SDET", "Engineering - QA", 1232) // youect --> heap memory --> v3v3836ka73gek936g3j--> object
//console.log(you.name,you.role,you.department,you.empId);
you.selfIntroduction()

const vp = new Employee("Hari", "Vice President", "Engineering - Projects", 98)
//console.log(vp.name,vp.role,vp.department,vp.empId);
vp.selfIntroduction()