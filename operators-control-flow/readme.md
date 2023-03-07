1a.Assignment Operators symbols- *(multiplication), +(addition), /(division), -(subtraction), \*\*(exponentiation), %(modulus[remainder]), ++(increment), --(decrement).
Examples:
let a = 6;
let b = 4;
let sum = a+b;
let multiplication = a*b;
console.log(sum);
console.log(multiplication);

1b.Assignment Operators symbols- =(basic assignment), +=(add and assignment), -=(subtract and assignment), \*=(multiply and assignment), /=(divide and assignment), %=(modulus and assignment).
Examples:
let x = 9;
let y = 4;
x+=y is same as = x+y; which should be 9+4
x-=y is same as =x-y ; which should be 9-4
console.log(x+=y);
console.log(x-=);

1c. Comparison Operators symbols- =, ==, ===, !==, !===, <, >, <=, >=
Examples:
let cash = 500;
let expenses = '500';

console.log(cash == expenses)//(weak equal operator) double equal operator only check the 'value'
console.log(cash === expenses)//(strict equal operator) triple equal operator checks both the 'value' and 'type'.

1d. Logical Operators- &&(And), ||(Or), !(Not)
Examples:
let x = 7;
let y = 5;
console.log(x<10 && y>3); Note: it gives a boolean result(true)
console.log(x==6 || y==4); it also gives a boolean result(false)

1e. Bitwise Operators- &, |, ^, ~, <<, >>, >>>
Examples:
let a = 10; 
let b = 6;

console.log(a&b); //result = 0
console.log(a/b); // result = 16

4. The result when the following program
   for(let i = 1; i<20; i +=7){
   console.log(i);
   }
   is executed will be; 1(i=1),8(i+=7; 1+7) and 15(i as '8'+ 7= 15) respectively.


//5 Write a program that takes a positive number (num) and finds the power of 2 nearest to that number. The program stores the resulting value to pwr.
function nearestPowerOf2(num) {
    let pwr = Math.pow(2, Math.round(Math.log2(num)));
    if (Math.abs(pwr - num) > Math.abs(pwr/2 - num)) {
      pwr = pwr/2;
    }
    console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
  }
nearestPowerOf2(40)
nearestPowerOf2(50) 


//3. Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts Student.
// All students have to take General subjects.

let scienceSubjects = 'Physics, Chemistry, Biology, Technical Drawing';
let socialScienceSubjects = 'Accounting, Commerce, Marketing, Geography';
let artsSubjects = 'Government, Economics, Literature, History';
let generalSubjects = 'English, Mathematics';


let classDept = 'arts';

if(classDept === 'science') {
    console.log('Then note that the subjects for science department is '+ 'generalSubjects' + 'scienceSubjects');
}
else if(classDept === 'socialScience') {
    console.log('Then note that the subjects for socialScience department are ' +'generalSubjects'+ 'socialScienceSubjects');
}
else if(classDept === 'artsSubjects') {
    console.log('Then note that the subjects for arts department are: ' + 'generalSubjects'+ 'artsSubjects');
}
else{
    ('Kindly write out your class Department in order to get the required subjects in addition to the general subjects, which are; '+ 'generalSubjects');
}