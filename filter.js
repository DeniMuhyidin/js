const number = [1,2,3,4,5,5,5,5,5,6,7,8,9,10];
const filter = number.filter(item => {
    return item > 4;
})
console.log(filter);