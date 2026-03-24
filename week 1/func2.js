function addsum(arr){
let sum=0
for (i=0;i<arr.length;i++){
    sum+=arr[i];
}
return sum
}
let arr=[3,2,5,3,6]
console.log(addsum(arr))
