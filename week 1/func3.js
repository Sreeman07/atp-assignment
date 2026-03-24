function find(arr,target){
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        return "found"
}
}
    return "not found";
}

let arr=[3,2,5,3,6]
console.log(find(arr,2))
