// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23, 5, 3) when we write in single digit count in array thats why it starts from 0
let myCreatedDate = new Date("01-14-2023") //MM-DD-YY starts form 1
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Date.now()); //millisecond
// console.log(Math.floor(Date.now()/1000)); //1000 gives decimal after using math.floor decimal gets removed

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`
newDate.toLocaleString('default', {
    weekday: "long",
})