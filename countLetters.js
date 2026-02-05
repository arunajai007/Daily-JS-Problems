function countLetter(word){
    const result = {};

    for(let char of word){
        if(!result[char]){
            result[char]= 1;
        }
        else{
            result[char]++;
        }
    }

    return result;

}

console.log(countLetter("apple apple"))