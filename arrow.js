
// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function (num){ 
//     return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x,y) => x+y;
const give5 = () => 5;

const doMath = (x,y) =>{ 
    const add = x+y;
    const diff = x-y;
    const result = add * diff;

    return result;
}
const result = doubleIt(12);
const result2 = add(7,5);
const result3 = give5()
const result4 = doMath(7,5);
console.log(result4);