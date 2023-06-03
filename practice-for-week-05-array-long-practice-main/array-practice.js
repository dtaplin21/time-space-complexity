const findMinimum = arr => {
  // O(n) Time
  // O(1) Space
  let  min  = arr[0];

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < min) {
      min = arr[i]
    }
  }
  return min;
};

const runningSum = arr => {
  // O(n) Time
  // O(1) Space
  const result = [];
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result.push(sum);
  }

  return result;
};

const evenNumOfChars = arr => {
  // O(1) Time
  // O(1) Space
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i].length % 2 === 0) {
      count++;
    }
  }

  return count;
};

const smallerThanCurr = arr => {
  // O(n^2) Time
  // O(n) Space
  const result = [];

  for(let i = 0; i < arr.length; i++) {
    let count = 0;

    for(let j = 0; j < arr.length; j++) {
      if(arr[j] < arr[i]) {
        count++;
      }
    }

    result.push(count);
  }
  return result;
};

const twoSum = (arr, target) => {
 for(let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; i++) {
    if(arr[j] + arr[i] === target)
    return true
  }
 }
  return false// Your code here
};

const secondLargest = arr => {

  // Your code here
};

const shuffle = (arr) => {

  // Your code here
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
