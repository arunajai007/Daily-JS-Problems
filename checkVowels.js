function checkVowels(sentence){
    let vowels = ["a","e","i","o","u"];
    let count = 0
    sentence = sentence.toLowerCase();

    for(let i =0; i<sentence.length; i++){
        if(vowels.includes(sentence[i])){
            count++
        }
    }
    return console.log(`Count: ${count}`);
}

checkVowels("I Love vaishali")