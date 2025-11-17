// let arr: any = ["Keep", "Remove", "Keep", "Remove", "Keep"]
//
// function removeEveryOther(arr){
//     if (arr.length % 2 === 0 ) {
//         for (let i = arr.length - 1; i > 0; i-=2) {
//             arr.splice(i, 1) }
//     } else if (arr.length  % 2 !== 0) {
//         for (let i = arr.length - 2; i > 0; i-=2) {
//             arr.splice(i, 1)
//         }
//     }
//     return arr;
// }

// Task 2
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
// For example, when the input is green, output should be yellow.

// function changeTrafficLights(color: string) {
//     if (color === 'green') {
//         return 'yellow'
//     }
//     if (color === 'yellow') {
//         return 'red'
//     }
//     if (color === 'red') {
//         return 'green'
//     }
// }

// Task 3
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//
//     [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
//     [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//     [] --> []
// You can assume that all values are integers. Do not mutate the input array.

let array: number[] = [1, -2, 3, -4, 5];

function inverseArrray(arr: number[]) {
    let newArray = [];
    for (const element of arr) {
        let inverseElement = -element;
        newArray.push(inverseElement);
    }
    return newArray
}