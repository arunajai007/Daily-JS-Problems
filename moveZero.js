function moveZero(number){

let num = []
let zero = []

for(i=0; i< number.length; i++){
    if(number[i] === 0){
        zero.push(number[i])
    }
    else {
        num.push(number[i])
    }
}

return [...num,...zero]
}

console.log(moveZero([1,0,3,0,5,0,7,8,0]))