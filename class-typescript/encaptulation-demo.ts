//  public , private , protected, readonly 
 
 class User {

    userName: string ;
    age: number;
   
   constructor ( userName: string, age: number) {
       this.userName = userName ;
       this.age = age;
   }
   display(): void{
    console.log(`username: ${this.userName}, age: ${this.age}`);
} 
    
   }

class Student extends User {
   private studentId: number ;

    constructor ( userName: string, age: number , studentId:number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void{
        console.log(`username: ${this.userName}, age: ${this.age} , studentId:${this.studentId}`);
    }
    
     setStudentId(studentId : number): void {
        this.studentId = studentId;
    }
    getStudentId(): number{
        return this.studentId ;
    }
}

let Student1 = new Student("key", 23, 34554) ;
Student1.setStudentId(7887878788);
console.log(Student1.getStudentId());
// Student1.display();

let user1 = new User("Tomma", 34);
user1.userName=  "Tobba";
user1.display();


