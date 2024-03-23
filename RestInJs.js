//Rest in js
//in rest we are taking multiple arguments in one single parameter

let add=(...arg)=> {
    let  str=""
  for(i=0;i<arg.length;i++){
     str=str.concat(arg[i]);
  }
  console.log(str);
  
}
console.log(add("shubam","shivaji","ranjane"));
