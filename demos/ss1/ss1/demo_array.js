const arr = [1,3,4,6,0,2];
arr.forEach(function (item, index) {
    console.log(item);
    item = item +1;
})

// Sau ES6
arr.forEach((item, index) => {
    console.log(item);
})

console.log(arr);

const newArr = arr.map((item, index) => {
    if(index == 0) {
        return item * 2;
    } else {
        return item;
    }
});

console.log(newArr);

const filterArr = arr.filter((item, index) => item % 2 === 0);

// reduce
// Hàm tích luỹ 1 giá trị qua từng vòng lặp

// let max  = arr[0];
//
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// let max = arr.reduce((max, item, index) => {
//     if(item >max) {
//         return item;
//     } return max;
// })

let max = arr.reduce((max, item, index) => item > max? item:max);

let sum = arr.reduce((sum, item) => sum + item, 0);

console.log(max)