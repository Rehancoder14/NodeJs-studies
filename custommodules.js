console.log("module")
function Average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element
    });
    return sum/arr.length;
}
function fact(num) {
    let mulnum = 1;
    for(var i = 1; i<=num;i++){
        mulnum = mulnum*i;
    }
    return mulnum;
}
module.exports = {
    avg: Average,
    fact : fact

};