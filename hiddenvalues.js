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