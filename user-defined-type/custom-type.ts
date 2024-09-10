


type user = { userName: string , userId: number }

let users: user[];
users= [] ;

let user1: user ;
user1 = { userName: "Tamzid", userId: 101 };
users.push(user1);

let user2: user;
user2 = { userName: "Tamzid", userId: 101 };
users.push(user2);


let user3: user;
user3 = { userName: "Tamzid", userId: 101 };
users.push(user3);


console.log(users);

type requestType = "GET" | "POST" ;
let getRequest: requestType ;
getRequest = "GET" ;

function handleRequest (requestType: requestType){
    console.log(requestType);
}

handleRequest("GET")


