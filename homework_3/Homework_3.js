var x = 8;

Number.prototype.sum = function (y){
    return this + y;
};

console.log(x.sum(9));