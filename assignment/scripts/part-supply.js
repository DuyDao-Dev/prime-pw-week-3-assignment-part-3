console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
//                    0    1     2    3    4    5
let supplyChanges = [3, 5, -6, 0, 7 , 11]; //Answer should be 20

// 3. Console log the value of 'supplyChanges' at index 2
console.log('3. Item at index 2 is:');
console.log(supplyChanges);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item: ');
supplyChanges.pop ();
console.log('11');//Look into another way for this value to populate.

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push ( 25 );//New array value should be 34. 11 was removed in line 23.

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, skip it. Do not log it to the console.
//    - if the value is negative, format the log as 'Part count -x.'
console.log('6. Showing supplyChanges...');

for (let i = 0; i < supplyChanges.length; i++) {
  if (supplyChanges[i]>0) {
    console.log('Added ' + supplyChanges[i] + ' parts');
  }
  else if (supplyChanges[i] == 0) {
  } else if (supplyChanges[i] < 0) {
    console.log('Part count ', supplyChanges[i]);
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (supplies of supplyChanges) {
  console.log(supplies);
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
let i = 0;
while (i < supplyChanges.length) {
  if (supplyChanges[i]>0) {
      console.log('Added ' + supplyChanges[i] + ' parts');
    }
    else if (supplyChanges[i] == 0) {
    } else if (supplyChanges[i] < 0) {
      console.log('Part count ', supplyChanges[i]);
    }
    i++;
}

// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');

//First attempt
// let sum = 0;
//
// for (i = 0; i < supplyChanges.length; i++) {
//   sum += supplyChanges[i];
//   console.log(sum);
// }

//Second attempt
// let sum = 0;
//
// for (i = 0; i < supplyChanges.length; i++) {
//
//   sum += parseInt(supplyChanges[i]);//Originally had array numbers as a string.
//
//   console.log(sum);
// }

let sum = 0;
for(i = 0; i < supplyChanges.length; i++){
  sum = sum + supplyChanges[i];
}
console.log(sum);

//Eureka! So I kept getting 925 as my result. It was because when I changed my numbers in the array
//from string to intergers, I also didn't change the push string of 25 to an interger. Once I changed
//the '25' in line 28 to just 25 it finally output 34. Another problem I ran into was that it was
//listing the whole process of all the numbers in the array adding up. Once I moved the
//console.log(sum); outside the scope it finally just gave me the number 34. 2 days on this problem! 
