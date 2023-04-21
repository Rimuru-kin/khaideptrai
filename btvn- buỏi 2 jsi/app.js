const arr1 = [1, 2, 4, 5, 6];
const arr2 = [1, 6, 8, 9, 0];

const result = arr1.filter(it => arr2.includes(it));

console.log(result);

const arr = [1, 54, 6, 7];

const newArr = arr.map(picaso)

function picaso(arr, i, value) {

    return arr + 5;

};
console.log(newArr);


const value1 = [
    [1, 2, 4, 5, 6, 7],

    [3, 5, 675, 8, 96]
]

const vaueToRemove = [1, 8, 10, 96, 7];
const arr3 = value1.filter(item => item !== vaueToRemove);

console.log(value1);