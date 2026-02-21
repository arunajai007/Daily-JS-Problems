Array.prototype.last = function(){
    if(this.length === 0){
        return -1
    }
    return this[this.length-1];
}

const array = [1,2,3,4,72]
console.log(array.last())
