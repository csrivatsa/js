function myFunction(a, b)
{

    return a+b;
}
console.log(myFunction(6,5));

function mycount(a, b, c)
{

    return a*b*c;
}
console.log(mycount(4, 5, 7));


// concatination functions
const str1 = "chethan";
const str2 = " srivatsa";
const concatenated = str1 + str2;

console.log(concatenated); 


// Comparison operators strict equality

function
myFunction
(
a, b
)
{

return a===b;
}

function myFunction(a){
return typeof(a);
}

// slice function
function myFunction(a) {
    return a.slice(3);
 }
 
//  last 3
 function myFunction(str){

return str.slice(-3);
}
// first 3 characters
function myFunction(a) {
    return a.slice(0, 3);
 }

//  indexOff

function myFunction(a){
return a.indexOf('is');

}

// extract first half

function myFunction(a) {
    return a.slice(0, a.length / 2);
 }

//  remove last 3 character

function myFunction(a){

return a.slice(0,-3);
}

// return the percentage of number

function myFunction(a, b) {
    return b / 100 * a
  }

// basic operator

function myFunction(a, b, c, d, e, f) {
    return (((a + b - c) * d) / e) ** f;
 }


// string contains another string and concatenate
function myFunction(a, b) {
   return a.indexOf(b) === -1 ? a + b : b + a
}