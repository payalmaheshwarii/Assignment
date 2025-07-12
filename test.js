import main from "./main.js";

//stage 1
console.log(main("1-3,5")); // [1, 2, 3, 5]
console.log(main("5")); // [5]
console.log(main("1-2,4")); // [1, 2, 4]

//stage 2
console.log(main(" , 1-3 , ,5 ")); // [1, 2, 3, 5]

//stage 3
console.log(main(" , 1..3 , ,5-7, 10~12 ")); // [1, 2, 3, 5, 6, 7, 10, 11, 12]

//stage 4
try {
    console.log(main("5-3")); 
}
catch (error) {
    console.log(error.message);
}

try {
    console.log(main("3-a")); 
}
catch (error) {
    console.log(error.message);
}

console.log(main("3-3")); // [3]

//stage 5
console.log(main("1-10:2")); // [1, 3, 5, 7, 9]

//stage 6
console.log(main(" , 1-5 , ,5-7, 10-20  , 12-16")); // [1, 2, 3, 5, 6, 7, 10, ..., 20]