let str1 = "arun"
let str2 = "prasad"

function mergeAlternative(a,b) {
    let result = "";
    let maxLength = Math.max(a.length, b.length);

    for(let i=0; i <maxLength; i++){
        if(i<a.length){
            result += a[i];
        }
        if(i<b.length ){
            result +=b[i]
        }
    }
    return console.log(result)
}

mergeAlternative(str1, str2)