// functional signature -----------------------------
var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("my name is Tamzid Ull Monir");
};
userInfo2 = function (name) {
    console.log("my name is ".concat(name));
};
userInfo3 = function (name, age) {
    return "my name is ".concat(name, " also I am ").concat(age);
};
userInfo1();
userInfo2("Tamzid");
userInfo3("Tamzid", 24);
