//find minimum number form the array using reduce method

let arr=[654,98654,84,5498,4,59,8,49,854,987464];

let minNum=(arr)=>{
    let minNum=arr.reduce((value1,value2)=>{
        if(value1<value2){
            return value1
        }
        else{
            return value2;
        }
    })
    return minNum
}
console.log(minNum(arr));