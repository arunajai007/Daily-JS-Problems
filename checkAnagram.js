function isAnagram(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    if(str1.length !== str2.length){
        return false
    }

    let counts = {}

    for(let i =0; i<str1.length; i++){
        let char = str1[i];

        if(counts[char]){
            counts[char]++;
        }else{
            counts[char] = 1;
        }
    }

    for(let i =0; i<str2.length; i++){
        let char = str2[i];

        if(!counts[char]){
            return false
        }
        counts[char]--;
    }
    return true
}

console.log(isAnagram("listen", "silent"));
