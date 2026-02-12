function groupByLength(words) {
    let result = {};

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let length = word.length;
        
        if (!result[length]) {
            result[length] = [];
        }
        result[length].push(word);
    }

    return result;
}

console.log(groupByLength(["hi", "hello", "cat", "sun", "javascript"]));
