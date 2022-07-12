"use strict";
// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  optional:
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
// Input: ['C#', 'JS', 'Ruby','Python']
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
  // write your code here
  let start =0;
  let end = arr.length-1;
  while(start<end){
    let s = arr[start];
    arr[start]=arr[end];
    arr[end]= s;
    start++;
    end--
  }

  return arr;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Given the array consisting of 2n elements. Write a function that takes the
// array in the form [x1,x2,...,xn,y1,y2,...,yn] and return the array
// in in the form [x1,y1,x2,y2,...,xn,yn].
// Example 1:
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

const shuffleArray = (arr) => {
  // write your code here
  let firstHalf =arr.slice(0,arr.length/2);
  let secondHalf =arr.slice(arr.length/2);
  let array=[];
  for(let i=0;i<arr.length/2;i++){
    array.push(firstHalf[i]);
    array.push(secondHalf[i]);
  }
  return array;
};

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// You are given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position
// moves to indices[i] in the shuffled string.
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

const shuffleString = (str, indicesArr) => {
  // write your code here
  let newArr = [str.length];

  for (let i = 0; i < str.length; i++){
    newArr[i] = str[indicesArr.indexOf(i)];
  }
  
  return newArr.toString().replace(/,/g,'');

};
// -------------------------------------------------------------------------------------------------------

module.exports = { reverseArray, shuffleArray, shuffleString };
