
// // output :-{
// //     "biggest_even": 22,
// //     "smallest_even": 4,
// //     "biggest_odd": 15,
// //     "smallest_odd": 3,
// //     "average_even": 13.2,
// //     "average_odd": 8.5,
// //     "average_all": 11.11
// // }





let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

let biggestEven = 0;
let biggestOdd = 0;
let smallestEven = Infinity;
let smallestOdd = Infinity;

let averageEven = 0;
let averageEvenCount = 0;

let averageOdd = 0;
let averageOddCount = 0;

let averageAll = 0;
let averageAllCount = 0;


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // console.log(numbers[i]);


        if (numbers[i] > biggestEven) {
            numbers[i];

            // console.log(numbers[i]);
            biggestEven = numbers[i];

        }


    }




        if (numbers[i] % 2 !== 0) {
        // console.log(numbers[i]);


        if (numbers[i] > biggestOdd) {
            numbers[i];

            // console.log(numbers[i]);
            biggestOdd = numbers[i];

        }


        }







        if (numbers[i] % 2 === 0) {
        // console.log(numbers[i]);


        if (numbers[i] < smallestEven) {
            numbers[i];
            // console.log(numbers[i]);

            smallestEven = numbers[i];

        }


        }






        if (numbers[i] % 2 !== 0) {
        // console.log(numbers[i]);


        if (numbers[i] < smallestOdd) {
            numbers[i];

            smallestOdd = numbers[i];

            // console.log(numbers[i]);
        }


        }





        if (numbers[i] % 2 === 0) {
            numbers[i];
            // console.log(numbers[i]);

            averageEven += numbers[i];
            averageEvenCount++;


        }
        
        

        if (numbers[i] % 2 !== 0) { 
            numbers[i];
            // console.log(numbers[i]);

            averageOdd += numbers[i];
            averageOddCount++;
        }


        

        for (let i = 0; i < numbers.length; i++) {
            numbers[i];
            // console.log(numbers[i]);

            averageAll += numbers[i];
            averageAllCount++;
        }
        
        
        
        
        
        
        
        
    }
    
console.log("biggestEven: " + biggestEven);
console.log("biggestOdd: " + biggestOdd);
console.log("smallestEven: " + smallestEven);
console.log("smallestOdd: " + smallestOdd);

let averageEvenFinalOutput = averageEven / averageEvenCount;
console.log("averageEven: " + averageEvenFinalOutput);

let averageOddFinalOutput = averageOdd / averageOddCount;
console.log("averageOdd: " + averageOddFinalOutput);


console.log("averageAll: " + averageAll / averageAllCount);