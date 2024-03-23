//find the minimum number from the array write a funtion for that

let arr=[654,6854,664,86,486,9,65,4656,3232,2,856];
let minValue=(arr)=>{
    let min=0;
    for(i=0;i<arr.length;i++){
        for(j=1;j<arr.length;i++){
            if(arr[j]<arr[i]){
                arr[j]=arr[i];
                min=arr[i]
            }
        }
    }
    console.log(min);
}
minValue(arr)
