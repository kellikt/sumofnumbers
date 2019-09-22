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

function sumNums(list, i) {
  if (i <= 0) {
    return 0;
  }
  return sumNums(list, i - 1) + list[i - 1];
}

function sumRecursion(list) {
  return sumNums(list, list.length);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) {
    return memo + num;
  });
}

const testList = [1, 2, 3, 4, 5];

console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));
