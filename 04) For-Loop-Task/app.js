// // let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let evenSum = 0;
// let oddSum = 0;
// let evenCount = 0;
// let oddCount = 0;

// let biggest_even = -Infinity;
// let smallest_even = Infinity;

// let biggest_odd = -Infinity;
// let smallest_odd = Infinity;

// let total = 0;

// // for loop
// for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];

//     total += num;

//     if (num % 2 === 0) {
//         // even number
//         evenSum += num;
//         evenCount++;

//         if (num > biggest_even) {
//             biggest_even = num;
//         }

//         if (num < smallest_even) {
//             smallest_even = num;
//         }

//     } else {
//         // odd number
//         oddSum += num;
//         oddCount++;

//         if (num > biggest_odd) {
//             biggest_odd = num;
//         }

//         if (num < smallest_odd) {
//             smallest_odd = num;
//         }
//     }
// }

// let result = {
//     biggest_even: biggest_even,
//     smallest_even: smallest_even,
//     biggest_odd: biggest_odd,
//     smallest_odd: smallest_odd,
//     average_even: +(evenSum / evenCount).toFixed(1),
//     average_odd: +(oddSum / oddCount).toFixed(1),
//     average_all: +(total / numbers.length).toFixed(2)
// };

// console.log(result);












// // output :-{
// //     "biggest_even": 22,
// //     "smallest_even": 4,
// //     "biggest_odd": 15,
// //     "smallest_odd": 3,
// //     "average_even": 13.2,
// //     "average_odd": 8.5,
// //     "average_all": 11.11
// // }



















// -----------------------------------new code-------------------------------------
// ------------------------------------biggestEven----------------------------------------------------

// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let  biggestEven = 0; // [0 chhota number hai, Biggest find karna ho → starting value 0 (positive numbers ke liye)]


// for (let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
//         if(numbers[i] > biggestEven) {
//             console.log(numbers[i]);
//             biggestEven = numbers[i];
//         }
//     }
    
// }

// console.log(biggestEven);


// output :-{
//     "biggest_even": 22,

// }






// ------------------------------------SmallestEven----------------------------------------------------
// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let smallestEven = Infinity;  // [Infinity bohot bada number hai, Smallest find karna ho → starting value Infinity]

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         // console.log(numbers[i]);

//         if(numbers[i] < smallestEven) {
//             // console.log(numbers);
//             smallestEven = numbers[i];
            
//         }
//     }
// }
// console.log(smallestEven);











// ------------------------------------BbiggestOdd------------------------------------------


// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];
// let BiggestOdd = 0;


// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         // console.log(numbers[i]);
//         if(numbers[i] > BiggestOdd) {
//             // console.log(numbers[i]);
//             BiggestOdd = numbers[i];
//         }
//     }
// }

// console.log(BiggestOdd);












// -------------------------------SmallestOdd---------------------------
// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];
// let SmallestOdd = Infinity;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         // console.log(numbers[i]);
//         if(numbers[i] < SmallestOdd) {
//             SmallestOdd = numbers[i];
//         }
//     }
// }
// console.log(SmallestOdd);   // 3









//------------------------------average_even-----------------------------,
// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let avgEven = 0;
// let evenCount = 0;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 === 0) {
//         numbers[i];
//         console.log(numbers[i]);


//         avgEven = avgEven + numbers[i];
//         console.log(avgEven);
//         evenCount++;
//         console.log(evenCount);
        
//     }


    
// }
// let finalOutput = avgEven / evenCount;
// console.log(finalOutput);







// ----------------------------------------Avg_Odd----------------------------------------
// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let avgOdd = 0;
// let avgCount = 0;

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         numbers[i];
//         // console.log(numbers[i]);

//         avgOdd = avgOdd + numbers[i];
//         console.log(avgOdd);

//         avgCount++;
//         console.log(avgCount);
//     }
// }
// let finalOutput =  avgOdd / avgCount;
// console.log(finalOutput);
















// ---------------------------Avg_All------------------------------------
// let numbers = [12, 7, 4, 15, 22, 9, 18, 3, 10];

// let avgAll = 0;
// let avgCount = 0;

// for(let i = 0; i < numbers.length; i++) {
//     numbers[i];
//     avgAll = avgAll + numbers[i];
//     avgCount++;

//     // console.log(avgAll);
//     // console.log(avgCount);

// }
// let finalOutput = avgAll / avgCount;
// console.log(finalOutput);   // 11.11111111111111
