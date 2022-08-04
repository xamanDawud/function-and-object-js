function average(assi1, assi2, assi3) {
    let sum = assi1 + assi2 + assi3;
    let total = sum / 3;
    return total.toFixed(2);
}

let result = average(58, 60, 60);
console.log(result);