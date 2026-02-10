let arr = [600,30,400,50,60]

function findLargest(arr){
    let largest = arr[0]

    for( let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return console.log(largest)
}

findLargest(arr)