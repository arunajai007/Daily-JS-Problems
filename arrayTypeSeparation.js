let arr = ['arun', 10, 500, "prasad", "C", "300"];

let strings = [];
let numbers = [];
let characters = [];

for(let i =0; i< arr.length; i++){
    let items = arr[i];

    if( typeof items === "number"){
        numbers.push(items);
    }
    else if(typeof items === "string"){
        if(items.length === 1){
            characters.push(items)
        }
        else{
            strings.push(items)
        }
    }
}

console.log(strings)
console.log(numbers)
console.log(characters)