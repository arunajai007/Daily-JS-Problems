function orderFood(isHotelOpen) {
    return new Promise((resolve, reject)=>{
        console.log("Ordering Food....");

    setTimeout(()=>{
        if(isHotelOpen){
            resolve("Food Delivered");
        }
        else{
            reject("Hotel is not open")
        }
    }, 2000)
    })
    
}

orderFood(true)
.then(result=> console.log(result))
.catch(error=> console.log(error))