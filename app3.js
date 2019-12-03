
// //pop method

// var languages = ["java","c","js","html"];
// languages.pop();
// console.log(languages);


// ////////////////////////////
// //shift mathod
// var languages1 = ["java","c","js","html"];
// languages1.shift();
// console.log(languages1);

// //////////////////////////
// //push method
// var languages2 = ["java","c","js","html"];
// languages2.push("css");
// console.log(languages2);

// ////////////////////////
// //unshift method
// var languages2 = ["java","c","js","html"];
// languages2.unshift("css");
// console.log(languages2);

// ///////////////////
// //splice method
// var languages2 = ["java","c","js","html"];
// languages2.splice(1,0,"css");
// console.log(languages2);

// ///////////////////////////
// // iterate array values

// var lang = ["java","c","js","html"];
// for(var i = 0; i<lang.length; i++){
//     console.log(lang[i]);
// }
  
// //foreach method
// lang.forEach(function(value,index,array){
// console.log(`${index}:${value}`)
// });

var employees = [
    { 
        emp_id: "dhi79",
        emp_name: "manu",
        emp_photo: "https://cdn.pixabay.com/photo/2016/12/23/07/58/holiday-table-1926946_960_720.jpg",
        emp_age: 30,
        emp_gender: "👦male",
        emp_company: "dnccdc",
        emp_salary: 3890,
        emp_designation: "web developer",
        emp_doj: new Date("2015/06/02"),
        emp_location: "madnd",
        emp_education: "BE"
    },

    {emp_id: "dhi78",
    emp_name: "anu",
    emp_photo: "https://cdn.pixabay.com/photo/2019/11/06/15/49/redheads-4606477_960_720.jpg",
    emp_age: 31,
    emp_gender: "👧female",
    emp_company: "dndc",
    emp_salary: 38900,
    emp_designation: "java developer",
    emp_doj: new Date("2015/07/02"),
    emp_location: "mysore",
    emp_education: "BE"},

    {emp_id: "dhi77",
    emp_name: "priya",
    emp_photo: "https://cdn.pixabay.com/photo/2019/11/04/20/39/wadi-rum-4602118_960_720.jpg",
    emp_age: 20,
    emp_gender: "👧female",
    emp_company: "dnjnjj",
    emp_salary: 348900,
    emp_designation: "web developer",
    emp_doj: new Date("2019/12/02"),
    emp_location: "manglore",
    emp_education: "BE"},

    {emp_id: "dhi76",
        emp_name: "shilpa",
        emp_photo: "https://cdn.pixabay.com/photo/2019/11/20/13/09/river-4640055_960_720.jpg",
        emp_age: 22,
        emp_gender: "👧female",
        emp_company: "dnccd",
        emp_salary: 31890,
        emp_designation: "c developer",
        emp_doj: new Date("2016/05/22"),
        emp_location: "banglore",
        emp_education: "BE"},
    
        {emp_id: "dhi75",
        emp_name: "ram",
        emp_photo: "https://cdn.pixabay.com/photo/2019/10/30/15/33/tajikistan-4589831_960_720.jpg",
        emp_age: 28,
        emp_gender: "👦male",
        emp_company: "dcdc",
        emp_salary: 38901,
        emp_designation: "python developer",
        emp_doj: new Date("2016/06/12"),
        emp_location: "banglore",
        emp_education: "BE"}
];
var emp = [];
employees.forEach(empdata => {
// var test = emp.push(empdata); //all the data pushinng into empty array
 //console.log(test); //dispaly array
 //console.log(test.emp_name);
 emp.push(`
 <div class="card">
  <img src="${empdata.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empdata.emp_name}</h5>
    <span class="badge badge-success float-right">${empdata.emp_id}</span>
    <br>
    <span class="badge badge-primary float-right">${empdata.emp_designation}</span> 
    <br>
    <li class='list-group-item'> salary: ${empdata.emp_salary}</li>
    <li class='list-group-item'> location:${empdata.emp_location}</li>
    <li class='list-group-item'> education:${empdata.emp_education}</li>
    <li class='list-group-item'> age:${empdata.emp_age}</li>
    <li class='list-group-item'> company:${empdata.emp_company}</li>
    <li class='list-group-item'> gender:${empdata.emp_gender}</li>
    <li class='list-group-item'> date of joining:${empdata.emp_doj.toString()}</li>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`);
});

