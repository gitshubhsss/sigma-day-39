//Check if all numbers in our array are multiples of 10 or not

let numbers=[10];

let mul10=numbers.every((value)=>{
    if(value%10==0){
        return value;
    }
})
console.log(mul10);