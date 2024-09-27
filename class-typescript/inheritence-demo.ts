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
    studentId: number ;

    constructor ( userName: string, age: number , studentId:number) {
        super(userName, age);
        this.studentId = studentId;
    }

    display(): void{
        console.log(`username: ${this.userName}, age: ${this.age} , studentId:${this.studentId}`);
    }
}

let Student1 = new Student("key", 23, 34554) ;
Student1.display();




