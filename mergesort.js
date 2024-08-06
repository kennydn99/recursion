function mergeSort(array) {
  // split array into two halves
  // recursively sort each half
  // merge the two sorted halves into single sorted array

  // Base case - if array has 0 or 1 element it is sorted
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);

  let left = array.slice(0, mid);
  let right = array.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);

  return merge(sortedLeft, sortedRight);
}

function merge(sortedLeft, sortedRight) {
  // merge the sorted halves
  let sorted = [];
  let i = 0;
  let j = 0;
  let k = 0;
  // compare and copy elements
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      sorted[k++] = sortedLeft[i++];
    } else {
      sorted[k++] = sortedRight[j++];
    }
  }
  // if there are remaining elements in left, copy into sorted list
  for (; i < sortedLeft.length; i++) {
    sorted[k++] = sortedLeft[i];
  }
  // if there are remaining elements in right, copy into sorted list
  for (; j < sortedRight.length; j++) {
    sorted[k++] = sortedRight[j];
  }

  // console.log("sorted", sorted);
  return sorted;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergeSort([105, 79, 100, 110])); // [79, 100, 105, 110]
