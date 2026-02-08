function reverseWord(str){
    let words = str.trim().split(/\s+/);
    let result = "";

    for(let i = words.length-1; i>=0; i--){
        result += words[i] + " ";
    }

    return result.trim();
}

console.log(reverseWord("My Name is Arun"))