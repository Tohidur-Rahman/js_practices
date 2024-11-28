/*

JavaScript is the world's most popular programming language.

JavaScript is the programming language of the Web.

JavaScript is easy to learn.

This tutorial will teach you JavaScript from basic to advanced.

*/



/*
ECMAScript 2015 was the second major revision to JavaScript.

ECMAScript 2015 is also known as ES6 and ECMAScript 6.

This chapter describes the most important features of ES6.

*/

/*
Display Data in JavaScript

1. window.alert() / alert('')
2. document.write('')  //
3. innerHTML= 
4. console.log() 

*/

// User input

prompt('Enter your name:')


// String concatenate
console.log("Hello" + " " + "World");



// Template Literals (ES6)
// Backtick ``
let fname = "Rahman";
let age = "27";

console.log(`His name is ${fname}
    His age is ${age}`);



/*
Variable

1. var = global scope
2. let = block scope / function
3. const = constant value

*/

var fname = "Tohidur Rahman";
var age = 26;
{
    let x = 2;  
}
const pi = 3.1416;

/*
JavaScript has 8 Datatypes

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

Primitive data type: 
1. String
2. Number
3. Boolean
4. Undefined
5. Null
6. Symbol
7. NAN -> Not A Number

Non Primitive data type:

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

*/


// operator

// operand operator operand 
// 1+1


/*
    Assignment Operator = assigns values

    Addition Operator + adds values

    Addition Operator + adds values

    Multiplication Operator * multiplies values

    Comparison Operator > compares values

*/




/*
 Arithmetic Operators

    Operator	
    +	Addition
    -	Subtraction
    *	Multiplication
    **	Exponentiation (ES2016) power
    /	Division
    %	Modulus (Remainder)
    ++	Increment
    --	Decrement

*/ 


/*
 Assignment operators assign values to JavaScript variables.

    Operator	Example	    Same As
    =	        x = y	    x = y
    +=	        x += y	    x = x + y
    -=	        x -= y	    x = x - y
    *=	        x *= y	    x = x * y
    /=	        x /= y	    x = x / y
    %=	        x %= y	    x = x % y
    **=	        x **= y	    x = x ** y

*/


/*

    Comparison Operators
    
    ==	equal to
    ===	equal value and equal type
    !=	not equal
    !==	not equal value or not equal type
    >	greater than
    <	less than
    >=	greater than or equal to
    <=	less than or equal to
    ?	ternary operator

*/ 



/*

 Logical Assignment Operators

    Operator	Example	    Same As
    &&=	        x &&= y	    x = x && (x = y)
    ||=	        x ||= y	    x = x || (x = y)
    ??=	        x ??= y	    x = x ?? (x = y)

*/ 


// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date();

console.log(date);

// $(document).ready(function(){

// })

/*  
    var x;
    x = prompt('Enter your name:');
    console.log(x);
    document.write(x);

*/

/*  
     var  x = 20;

        switch(x){
            case 10 : console.log("This is a 10")
            break; 
            
            case 20 : console.log("This is a 20")
            break; 
            
            case 30 : console.log("This is a 30") 
            break;

            default: "No Entry";
        }   

*/




/*  
    Loop

    while, 
    do while, 
    For, 


*/

/* 
    while
    
    var i = 5;
    while(i<=10){
        console.log("Value is :" + i);
    i++;
 }


*/

/* 
    do while
    
    var i = 0;

    do{
        console.log("Value is :" + i);
    i++;
    } while(i<=10);
 


*/


/* 
    For
    
    var i = 5;

    for(i = 3; i<=10; i++){
        console.log("Value is :" + i);
    }
 


*/

/* 
    For
    
    let name = "I am a JavaScript";
    let len = name.length;

    for(var i = 0; i<len; i++){
        console.log('Value is :' +i );
        console.log(name[i] );
    }
 


*/

// Function
// Built in Function

//alert();
//console.log();

// User Defined Function

/*

    function saySomething(){
        console.log("Hello function");
    }
    saySomething();

*/

//Function Parameter

