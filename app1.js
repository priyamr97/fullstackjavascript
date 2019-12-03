// var username = "shashi";
// username = "manu";
// console.log(username);//javascript

//const username1 = "shashi";
// username = "manu";
// console.log(username1);//we will get errror


// const users = {
//     name : "manu",
//     age : 20,
//     company : "gfsjdbcskj",
//     salary : 20000
// };
// users.name = "anu";
// console.log(users);//no error if it is object
 


// for(var i = 0; i <= 10; i++){
//     var name = "shashi";
//     console.log(i);
// }
// console.log(name);//global scope


// function user(){
// var age = 20;
// console.log(age);//function scope
// }
// user();


// for(var i = 0; i <= 10; i++){
//     let username = "shashi";//blocke scope
//     console.log(i);
// }
//  console.log(username);// we will get error


//  "use scrit"
//  user = "priya";
// console.log(user);// without variable also we can initialize but we will get error


// console.log(user);
// var user = "priya";//undefined error

// console.log(user);
// let user = "priya";// reference  error cannot acccess

// const username = "shashi";
// const username = "priya";
// console.log(username);//gives error already been declared

// let user = "shashi";
// user = "priya";
// console.log(user);

// var name = "shashi";
// var name = "priya";
// console.log(name);//here gives latest variable name


// let name1 = "shashi";
// let name1 = "priya";
// console.log(name1);//here give error as already declared                                                 


// function username(){
//  alert("hello function")
// }//called part
// username()//calling part


// (function(){
//     document.write('test')
//     var test = "hello";
// })()

// function user(){
// document.write('hello');
// }



function loadtemplate1(){
var template1 = document.getElementById("template1");
//console.log(template1);
template1.innerHTML = `
<html>
<head>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">

	<title>My Awesome Login Page</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
<style>
/* Coded with love by Mutiullah Samim */
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #60a3bc !important;
}
.user_card {
    height: 400px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #f39c12;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;

}
.brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    background: #60a3bc;
    padding: 10px;
    text-align: center;
}
.brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
}
.form_container {
    margin-top: 100px;
}
.login_btn {
    width: 100%;
    background: #c0392b !important;
    color: white !important;
}
.login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
}
.login_container {
    padding: 0 2rem;
}
.input-group-text {
    background: #c0392b !important;
    color: white !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
}
</style>
    </head>
<!--Coded with love by Mutiullah Samim-->
<body>
	<div class="container h-100">
		<div class="d-flex justify-content-center h-100">
			<div class="user_card">
				<div class="d-flex justify-content-center">
					<div class="brand_logo_container">
						<img src="https://cdn.freebiesupply.com/logos/large/2x/pinterest-circle-logo-png-transparent.png" class="brand_logo" alt="Logo">
					</div>
				</div>
				<div class="d-flex justify-content-center form_container">
					<form>
						<div class="input-group mb-3">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" class="form-control input_user" value="" placeholder="username">
						</div>
						<div class="input-group mb-2">
							<div class="input-group-append">
								<span class="input-group-text"><i class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" class="form-control input_pass" value="" placeholder="password">
						</div>
						<div class="form-group">
							<div class="custom-control custom-checkbox">
								<input type="checkbox" class="custom-control-input" id="customControlInline">
								<label class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
		
				<div class="mt-4">
					<div class="d-flex justify-content-center links">
						Don't have an account? <a href="#" class="ml-2">Sign Up</a>
					</div>
					<div class="d-flex justify-content-center links">
						<a href="#">Forgot your password?</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

</body>
</html>
`;
}


