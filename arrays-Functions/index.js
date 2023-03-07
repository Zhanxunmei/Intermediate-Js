/**Question 1:What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.
 
i) Mutating array methods changes the object after the method has been used.
ii) These methods basically changes the array itself instead of returning a new array with the new changes.
                 
 WHILE

i) Non-mutating array methods do not change the object after the method has been used.
ii) These methods maintains the predictability and it increases performance by sharing the structure to reduce memory overhead.   

Examples of Mutating array methods;
- array.pop()
- array.push()
- array.reverse()
- array.unshift()
- array.fill()

Examples of Non-mutating array methods;
- array.concat()
- array.includes()
- array.indexOf()
- array.lastIndexOf()
- array.join()
 */

/** Question 2:Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’].
 Perform this operation on them 
- Add ‘Kotlin’ to the end of the array
- Add ‘Java’ after ‘Ruby’
- Remove the first item in the array
- Add ’Scala’ and ‘Swift’ to the beginning of the array
- Replace ‘PHP’ with ‘Go’ and ‘Rust’

 Answers:
a- let codeLanguages = [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]
codeLanguages.push('kotlin');
console.log(codeLanguages)

b- Using splice method;
codeLanguages.splice(3,0, 'Java')

c- Using splice method;
codeLanguages.splice(0,1)
-Using .shift()
codeLanguages.shift();
console.log(codeLanguages)

d- Using .Unshift;
codeLanguages.Unshift('Scala', 'Swift');
Using splice method;
codeLanguages.splice(0,0, 'scala', 'Swift')

e- Using splice;
codeLanguages.splice(3,1,'Go', 'Rust')
 */


/** Question 3:What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}


   Answer;
let fruit = ['apple', 'mango', 'banana'];
 function changeFruit(fruit) {
    fruit[2] = "orange";
    return fruit;
 }
 console.log(changeFruit(fruit)); //['apple', 'mango', 'orange']
 */


 /** Question 4: Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
  
 
 Answer;
 function max(value) {
    let maxNumber = value[0];
    for(let b=1; b<value.length; b++){
        if(value[b]>max) {
            max = value[b];
        }
    }
    return max;
 }
  const validNumbers = [2,8,16,107,256,309,300];
  console.log(max(validNumbers)); // 309
  */


  /** Question 5: Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array
   

  Answer:
  function valTimesIndex(num) {
    return = num.map((val,index) => val * index);
  }
  let arrayOfNumber = [10,11,17,3];
  let multiIndexNo = valTimesIndex(arrayOfNumber);
  console.log(multiIndexNo); // [0,11,34,9] 
   */