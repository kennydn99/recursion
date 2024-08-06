function fibs(n) {
  if (n <= 0) return [];
  let array = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      array.push(i);
    } else {
      array.push(array[i - 1] + array[i - 2]);
    }
  }

  return array;
}
console.log(fibs(8));

function fibsRec(n) {
  console.log("This was printed recursively");
  if (n <= 0) {
    return [];
  } else if (n == 1) {
    return [0];
  } else if (n == 2) {
    return [0, 1];
  }

  let array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);

  return array;
}

console.log(fibsRec(8));
