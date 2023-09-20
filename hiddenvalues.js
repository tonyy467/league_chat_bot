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

//try binary search tree
//low, high so u dont have to iterate thru the entire arr
function findLowHighIndices(arr, key) {
  if (arr.length === 0) return [-1, -1];
  let loIndex = -1;
  let hiIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      loIndex = i;
      break;
    }
  }
  for (let k = arr.length-1; k >= 0; k--) {
    if (arr[k] === key) {
    hiIndex = k;
    break;
    }
  }
  return [loIndex, hiIndex]
}

const arr = [2, 4, 4, 4, 6, 7, 9];
const key = 4;

const re = findLowHighIndices(arr, key);
console.log(re); // Output: [1, 3]

// Given an array of integers, you need to modify the array in such a way that 
// all occurrences of the integer 0 are moved to the beginning of the array, while 
// maintaining the order of the non-zero elements. The modified array should have 
// all 0s at the beginning, followed by the non-zero elements in their original order.

// Write a function moveZerosToBeginning(arr) that takes an array arr as input and 
// modifies it according to the requirements. The function should not return a new 
// array; it should modify the input array in-place.

// function moveZeroesToBeg(arr) {
//   let left = 0;
//   let right = arr.length-1;
//   while (left <= right) {
//      if (arr[right] === 0) {
//       const temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//       }
//       else if (arr[right] !== 0) {
//         right--;
//       }
//       else {
//         left++;
//       }
//   }
// }

// const arrex = [1, 2, 0, 4, 0, 5, 0];
// moveZeroesToBeg(arrex);
// console.log(arrex); // Output: [0, 0, 0, 1, 2, 4, 5]

function moveZeroesToBeg(arr) {
  let nonZeroIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[nonZeroIndex] = arr[i];
      nonZeroIndex--;
    }
  }

  while (nonZeroIndex >= 0) {
    arr[nonZeroIndex] = 0;
    nonZeroIndex--;
  }
}

const arrex = [1, 2, 0, 4, 0, 5, 0];
moveZeroesToBeg(arrex);
console.log(arrex); // Output: [0, 0, 0, 1, 2, 4, 5]


// Problem Statement: Stock Buy Sell to Maximize Profit

// You are given an array prices where prices[i] is the 
// price of a given stock on the i-th day. You want to 
// maximize your profit by choosing a single day to buy 
// one stock and choosing a different day in the future 
// to sell that stock.

// Write a function maxProfit(prices) that takes an array 
// of stock prices as input and returns the maximum profit 
// that can be obtained.

//brute force
// function maxProfit(prices) {
//   let maxProfit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let k = i+1; k < prices.length; k++) {
//       let localProfit = prices[k] - prices[i];
//       if (localProfit > maxProfit) {
//         maxProfit = localProfit;
//       }
//     }
//   }
//   return maxProfit;
// }

function maxProfit (prices) {
  let maxProfit = 0;
  let minBuyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let localizedProfit = prices[i] - minBuyPrice;
    if (localizedProfit > maxProfit) {
      maxProfit = localizedProfit;
    }
    if (minBuyPrice > prices[i]) {
      minBuyPrice = prices[i]
    }
  }
  return maxProfit;
}

const prices = [7, 1, 5, 3, 6, 4];
const ex = maxProfit(prices);
console.log(ex); 
// Output: 5 (Buy on day 2 (price = 1) and sell on day 5 (price = 6), 
//                                    profit = 6 - 1 = 5)


//You are given an array of intervals where intervals[i] = [start_i, end_i], 
//representing the i-th interval. Two intervals [start_a, end_a] and [start_b, end_b] 
//overlap if they share at least one common point. You want to merge all overlapping 
//intervals.

// function mergeIntervals(intervals) {
//   let outut = [];
//   for (let i = 0; i < intervals.length; i++) {
//     if (intervals[i+1][0] >= intervals[i])
//   }
// }

// const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
// const example = mergeIntervals(intervals);
// console.log(example); // Output: [[1, 6], [8, 10], [15, 18]]

// Problem Statement: Find Pair With Given Sum in an Array

// You are given an array of integers and a target sum. Your 
// task is to determine if there are two distinct elements in 
// the array that sum up to the target sum.

// Write a function hasPairWithSum(arr, target) that takes an array of 
// integers arr and an integer target as input, and returns true if there 
// exist two distinct elements in the array that add up to the target sum. 
// Otherwise, return false.

function hasPairWithSum(arr, target) {
  let left = 0;
  let right = arr.length-1;
  while (left < right) {
    let localSum = arr[left] + arr[right];
    if (localSum === target) return true;
    if (localSum > target) {
      right--;
    }
    else {
      left++;
    }
  }
  return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 5], 8)); // Output: true (Pair: 3 + 5 = 8)
console.log(hasPairWithSum([1, 2, 3, 4, 5], 10)); // Output: false 
console.log(hasPairWithSum([1, 2, 3, 4, 5], 6)); // Output: true (Pair: 2 + 4 = 6
console.log(hasPairWithSum([1, 2, 3, 4, 5], 7)); // Output: true (Pair: 2 + 5 = 7)
console.log(hasPairWithSum([2, 4, 6, 8, 10], 14)); // Output: true (Pair: 4 + 10 = 14);
//2

// You are given an array of non-negative integers. Your task is to arrange 
// these numbers in such a way that they form the largest possible integer.

// Write a function largestNumber(nums) that takes an array of non-negative 
// integers nums as input and returns a string representing the largest 
// possible integer that can be formed by arranging the numbers.

function largestNumber(nums) {
  let total = 0;
    for (let i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
}

const numsxx = [3, 30, 34, 5, 9];
const resultxx = largestNumber(numsxx);
console.log(resultxx); // Output: "9534330"
//343

// You are tasked with implementing a singly linked list data structure from scratch 
// in JavaScript. A singly linked list is a fundamental data structure consisting of 
// nodes, where each node stores a value and a reference (link) to the next node in the 
// sequence. Your implementation should support basic operations on linked lists.

// Write a class LinkedList that represents a singly linked list and provides methods 
// to perform the following operations:

// add(value): Add a new node with the given value to the end of the linked list.

// insertAt(value, index): Insert a new node with the given value at the specified 
// index in the linked list. If the index is out of bounds, do nothing.

// deleteAt(index): Delete the node at the specified index in the linked list. 
// If the index is out of bounds, do nothing.

// get(index): Retrieve the value of the node at the specified index in the linked list. 
// If the index is out of bounds, return null.

class LinkedList {
    constructor() {
        // Initialize the linked list
    }

    add(value) {
        // Add a new node to the end of the linked list
    }

    insertAt(value, index) {
        // Insert a new node with the given value at the specified index
    }

    deleteAt(index) {
        // Delete the node at the specified index;
    }

    get(index) {
        // Retrieve the value of the node at the specified index
    }
}
