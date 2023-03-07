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

4. The result when the following program
   for(let i = 1; i<20; i +=7){
   console.log(i);
   }
   is executed will be; 1(i=1),8(i+=7; 1+7) and 15(i as '8'+ 7= 15) respectively.
[readme.md](https://github.com/Zhanxunmei/Intermediate-Js/files/10911811/readme.md)
