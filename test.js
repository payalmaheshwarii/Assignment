import expandRanges from "./main.js";

//stage 1
console.log(expandRanges("1-3,5")); // [1, 2, 3, 5]
console.log(expandRanges("5")); // [5]
console.log(expandRanges("1-2,4")); // [1, 2, 4]

//stage 2
console.log(expandRanges(" , 1-3 , ,5 ")); // [1, 2, 3, 5]

//stage 3
console.log(expandRanges(" , 1..3 , ,5-7, 10~12 ")); // [1, 2, 3, 5, 6, 7, 10, 11, 12]