function loadtemplate2(){
    var template2 = document.getElementById("template2");
    template2.innerHTML = `
    <html>
    <head>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .row.heading h2 {
        color: #fff;
        font-size: 52.52px;
        line-height: 95px;
        font-weight: 400;
        text-align: center;
        margin: 0 0 40px;
        padding-bottom: 20px;
        text-transform: uppercase;
    }
    ul{
      margin:0;
      padding:0;
      list-style:none;
    }
    .heading.heading-icon {
        display: block;
    }
    .padding-lg {
        display: block;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .practice-area.padding-lg {
        padding-bottom: 55px;
        padding-top: 55px;
    }
    .practice-area .inner{ 
         border:1px solid #999999; 
         text-align:center; 
         margin-bottom:28px; 
         padding:40px 25px;
    }
    .our-webcoderskull .cnt-block:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        border: 0;
    }
    .practice-area .inner h3{ 
        color:#3c3c3c; 
        font-size:24px; 
        font-weight:500;
        font-family: 'Poppins', sans-serif;
        padding: 10px 0;
    }
    .practice-area .inner p{ 
        font-size:14px; 
        line-height:22px; 
        font-weight:400;
    }
    .practice-area .inner img{
        display:inline-block;
    }
    
    
    .our-webcoderskull{
      background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
      
    }
    .our-webcoderskull .cnt-block{ 
       float:left; 
       width:100%; 
       background:#fff; 
       padding:30px 20px; 
       text-align:center; 
       border:2px solid #d5d5d5;
       margin: 0 0 28px;
    }
    .our-webcoderskull .cnt-block figure{
       width:148px; 
       height:148px; 
       border-radius:100%; 
       display:inline-block;
       margin-bottom: 15px;
    }
    .our-webcoderskull .cnt-block img{ 
       width:148px; 
       height:148px; 
       border-radius:100%; 
    }
    .our-webcoderskull .cnt-block h3{ 
       color:#2a2a2a; 
       font-size:20px; 
       font-weight:500; 
       padding:6px 0;
       text-transform:uppercase;
    }
    .our-webcoderskull .cnt-block h3 a{
      text-decoration:none;
        color:#2a2a2a;
    }
    .our-webcoderskull .cnt-block h3 a:hover{
        color:#337ab7;
    }
    .our-webcoderskull .cnt-block p{ 
       color:#2a2a2a; 
       font-size:13px; 
       line-height:20px; 
       font-weight:400;
    }
    .our-webcoderskull .cnt-block .follow-us{
        margin:20px 0 0;
    }
    .our-webcoderskull .cnt-block .follow-us li{ 
        display:inline-block; 
        width:auto; 
        margin:0 5px;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa{ 
       font-size:24px; 
       color:#767676;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
       color:#025a8e;
    }
    
    </style>
    </head>
    <body>
    <section class="our-webcoderskull padding-lg">
    <div class="container">
      <div class="row heading heading-icon">
          <h2>Our Team</h2>
      </div>
      <ul class="row">
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Web coder skull</a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team1.png" class="img-responsive" alt=""></figure>
              <h3><a href="#">Kappua </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team4.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Manish </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
         </li>
        <li class="col-12 col-md-6 col-lg-3">
            <div class="cnt-block equal-hight" style="height: 349px;">
              <figure><img src="http://www.webcoderskull.com/img/team2.png" class="img-responsive" alt=""></figure>
              <h3><a href="http://www.webcoderskull.com/">Atul </a></h3>
              <p>Freelance Web Developer</p>
              <ul class="follow-us clearfix">
                <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              </ul>
            </div>
        </li>
      </ul>
    </div>
  </section>
  <style>
    .row.heading h2 {
        color: #fff;
        font-size: 52.52px;
        line-height: 95px;
        font-weight: 400;
        text-align: center;
        margin: 0 0 40px;
        padding-bottom: 20px;
        text-transform: uppercase;
    }
    ul{
      margin:0;
      padding:0;
      list-style:none;
    }
    .heading.heading-icon {
        display: block;
    }
    .padding-lg {
        display: block;
        padding-top: 60px;
        padding-bottom: 60px;
    }
    .practice-area.padding-lg {
        padding-bottom: 55px;
        padding-top: 55px;
    }
    .practice-area .inner{ 
         border:1px solid #999999; 
         text-align:center; 
         margin-bottom:28px; 
         padding:40px 25px;
    }
    .our-webcoderskull .cnt-block:hover {
        box-shadow: 0px 0px 10px rgba(0,0,0,0.3);
        border: 0;
    }
    .practice-area .inner h3{ 
        color:#3c3c3c; 
        font-size:24px; 
        font-weight:500;
        font-family: 'Poppins', sans-serif;
        padding: 10px 0;
    }
    .practice-area .inner p{ 
        font-size:14px; 
        line-height:22px; 
        font-weight:400;
    }
    .practice-area .inner img{
        display:inline-block;
    }
    
    
    .our-webcoderskull{
      background: url("http://www.webcoderskull.com/img/right-sider-banner.png") no-repeat center top / cover;
      
    }
    .our-webcoderskull .cnt-block{ 
       float:left; 
       width:100%; 
       background:#fff; 
       padding:30px 20px; 
       text-align:center; 
       border:2px solid #d5d5d5;
       margin: 0 0 28px;
    }
    .our-webcoderskull .cnt-block figure{
       width:148px; 
       height:148px; 
       border-radius:100%; 
       display:inline-block;
       margin-bottom: 15px;
    }
    .our-webcoderskull .cnt-block img{ 
       width:148px; 
       height:148px; 
       border-radius:100%; 
    }
    .our-webcoderskull .cnt-block h3{ 
       color:#2a2a2a; 
       font-size:20px; 
       font-weight:500; 
       padding:6px 0;
       text-transform:uppercase;
    }
    .our-webcoderskull .cnt-block h3 a{
      text-decoration:none;
        color:#2a2a2a;
    }
    .our-webcoderskull .cnt-block h3 a:hover{
        color:#337ab7;
    }
    .our-webcoderskull .cnt-block p{ 
       color:#2a2a2a; 
       font-size:13px; 
       line-height:20px; 
       font-weight:400;
    }
    .our-webcoderskull .cnt-block .follow-us{
        margin:20px 0 0;
    }
    .our-webcoderskull .cnt-block .follow-us li{ 
        display:inline-block; 
        width:auto; 
        margin:0 5px;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa{ 
       font-size:24px; 
       color:#767676;
    }
    .our-webcoderskull .cnt-block .follow-us li .fa:hover{ 
       color:#025a8e;
    }
    
    </style>
    
  <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    </body>
    </html>
    `;


}
function loadtemplate3(){
    var template3 = document.getElementById("template3");
   template3.innerHTML = `
   <html>
   <head>
   <title>Awesome Search Box</title>
   <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
   <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
   <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
<style>

body,html{
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background: #e74c3c !important;
    }

    .searchbar{
    margin-bottom: auto;
    margin-top: auto;
    height: 60px;
    background-color: #353b48;
    border-radius: 30px;
    padding: 10px;
    }

    .search_input{
    color: white;
    border: 0;
    outline: 0;
    background: none;
    width: 0;
    caret-color:transparent;
    line-height: 40px;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_input{
    padding: 0 10px;
    width: 450px;
    caret-color:red;
    transition: width 0.4s linear;
    }

    .searchbar:hover > .search_icon{
    background: white;
    color: #e74c3c;
    }

    .search_icon{
    height: 40px;
    width: 40px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color:white;
    text-decoration:none;
    }
</style>
   </head>
 <!-- Coded with love by Mutiullah Samim-->
 <body>
   <div class="container h-100">
     <div class="d-flex justify-content-center h-100">
       <div class="searchbar">
         <input class="search_input" type="text" name="" placeholder="Search...">
         <a href="#" class="search_icon"><i class="fas fa-search"></i></a>
       </div>
     </div>
   </div>
   <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
 </body>
   </html>
   `;
}
function loadtemplate4(){
    var template4 = document.getElementById("template4");
    template4.innerHTML = `
    <html>
    <head>
    <title>Login Page</title>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
   <!--Made with love by Mutiullah Samim -->
   
	<!--Bootsrap 4 CDN-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    
    <!--Fontawesome CDN-->
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">

	<!--Custom styles-->
    <link rel="stylesheet" type="text/css" href="styles.css">
    <style>
    /* Made with love by Mutiullah Samim*/

@import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
background-image: url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;
}

.card{
height: 370px;
margin-top: auto;
margin-bottom: auto;
width: 400px;
background-color: rgba(0,0,0,0.5) !important;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}
    </style>
</head>
<body>
<div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" class="form-control" placeholder="username">
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input type="password" class="form-control" placeholder="password">
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox">Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn float-right login_btn">
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

</body>
    </html>
    `;
}