/*

    function saySomething(name, age){
        console.log(name, age);
    }


    // Function Argument

   saySomething("javascript", 2024);

*/


// Return Function

/*

    function saySomething(name, age){
        return (name + " "+ age);
    }


    // Function Argument

    console.log(saySomething("javascript", 2024));

*/


// Arrow Function


/*

    let saySomething = () => {
        console.log("I am a Arrow Function");
    }

    saySomething();



*/



// Array iteration using Mapping


/*
 

    var foods = ["cake", "ice cream", "chocolates", "bread"]
    

    function addSomething (item)  {
       return item + " is food";
    }

    let arr_res = foods.map(addSomething);

    console.log(arr_res);

   

*/




// Object Method


/*
 

    let person = {
        firstname: "Java",  //property
        lastname: "Script",  //property
        dob: 01-10-2024,  //property

        //Method...
        fullname : function(){
        
          return (this.firstname + this.lastname);
        }
    
    }
    console.log(person.fullname());

    

   

*/

/* String and String Method */

/* 
length
slice()
substring()
substr()
toUpperCase()
toLowerCase()
concat()
trim()
repeat()
replace()
replaceAll()
split() 

*/

/* let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
let lower = text.toString(); */




// Math object / method

/*
 

    let val;

    val = Math.PI;
    val = Math.E;
    val = Math.round(3.1);
    val = Math.ceil(1.2);
    val = Math.floor(1.9);
    val = Math.sqrt(81);
    val = Math.abs(-9);
    val = Math.pow(2, 3);
    val = Math.min(1, 3,-4, 5, 40, 0);
    val = Math.max(1, 3,-4, 5, 40, 0);
    val = Math.random();

    val = Math.floor(Math.random()* 100 + 1);

    console.log(val);

    

   

*/



// Date object

/*
 

    let val;

    let today = new Date();
    let birthday = new Date('01 01 1996');
    
    birthday = new Date('January 26 1996');

    val = today;
    val = today.toString();
    val = birthday;

    console.log(val);

    

*/



/* OOP Class Object */


/*

class Person {
    constructor(fname, lname, birthday){
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthday;
    }
}

let person1 = new Person("java", "script", "12-12-2024");
let person2 = new Person("java1", "script1", "10-12-2024");

console.log(person1);
console.log(person2);

*/


// Inheritance
/*

class Person {
    constructor(fname, lname, birthday){
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthday;
    }
}

class Customer extends Person {
    constructor(fname, lname, birthday, phone, email){
        super(fname, lname, birthday);
        this.phone = phone;
        this.email = email;
    }
}

let person1 = new Customer("java", "script", "12-12-2020", "0190000000", "email@gmail.com");

console.log(person1);


*/



// Static Function
/*

class Person {
    constructor(fname, lname, birthday){
        this.firstName = fname;
        this.lastName = lname;
        this.dob = birthday;
    }

    static test(){
        console.log("I am a Static Function");
    }
}

// only call / access in class not use object

console.log(Person.test());


*/


 
/*
    //What is DOM

    //.Document Object Model
    //.Tree if Elements (Nodes) generate by Browser
    // . JavaScript can manipulate DOM
*/


/* 

let val;

val = this; // this means whole html document 
val = window; // this or window are same 
val = window.document // crate document object
val = document // document object 
val = document.all // create array
val = document.all[1] // individual call any html tag
val = document.head // get head tag
val = document.body // 
val = document.doctype 
val = document.domain
val = document.url
val = document.forms 


console.log(val);


*/

// getElementById   -> get single element


// getElementClassName -> Get Multi element 
// that means  (same name class or id );
// getElementByClassName('test');
    /* 

    <div id="test" class="test"></div>
    <div id="test" class="test"></div>
    <div id="test" class="test"></div>
    <div id="test" class="test"></div>

    */





// getElementByTagName
//getElementByTagName('h1');

