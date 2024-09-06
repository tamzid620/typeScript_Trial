// enum -store constants;
// duplicate value is not allowed here ,
// enum types: numeric , string, hetergemous 


// numeric enum -------
enum requestType {
    readData = 1, 
    saveData =3 ,
    deleteData,
}
console.log(requestType);


// string enum -------
enum requestType2 {
    readData = "read data", 
    deleteData = "delete data" ,
}
console.log(requestType2);


// hetergemous enum----------------
enum requestType3 {
    readData = "read_data", 
    deleteData = "delete_data",
    id= 101,
}
console.log(requestType3);

