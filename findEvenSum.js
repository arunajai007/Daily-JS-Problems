function sumEven(num){
    let result = 0;

    for(let i =0; i<num.length; i++){
        if(num[i] %2 === 0){
            result += num[i]
        }
    }
    return console.log(result)
}

sumEven([1,2,3,4,5,6,7,8,9,10])