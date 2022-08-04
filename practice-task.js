// // Task One
// function foo() {
//     return "foo";
// }
// console.log(foo());

// function bar() {
//     let resreve = "bar";
//     let resreve2 = foo();
//     return resreve2;
// }
// console.log(bar());

// // Task Number Two
// function average(num1, num2, num3) {
//     let add = num1 + num2 + num3;
//     let total = add / 3;
//     return total;
// }

// let assignmentMarks = average(23, 54, 64);
// console.log(assignmentMarks);

// Task Number Three

function intAverage(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    let average = sum / num.length;
    return average;
}
console.log(intAverage([10, 9, 9]));