let arr = ['arun', 10, 500, "prasad", "C", "300"]

let numbers = [];
let strings = [];

for(let i = 0; i<arr.length; i++){
    if(typeof arr[i]=== "number"){
        numbers.push(arr[i])
    }
    else{
        strings.push(arr[i])
    }
}

console.log(numbers);
console.log(strings);