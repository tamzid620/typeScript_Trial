// build in type  array, string, number,boolean,  void, null, undefined etc ----------------------
// if function does not return anything , then use type void 

let firstName: string;
let lastName: string;
let fullName: string;

firstName = "Tamzid";
lastName = "Monir";

fullName = firstName.concat(lastName);

console.log(`${firstName} , ${lastName}`);
console.log(fullName);

// ---------------
function display() {
    console.log("Hello typeSctipt");
}

display() ;
