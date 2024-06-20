// Wait The Window To Load
window.onload = function () {
    // Single Line Comment
    document.querySelector("h1").style.color = "Blue"; // Single Line Comment
  };
  
  // Single Line Comment
  // Single Line Comment
  // Single Line Comment
  
  /* Single Line Comment */
    /*
    1
    2
    3
    4
    5
  */
  // Ctrl + /


  /*
  Output To Screen
  - window.alert()
  - document.write()
  - console.log()

  %c
  Syntax
*/
console.log("hello %c im %c mohamed", "color: blue; font-size: 25px","color: #5daa41; font-size: 25px;" );

document.write("<h1>Hello <span>Page</span></h1>");

// document.write("Hi Guys\n")
console.log("Hello This is My project");

// window - document - console

/* 
- console methods
log( )
error( )
table(["osama", "khaled", "omar"]); 
....etc
*/

// ===============================================================================

/*
Data Types intro 
- String 
- Numbers
- Array => Object
- Object
- Boolran 
*/

console.log(typeof "Mohamed Ahmed"); // This is String
console.log(typeof 5000); // This is Number
console.log(typeof 5000.99); // This is Number
console.log(typeof [10, 50, 60]); // This Is array OR Object
console.log({ name: "Mohamed", age: 15, place: "jeddah" }); // this is Object
console.log(typeof true); // boolean
console.log( typeof undefined);
console.log(typeof null) // Object

// =================================Varibales===================================

/*
var + let + const = varibales
syntax (keyword | variabe name | Assignment operator | value )
camalCase

=========== The diffrent between Varibales ========
var 
- Redeclare (Yes)
- Access Before Declare (Yes)
- Varibale scope drama [Added To window]
- Block Or Scope Function

let
- Redeclare (no => Error)
- Access Before Declare (Error)
- Varibale scope drama []
- Block Or Scope Function

const
- Redeclare (No => Error)
- Access Before Declare (Error)
- Varibale scope drama []
- Block Or Scope Function
*/

console.log(name);
var name = "mohamed";

let user = 15;
console.log(user);

// =================================String=====================================
/*
String Syntax 
Character Escape Sequences \\For Search
\ Escape 
Line Continue
\n
*/

console.log('hello my "boy"');
console.log("hello my 'boy'");
console.log("hello my \"boy\"");
console.log("hello \\my boy");
console.log("hello\
my\
boy");
console.log("hello\nmy\nboy");

// Concatenation
// Template Literals (Template String)

let a = "I";
let b = "Love";
let c = "You";

console.log(a, b);
document.write(a + " " + b + " " + c); // Old Way

console.log(` ${a} "
  ${b} " 
  \\ ${c} `);

let markup = `
  <div class="card"
    <div class="child"
      <h2>${a} ${b} ${c} </h2>
    </div>
  </div>
`
document.write(markup)

/*
===========================================
== Variables And Concatenation Challenge ==
===========================================

[1] Create 3 Variables [Title, Desctiption, Date]
-- All In One Statement
-- Variable Name Must Be Two Words
-- Title Content Is "Elzero"
-- Description Content Is "Elzero Web School"
-- Date Content Is "25/10"
[2] Create Variable Contains Div And This Div Contains
-- H3 For Title
-- P For Paragraph
-- Span For Time
[3] Add This Card To Page 4 Times
[4] Use Template Literals For Concatenate

Extra
- Use ES6 Repeat
*/