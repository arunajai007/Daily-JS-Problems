function firstUnique(str) {

    let counts = {};
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (counts[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

console.log(firstUnique("aabbcde")); // c