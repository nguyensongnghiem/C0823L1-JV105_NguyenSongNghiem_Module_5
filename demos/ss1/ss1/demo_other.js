function demo(a,b,...c) {

}
demo(1,2,3, 4, 5, 6);

//Spread operator: sao chép và gộp cho mảng hoặc đối tượng

let arr = [1,2,3];
let arrCopy = [...arr];
console.log(arr);
console.log(arrCopy)

let person = {
    id: 1,
    name: "hai",
    point: 9
}

let person2 = {
    id: 2,
    name: "hai2",
    address: "Quảng Nam"
}

let peronCopy = {...person};

let arr2 = [4,5,6];
let arr3 = [...arr, ...arr2];

let child = {
    ...person,
    ...person2
}

// let [a, ...b] = arr;
//
// let a = arr[0]
// let a = arr[1]
// let a = arr[2]

let {id, name: nameStudent, point} = person;
console.log(nameStudent)

