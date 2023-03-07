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