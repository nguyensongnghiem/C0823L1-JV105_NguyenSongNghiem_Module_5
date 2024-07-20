// let Dog = (name, age) => {
//     this.name = name;
//     this.age = age;
// }
//
// let dog = new Dog('dog', 2);
// console.log(dog);


let obj = {
    a: 1,
    b() {
        console.log(this)
    },
    c: () => {
        console.log(this)
    }
}
obj.b();
obj.c();
