function secondSmallest(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } 
        else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log(secondSmallest([100,200,300,50,25]));
