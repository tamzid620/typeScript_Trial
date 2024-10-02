// functional signature -----------------------------
let userInfo1 : ()=> void ;
let userInfo2 : ( name:string )=> void ;
let userInfo3 : ( name:string, age:number )=> string ;


 userInfo1 =()=> {
    console.log("my name is Tamzid Ull Monir");
}
 userInfo2 =(name: string)=> {
    console.log(`my name is ${name}`);
}
 userInfo3 =(name: string , age: number)=> {
    return `my name is ${name} also I am ${age}`;
}

userInfo1();
userInfo2( "Tamzid");
userInfo3( "Tamzid" , 24);













