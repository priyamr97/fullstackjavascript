//console.log("hello javascript and nodejs");


//popup way
//predefined functions
//alert('hello javascript');
//confirm('hello confirm method');
//prompt('hello user load before page loading');

//document
//document.write('hello javascript document');
//document.body.innerHTML = "hello javascript";
//document.body.innerText = "hello inner text";


/*var username = 'priya';
var username1= `shilpa
<h1>hello</h1>
<input type="text" placeholder="username"`

console.log(username);
console.log(typeof username);
console.log(username1);
var name = 'liki';
var age = 20;
var company = 'qspider';
var salary = 100000;
 
console.log(typeof name);
console.log(typeof age);

document.write("my name is"+name+"my age is"+age+"i work for"+company+"salary is"+salary);
 document.write(`<h1>my name is ${name}</h1>
    <p style="color:red">my age is ${age+1}</p>
    <b style="color:green">i work for ${company}</b>
    <p style="color:blue">salary is ${salary}</p>`);*/

    // var str = "priya";
    // var str1 = 'shilpa';
    // var str2 = `vishala`;
    // var str3 = new String("priya");

    // console.log(typeof str);
    // console.log(typeof str1);
    // console.log(typeof str2);
    // console.log(typeof str3.valueOf);/*valueof--return the primitive value of the specified object*/


    // var num = 10;
    // num = 10.5;
    // num = 10/5;
    // var num1 = new Number(2);
    // console.log(typeof num);
    // console.log(typeof num1.valueOf);

    // var username;
    // console.log(typeof username);

    // var username1;
    // var testnull = null;
    // var bool = true;
    // var bool1 = new Boolean();

    // console.log(typeof testnull);
    // console.log(typeof bool);
    // console.log(typeof bool1.valueOf);


     var array = ["java","c",undefined,null,{},function(){},true];
     var str = "hello";
    //  var splitType = str.split("");
    //  var splitType = str.split(" ");//split method converts string into array value
    //  var es6waytoconvertstrigintoArray = Array.from(str);
    //  console.log(es6waytoconvertstrigintoArray);//to covert string into array
    //  console.log(splitType);
    //  console.log(splitType.length);
    //  console.log(array.length);
    //  console.log(array[0]);                                                              
    //  for(var i = 0; i < array.length; i++)
    //  {
    //    console.log(array[i]);
    // }

    // console.log(typeof array);
    // console.log(Array.isArray(array));
    // console.log(Array.isArray(str));  

    // var arraylikeObject = Array.from(str);

    var [...newWay] = str;//to convert string into array (... is spread operator)
    console.log(newWay);
    console.log(Array.isArray(newWay));
    newWay.forEach(function(x){
      console.log(x);
    });
    var array1 = ['priya','shilpa'];
    var str2 = "javascript";
    var totalArray = array.concat(array1);//es5 way concat array
    console.log(totalArray);
var es6way = [array,array1];//splits the string
var es6way = [...array,...array1,...str2];//combine 2 more array es6way
console.log(es6way);


//convert array into string

var arrayIntoString = array.toString();
console.log(arrayIntoString);
console.log(typeof arrayIntoString);
var onemorewaytoconvertArrayIntoString = array.join(`😃`);
console.log(onemorewaytoconvertArrayIntoString);
console.log(typeof onemorewaytoconvertArrayIntoString); 
var array2 = Array.of("raj","ram");
var array3 = Array(7);
console.log(array2);
console.log(array3);


//object creation

var EmpData = {
  name: "priya",
  age: 20,
  company: 'testyantra',
  salary: 30000,
  designation: 'nodejs developer',
  skills: ["java","c","c++"]

};
EmpData.name = "ram";
console.log(EmpData);
console.log(EmpData["name"]);
console.log(EmpData["age"]);
console.log(EmpData.designation);
console.log(EmpData.salary);
console.log(EmpData.skills);
console.log(EmpData.skills[0]);

//to create multiple objets

var obj=[{
  name: "priya",
  age: 20,
  company: 'testyantra',
  salary: 30000,
  designation: 'nodejs developer',
  skills: ["java","c","c++"]
},
{name: "ram",
age: 20,
company: 'testyantra',
salary: 30000,
designation: 'nodejs developer',
skills: ["java","c","c++"]
},
{
  name: "priya",
  age: 20,
  company: 'testyantra',
  salary: 30000,
  designation: 'nodejs developer',
  skills: ["java","c","c++"],
  username: function(){
    console.log("hello");
  }
}];
console.log(obj);
console.log(typeof obj);


//create object in constructor way
var obj1 = new Object();
obj1.name = "priya";
obj1.age = 20;
obj1.salary = 20000;
console.log(obj1);

var test = Object.entries(obj1);
console.log(test);

var empdata = {
 ' emp-name': "priya",
  age: 20,
  salary: 20000,
  company: "jcjsc",
  designation: "nodejs developer",
  id: "egu12",
  location: "banglore",
  education: "b.e",
  hiredate: new Date('2019/12/10'),
  empdetails : function() {
    document.write(`<h1>my name is 😃${this.emp-name}</h1>
    <ul>
    <li>my age is ${this.age}</li>
    <li>i am getting ${this.salary}</li>
    <li>i work in ${this.company}</li>
    <li>${this.designation}</li>
    <li>${this.id}</li>
    <li>${this.location}</li>
    <li>${this.education}</li>
    <li>${this.hiredate}</li>
    </ul>
    `);
  }
};
console.log(empdata);
empdata.empdetails();












