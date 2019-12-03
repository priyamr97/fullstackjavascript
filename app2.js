//function with arguments
function username(name, age, company, salary){
    console.log(`
    my name is ${name} and my age is ${age} 
    i work for ${company} and i am getting${salary}
    `);
}
username("shahi",20,"jspider",300000);//parameter values

//function with return statement                                                 
function addnumber(a, b){
    var c = a + b;
    return c;
}
console.log(addnumber(3, 5));

//es5 way
function numbers(num){
    if(num === undefined){
    num = 10*2;
}
console.log(num);
}
numbers();

//es6 way
function numberwithEs6(num1 = 10){
    console.log(num1);
}
numberwithEs6();

//function argument object or convert object to array
function names(){
    //console.log("may name is",args);
    //var names = Array.from(argumets);
    var[...names] = arguments;
    names.forEach(function(name){
        console.log(name);
    });
}
names("priya","shilpa","vishala");


//function hoistingworks with naming function
username1();
function username1(){
    console.log("my name is priya");
}


// company();
// var comapany = function(){
//     console.log("my company is qspiders");
// };//error

var x = "hello x";//global
function show(){
    var outerText = "hello outer text";//local
    function innerBlock(){
        var innerText = "hello innertext";
        console.log(innerText)
        console.log(outerText)//closure
        console.log(x)
    }
    innerBlock();
}
show();


/////////////////////////////////////////////////////
//  function test(){
//     document.write('hello test');
//  }//normal naming functin

// //fat arrow function es6
// test() =>{} //error

var username2 = function(name){
    return name;
}
console.log(username2("manu"));//normal function calling

/////////////////////////////////////////////////////////////////////////



//es6 arrow function
var usernamewithes6 = (name) =>name;
console.log(usernamewithes6("priya"));//es6 fat arrow calling

// var usernamewithes6 = () =>{
//     return arguments;
// } 
// console.log(usernamewithes6("priya"));//error fat arrow doesnot have argument object


//////////////////////////////////////////////////////////////////////////////
var usernamewithes6 = (...args) => { //(...)means rest operator
    return args;
};
console.log(usernamewithes6("priya","shilpa","shashi"));

///////////////////////
//normal funtion
var user = {
    name: "anu",
    age: 20,
    company: "sjdia",
    salary:3568912,
    userInfo: function() {
        console.log(`name is ${this.name}
        and age is ${this.age} work for ${this.company} i am getting ${this.salary}`);
    }
};
   


var user1 = {
    name: "manu",
    age: 30,
    company: "sdcjdia",
    salary:35912,
    userInfo1: () => {
        // console.log(`name is ${this.name}and age is ${this.age} work for ${this.company} i am getting ${this.salary}`);
        console.log(`name is ${user1.name}
        and age is ${user1.age} work for ${user1.company} i am getting ${user1.salary}`)
    }
};//fat arrow fuction 

user.userInfo();
user1.userInfo1();

//////////////////////////////
//callack() fuction

function show(){
    console.log("heello javascript");
}
function anotherfunction(callback)
{
    callback();
}

anotherfunction(show);
//////////////////
//function constructor

function User(name, age, company, salary){
    this.name = name;
    this.age = age;
    this.company = company;
    this.salary = salary;
}
let user2 = new User("manu",20,"hjsv",1223782);
let user3 = new User("anu",20,"hjsv",1223782);
console.log(user2);
console.log(user3);






































