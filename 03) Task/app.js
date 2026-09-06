// even = 0,2,4,6,8,10
// odd = 1,3,5,7,9


// Array of numbers
let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);


// odd numbers
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers:", oddNumbers);




// main code
let finalResult = {
    biggest_even: Math.max(...evenNumbers),
    smallest_even: Math.min(...evenNumbers),
    average_even: evenNumbers.reduce((a, b) => a + b, 0) / evenNumbers.length,



    biggest_odd: Math.max(...oddNumbers),
    smallest_odd: Math.min(...oddNumbers),
    average_odd: oddNumbers.reduce((a, b) => a + b, 0) / oddNumbers.length,



    average_all: (numbers.reduce((a, b) => a + b, 0) / numbers.length)
}


    console.log("Biggest Even Number:", finalResult.biggest_even);
    console.log("Smallest Even Number:", finalResult.smallest_even);
    console.log("Average Even Numbers:", finalResult.average_even);




    console.log("Biggest Odd Number:", finalResult.biggest_odd);
    console.log("Smallest Odd Number:", finalResult.smallest_odd);
    console.log("Average Odd Numbers:", finalResult.average_odd);




    console.log("Average All Numbers:", finalResult.average_all);




    console.log("Final Result:", finalResult);







// output :-
// {
//     "biggest_even": 22,
//     "smallest_even": 4,
//     "biggest_odd": 15,
//     "smallest_odd": 3,
//     "average_even": 13.2,
//     "average_odd": 8.5,
//     "average_all": 11.11
// }