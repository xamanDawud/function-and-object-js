function add(num1, num2) {
    console.log(num1, num2);
    let sum = num1 + num2;
    return sum;
}

let result = add(20, 20);
console.log(result);

//////////////////////////////////////

function bringSingara(quantity) {
    let singaraPrice = 10;
    let total = singaraPrice * quantity;
    return total;
}

let quantity = bringSingara(10);
console.log(quantity);