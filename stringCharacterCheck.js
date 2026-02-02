let arr = ["arjun", "arun"];

let first = arr[0];
let second = arr[1];

let isPresent = true;

for(let i =0; i<second.length;i++){
    if(!first.includes(second[i])){
        isPresent = false;
        break;
    }
}

if(isPresent ){
    console.log("Yes")
}
else{
    console.log("No")
}