document.getElementById('template').innerHTML = emp;


///////////////////////////////////////////////
/////// reverse array()


var names = ["priya","shilpa","shashi","likitha"];
var test = names.reverse();
console.log(test);
var test = names.sort();

 var str = " hello js";
 
 var string = [...str].reverse().join("");
 console.log(string);
  

var num = [10,20,30,40,1,54];
var test3 = num.reverse();

var numsort = num.sort(function (a,b){
    return a-b;
});
console.log(numsort);

//////////////////////////////////
// filter method
var num = [10,20,50,1,5,7,100,300,1000,1102];

var result = num.filter(function(x){
  return x > 50;
});
var es6way = num.filter(y => y > 50);// for short form
console.log(result);
console.log(es6way);


var lang = ["java", "java","java","python","python","python"];
var testresult = lang.filter(function(value, index,array){
return array.indexOf(value) === index;
});
 console.log(testresult);
// var index = lang.indexOf("python");
// console.log(index);


//remove duplicates
var lang1 = ["java", "java","java","python","python","python"];
var duplicates = lang1.filter((value, index,array) =>{
return array.indexOf(value) === index;
});
 //console.log(duplicates);
var [...duplicates] = new Set(lang1);
console.log(duplicates);

//without filter and set method
var duplicates1 = [];
 for(var i = 0;i< lang1.length; i++){
   if(lang1.indexOf(lang1[i]) == -1){
     duplicates1.push(lang1[i])
   }
 }
 console.log(duplicates);


//////////////////////////
//reduce mathod

var number = [10,40,500,600,20,50,43,600,200];
 var test = number.reduce((a,b) =>{
   console.log(a);
   console.log(b);
   return a + b;
  });
console.log(test);   

///////////////////////////////////
//find method
var numbers = [10,40,500,600,20,50,43,600,200];

var find = numbers.find(element => element >12);
console.log(find);

///////////////////////////////////////
//fill method
var lang2  = ["jee","c","js","aws","node","react"];
 
var test1 = lang2.fill("java");
console.log(lang2);
console.log(test1);

////////////////////
//for of loop
var users = ["priya","shilpa","ram"];
for(let user of users){
  console.log(user);
}


//////////////////////////
//key and values
var lang3 = ["jee","c","js","aws","node","react"];
var keys = lang3.keys();
for(let key of keys){
  console.log(key);
}

//values
var lang3 = ["jee","c","js","aws","node","react"];
var values = lang3.values();
for(let value of values){
  console.log(value);
}


/////////////////
//includes method
var lang4 = ["jee","c","js","aws","node","react"];
if(lang4.includes('js')){
  alert("js is exist...........");
}
else{
  alert("js is not exist.......");
}

////////////////////////
//map method

var lang4 = ["jee","c","js","aws","node","react"];
var foreach = lang.forEach(x => x);
console.log(foreach);   //it not creates new array

var map = lang4.map(y => y);
console.log(map);
console.log(lang);//crates new array

var numbers1 = [10,40,500,600,20,50,43,600,200];
var foreach = numbers1.forEach(x => x * 2);
console.log(foreach);   //it not creates new array and shows output as undefined

var map = numbers1.map(y => y *2);
console.log(map);//crates new array

////////////////////
//Date object
 var date = new Date();
 var year = date.getFullYear();
 var hour = date.getHours();
 var min = date.getMinutes();
 var seconds = date.getSeconds();
 var miliseconds = date.getMilliseconds();
 var time = date.getTime(); 
 console.log(date);
 console.log(year);
 console.log(hour);
 console.log(min);
 console.log(seconds);
 console.log(miliseconds);
 console.log(time);
 



























