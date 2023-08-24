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
  //while no arr has been exhausted yet
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      return arr1[i];
    }
    if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
      i++;
    }
    else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
      j++
    }
    else {
      k++;
    }
  }
  return -1;
}

const arr1 = [6, 7, 10, 25, 30, 63, 64];
const arr2 = [-1, 4, 5, 6, 7, 8, 50];
const arr3 = [1, 6, 10, 14];

const result = findSmallestCommon(arr1, arr2, arr3);
console.log(result); // Output: 6

// Given an array of integers nums, find a peak element and return its index. 
// A peak element is an element that is greater than or equal to its neighbors. 
// It is guaranteed that the input array will have at least one peak element.

function findPeakElement(nums) {
  for (let i = 1; i < nums.length-1; i++) {
    if (nums[i] >= nums[i-1] && nums[i] >= nums[i+1]) {
      return i
    }
  }
}

const nums = [1, 2, 3, 1];
const res = findPeakElement(nums);
console.log(res); // Output: 2 (Index of the peak element 3)

// Problem Statement: Find Low/High Index of a Key in a Sorted Array

// Given a sorted array of integers, you need to find the indices of 
// the first and last occurrence of a given key in the array. If the
//  key is not present, return -1 for both indices.

function findLowHighIndices(arr, key) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      result.push(i);
    }
  }
  return [result[0], result[result.length-1]]
}

const arr = [2, 4, 4, 4, 6, 7, 9];
const key = 4;

const re = findLowHighIndices(arr, key);
console.log(re); // Output: [1, 3]