/* 

    // getting element
    val = document.getElementById('id-name');

    // Changing Style 
    val = document.getElementById("test");

    val.style.color = "red";
    val.style.background = "red";
    val.style.padding = "10px";
    val.style.display = 'block';
    

    // Changing Content 
    a = document.getElementById("title");

    a.textContent = 'New Content';
    a.innerText = 'New Content';

    // Import html tag in class
    val = document.getElementById("title");
    val.innerHTMl = '<h1>Import html</h1>';

*/
/*


    //querySelector -> get single element (id, class, tagname)

    //document.querySelector(".class #id ");
    //document.querySelector("li:first-child");
    //document.querySelector("li:last-child");
    //document.querySelector("li:nth-child(3)");
    //document.querySelector("li:nth-child(odd)");
    //document.querySelector("li:nth-child(even)");

    // nth-child() -> number the child (2);



    //querySelectorALl -> Get Multi selector that means ("same-class-title-id")

    document.querySelectorAll(".same-class-title");
    document.querySelectorAll("#id");
    document.querySelectorAll(".same ul li a");
    /* 

    <div class="same">
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </div>
    <div class="same-class-title"></div>
    <div class="same-class-title"></div>
    <div class="same-class-title"></div>

    */

/* 
    // Add element to DoM

    let ulitem = document.createElement("li");

    // Add Id and Class

    ulitem.className = 'newclass';

    <li class="newclass"><a href=""></a></li>

    ulitem.id = 'newid';
    <li class="newid"><a href=""></a></li> 
    
    
*/

/* 
    // Add Attribute
    let link = document.createElement("a");

    ulitem.setAttribute('title', 'facebook');
    <li title="facebook"><a href=""></a></li>



    // Add Attribute 
    let ulitem = document.createElement("li");
    ulitem.appendChild(document.createTextNode("javaScript"));

    document.querySelector('ol').appendChild(ulitem);
    <li>javaScript</li>


// Example


    let ulitem = document.createElement("li");
    let link = document.createElement("a");

    link.appendChild(document.createTextNode("facebook"));

    link.setAttribute('href', 'https://www.facebook.com');

    ulitem.appendChild(link);
    document.querySelector('ul').appendChild(ulitem);
    <ul>
        <li><a href="https://www.facebook.com">facebook</a></li>
    </ul>

 */


/*
    // Replacing element

    let NewHeading = document.createElement("h2");
    NewHeading.appendChild(document.createTextNode("I am a h2"));
    NewHeading.className = 'newclass';

    let oldHeading = document.querySelector('h3');
    let parent = document.querySelector('.container');

    parent.replaceChild(newHeading, oldHeading);



// Remove Element 

 let listItem = document.querySelectorAll("li");
 let list = document.querySelector("ul");

 list.removeChild(listItem[0]);




 // Add class and remove
 let list = document.querySelector("ul");

 list.classList.add('class-name');
 list.classList.remove('class-name');



 list.setAttribute('title', 'I am a title');
 list.removeAttribute('title');




*/    


// Event of Javascript

/*

Onclick

<button onclick ="alert('Hello World');">Button</button>


Mouse Hover

<button onmouseover ="message();">Button</button>

function message(){
    console.log("Mouse hover Button");
}

*/


// Event Listener -> we  should always try even listener 

// Use event in js file without event name on 

//example onclick = click 


// .addEventListener('click', message); // Access two parameter first even name / second function name


/*

    <button id ="btn">Button</button>

    document.getElementById('btn').addEventListener('click', message);

    function message(e){ // event variable use e
        let val = e;
        val = e.target;
        val = e.target.id;
    }

*/    


//Error handling  

/* 

Why do we need error-handling? If the javascript code runs time faces any error, it no longer runs and shows an error. 



*/

/*
   try{

    test();   // try set error / condition

   } catch(err){  //  Type of error  save parameter -> err=
    console.log(err);
    console.log(err.message);
    console.log(err.name);
   
   }finally{  // it run error or not error finally run 
    console.log("I am inside Finally");
   }

    console.log("After Error");


*/    



//Error handling 

/*


    let a =19;

   try{

    if(a>15)throw "too Big";

    else if (a>25)throw "too small";

   } catch(err){
    console.log(err);
   
   }



*/  



// Regular Expresstion
// pattern Matching Technique

