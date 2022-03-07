// function sum(a:number, b:number) :number{
//     return a+b;
// }
// const a = 10;
// const b = 10;
// // const result = sum(a,b);
// // console.log(result);
// let number1: number = 5;
// let number2: number = 10;
// let phrase: string = "Result is";
// let permit: boolean = true;
// const result = number1 + number2;
// if(permit){
//     console.log(phrase + result);
// }else{
//     console.log("Not show result");
// }
// const person: { name: string, age: number} = {
//     name: "Tan",
//     age: 20
// }
// console.log(person);
type TypePerson = {
    id: number;
    name: string;
    age: number;
    status?: boolean // ? có thể có hoặc không
}
const person: TypePerson = {
    id: 1,
    name: "Tan",
    age: 20
}
const persons: TypePerson[] = [
    {id: 1, name: "Tan1", age: 20, status: true},
    {id: 1, name: "Tan1", age: 20, status: false},

]
const show = (): number => {
    return 10;
}
console.log(person.name);