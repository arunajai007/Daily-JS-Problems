function firstDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                return arr[i];
            }
        }
    }
}

console.log(firstDuplicate([2,5,1,3,5,2]));
console.log(firstDuplicate([1,2,3,4]));
