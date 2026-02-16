function findLongest(sentence){
    let words = sentence.split(" ");
    let longest = words[0];

    for(let i =1; i<words.length; i++){
        if(words[i].length> longest.length){
            longest = words[i]
        }
    }
    return console.log(longest)
}

findLongest("I Love Vaishuuuu")