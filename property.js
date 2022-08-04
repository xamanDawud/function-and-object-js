let pen = {
    name: "Matador",
    size: "5inch",
    price: 10,
    material: "plastic",
};
console.log(pen[3]);

let foundPenPrice = pen.price;
let foundPenPricewithIndex = pen[2];
console.log(foundPenPrice);
console.log(foundPenPricewithIndex);

/////////////////////////////////////////////////////////

let student = {
    name: "Mccafee",
    address: "California",
    zipCode: "2250",
    mobile: 0044854225,
    department: "CSE",
};

// Set Property
student["address"] = "Celicon Valley";
// property setting another way
student.name = "Salman Muqtadir";
console.log(student);

// Get all keys with method
let studetnKeys = Object.keys(student);
console.log(studetnKeys);

// Get all values with method
let studentValues = Object.values(student);
console.log(studentValues);