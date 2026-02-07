let arr = [10, 5, 8, 20, 15]

function findScondLargest(arr){
    let largest = Math.max(...arr);
    let secondLargest = -Infinity;

    for(let i =0; i<arr.length; i++){
        if(arr[i] !== largest && arr[i]> secondLargest){
            secondLargest = arr[i]
        }
    }

    return secondLargest;
}

console.log(findScondLargest(arr))
