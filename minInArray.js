//find the minimum number from the array

let arr=[65,654,8,352,657,6532,41,1,65341,2,85,1545,0];
let min=0;
for(let i=0;i<arr.length;i++){
   for(let j=1;j<arr.length;j++){
    if(arr[j]<arr[i]){
        //1)654<65 no
        //2)8<65 yes so arr[i]=8 ;
        //3)352<8 no
        //4)657<8 no
        //5)41<8 no
        //6)1<8 yes so arr[i]=1 and min=1;
        //7)65341<1 no
        //8)2<1 no
        //9)85<1 no
        //10)1545<1 no
        //11)0<1 yes so arr[i]=0 so min=0
        arr[i]=arr[j];
        min=arr[i]
    }
   }
}
console.log(min);
