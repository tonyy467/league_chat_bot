// nums = [1, 3, 9, 10, 12]
// target = 9

let binarySearch = function(nums, target) {
    let low = 0;
    let high = nums.length-1
    while (low <= high) {
        //finds the mid index 
        let mid = low + Math.floor((high - low) / 2);
        if (nums[mid] === target) return mid;
        //if nums[mid] > target, target is in high subarray
        if (target < nums[mid]) {
            high = mid - 1;
        }
        //else present in low subarray
        else {
            low = mid + 1;
        }
      }
    return -1;
  };

//Write a function rotate(arr, n) that rotates arr[] by d elements.
// -> 1,2,3,4,5,6,7
// -> rotate by 2
// -> 3,4,5,6,7,1,2
// """

// Problem Statement: Find the Smallest Common Number

// You are given three sorted arrays of integers. Your task is to 
//find the smallest common element among these arrays. In other words, 
//you need to find the smallest number that is present in all three arrays.

// Write a function findSmallestCommon(arr1, arr2, arr3) that takes three 
//sorted arrays arr1, arr2, and arr3 as input and returns the smallest 
//common element. If there is no common element, return -1.


function findSmallestCommon(arr1, arr2, arr3) {
  //3 pointer
  //while loop while i < arr1.length && j < arr2.length && ....
  //compare each element at each index of each arr
  //if they are equal to each other return the number
  //else increment the arr with the smallest val element
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length; j < arr2.length; k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[j]) {
      return arr1[i];
    }
    if ()
  }
}

const arr1 = [6, 7, 10, 25, 30, 63, 64];
const arr2 = [-1, 4, 5, 6, 7, 8, 50];
const arr3 = [1, 6, 10, 14];

const result = findSmallestCommon(arr1, arr2, arr3);
console.log(result); // Output: 6