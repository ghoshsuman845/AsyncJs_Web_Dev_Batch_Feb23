// Synchronous js
console.log("hi");
console.log("my name is suman");
console.log("i'm a software dev");

// Ansynchronous js
setTimeout(() => {
    console.log("fetching pl data");
}, 5000);
setTimeout(() => {
    console.log("fetching mf data");
}, 2000);
setTimeout(() => {
    console.log("fetching health insurance data");
}, 3000);
// settimeout is a browser API
// it's a method that allows you to execute a piece of code after a certain time has passed
// Syntax: setTimeout(function, ms, param1, param2)

function greeting(fname, sname) {
    console.log("Hello there!", fname, sname );
}
let timeoutId = setTimeout(greeting, 5000, "Suman", "Ghosh")
//clearTimeout: it prevents the setTimeout() method from executing the function
// Syntax: clearTimeout(id)
// clearTimeout(timeoutId);

// setTimeout(function greeting(name) {
//     console.log("Hello there!", name);
// }, 5000, "name")

// setTimeout((name) => {
//     console.log("Hello there!", name);
// }, 5000, name)

// setTimeout(greeting("Suman"), 5000)
// the js will immediately execute the function without waiting, bcoz you're
// passing a function call and not a function reference as the first param