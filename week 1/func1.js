//write a function that receives 3 number agrgs and return the big number
function bignum(a,b,c){
    if (a>b && a>c)
        return "a is big"
    else if(b>c)
        return "b is big"
    else
        return "c is big"
}
let res=bignum(3,5,1)
console.log(res)