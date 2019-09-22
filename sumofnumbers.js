function sumFor(list) {
  let total = 0;
  for (let x = 0; x < list.length; x++) {
    total += list[x];
  }
  return total;
}

function sumWhile(list) {
  let total = 0;
  let x = 0;
  while (x < list.length) {
    total += list[x];
    x++;
  }
  return total;
}

function findSum(list, num) {
  if (num <= 0) {
    return 0;
  }
  return (findSum(list, num - 1) + list[num - 1]);
}

function sumRecursion(list) {
  return findSum(list, list.length);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, val) {
    return memo + val;
  });
}

const testTotal = [1, 2, 3, 4, 5];
console.log(sumFor(testTotal));
console.log(sumWhile(testTotal));
console.log(sumRecursion(testTotal));
console.log(sumTheSimpleWay(testTotal));
