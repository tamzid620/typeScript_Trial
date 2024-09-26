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

let user1 = new User("Tamzid Ull Monir", 23) ;
user1.display();

let user2 = new User("Clash Of Clan", 12) ;
user2.display();