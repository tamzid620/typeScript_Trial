var users;
users = [];
var user1;
user1 = { userName: "Tamzid", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Tamzid", userId: 101 };
users.push(user2);
var user3;
user3 = { userName: "Tamzid", userId: 101 };
users.push(user3);
console.log(users);
var getRequest;
getRequest = "GET";
function handleRequest(requestType) {
    console.log(requestType);
}
handleRequest("GET");
