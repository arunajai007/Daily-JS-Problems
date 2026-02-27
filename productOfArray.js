function productExceptSelf(arr){
    let result = new Array(arr.length).fill(1);

    let left = 1;
    for(let i =0; i<arr.length; i++){
        result[i] = left;
        left *= arr[i];
    }

    let right = 1;
    for(let i =arr.length -1; i >= 0; i--){
        result[i] *= right;
        right *= arr[i]
    }
    return result
}

console.log(productExceptSelf([1,2,3,4]))