//spead with object literals

let data={
    email:"shubhamranjane16@gmail.com",
    password:"abcd"
};

let dataCopy={
    ...data,
    id:123
}
let arr=[5,9,865,65498654,654654,654654,6546458465];
let str="shubham ranajne"
let arrValuesInObj={
    ...arr,//here the values will be stored in the form of key value pairs where key will be the index 
    ...str
}
console.log(arrValuesInObj);
console.log(dataCopy);