/*

    let re;
    let str;


    re = /hello/;
    re = /hello/i; //i = case insensitive 
    re = /Hello/; // = Not case insensitive 

    str = 'Hello world';


    // exec() - Returns result in an array or null
    let result = re.exec(str);


    // test() - true or false 
    let result = re.test(str);

    // match() - Return Array or null
    let result = str.match(re);


    // search() - Return index of the first match or -1
    let result = str.search(re);

    //replace() - Return new string
     let newstr = str.replace(re, 'hi');

    console.log(newstr);
  


*/  


// Check Regular Expresstion

/**
    let re;
    let str;


    // Literal Character
    re = /hello/;
    re = /hello/i;
    re = /hell/i;
    re = /lo w/i;
 

    // Meta Characters 

    re = /^hello/i;  //Must start with this word
    // That means  str = "Hello Bangladesh";


    re = /hello$/i;  //Must end with this world
    // That means  str = "Hello Bangladesh";

    re = /^hello$/;  //Must start and end with this world
    // That means  str = "Bangladesh hello";

    re = /^h.llo$/;  // Matches any one character .-> any character asfsfa
    // That means  str = "Hdllo Bangladesh";
    // That means  str = "Hollo Bangladesh";
    // That means  str = "Hzllo Bangladesh";




    str = 'hallo';

    re = /h*llo/;  // 0 or More times
    str = 'hdgdsallo';
    str = 'h15353llo';
    str = 'hllo';

    re = /h?llo/;  // Optional -> h? it optional but not other character (llo) but not (allo)
    re = /he?a?llo/;  // Optional

    re = /hello\?/;  // Pattern or character part 
    str = 'hello?';



    // Character Set using Brackets []
    re = /h[e]llo\?/;  // Must be one of them inside brackets

    re = /h[^ea]llo/;  // Anything except those inside brackets [^ea] str without ea = hcllo 
    str = 'hfgllo?';

    re = /h^[ea]llo/;  // Must be start with e or a
    str = 'ehllo?';

    re = /[a-z]hello/;  // Start with a - z
    re = /^[A-Z]/;  // Start with must be upper case
    re = /[^0-9]/;  // Not digit
    re = /^[A-Za-z0-9]/;  //
    
    
    // Braces {} -Quantifier
    re = /hel{3}o/; //Must l two times   str = "helllo"
    str = 'hello?';
    re = /hel{2,5}o/; //Range 2-5 
    re = /hel{2,}o/; //At least two times or infinity
    
    
    //Parentheses () - Grouping

    re = /^([0-9]){5}/;   // /^[0-9][0-9][0-9][0-9][0-9]/  five digit
    str = '23542hello?';

    // Total 11 digit Number
    re = /^01[0-9]{9}$/;
    
    str = '01743453523';

    re = /^\+8801[0-9]{9}$/;
    str = '+8801743453523';

    //Shorthand Character Classes
    re = /\w/;  //Word Character - alpha numeric or _
    re = /\w+/;  // One or More
    str = '(*&g^saasga121)';


    re = /\W/;  // Non Word Character
    str = "sabsassjj_*&";


    re = /\d/;  // Digit
    re = /\d+/;  // Digit one or more
    re = /\D/;  // Non Digit
    re = /\s/;  // Match white space 
    str = 'hello world';
    re = /\S/;  // Match NOt white space 
    re = /\bhello\b/;  // Word Boundary
    str = " hello ";



    // Postal code 

    re = /^[0-9]{4}$/;

    //phone Number +8801944444444
    re = /^(\+)?(88)?01[0-9]{9}$/;

    //Email address

    str = techtohid@edu.com.bd

    re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/



 */



// ECMAScript (ES6) 

/* 

val a = 10;
val a =20;

let a = 10;
let a = 20; Not use Second time same variable 

const c = 20; fixed 

*/


// Scope

/* 
    // Global Scope

    var a = 10;
    let b = 20;
    const c = 30;

    console.log(`Global Scope:`, a, b, c);


*/

/* 
    // local Scope

    function test(){
        var a = 10;
        let b = 20;
        const c = 30;

        console.log(`Global Scope:`, a, b, c, d);
    }
    
    test();


*/