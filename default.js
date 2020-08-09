
function add(num1,num2 = 12){ 
    // if(num2== undefined){ 
    //     num2 = 0;
    // }

    // num2 = num2 || 0;
    return num1 + num2;
}

const total = add(12);
console.log(total);