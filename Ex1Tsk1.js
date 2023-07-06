let arr=[11,2,23,4,5]
let newA=arr[0];
const Smallest=(arr)=>{
    for(let i=1;i<arr.length;i++){
        if(arr[i] < newA)
        {
            newA=arr[i]
        }
    }
    return newA
};
console.log(Smallest(arr))