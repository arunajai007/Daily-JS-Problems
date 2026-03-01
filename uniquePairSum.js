function findPairs(arr, target) {

    let seen = new Set();
    let output = new Set();
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        let num = arr[i];
        let complement = target - num;

        if (seen.has(complement)) {

            // Make pair sorted so [2,4] and [4,2] don't duplicate
            let pair = [Math.min(num, complement), Math.max(num, complement)];

            let key = pair.toString(); // convert to string for uniqueness

            if (!output.has(key)) {
                output.add(key);
                result.push(pair);
            }
        }

        seen.add(num);
    }

    return result;
}

console.log(findPairs([1,2,3,4,5,6], 7));