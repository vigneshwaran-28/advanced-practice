// let arr=[[1,3],[3,8],[10,15]];

let arr = [
  { start: 1, end: 4 },
  { start: 5, end: 8 },
  { start: 4, end: 5 },
];

let res = [arr[0]],
  checkStatus1 = false,
  checkStatus2 = false;

for (let i = 1; i < arr.length; i++) {
  if (res[res.length - 1].end >= arr[i].start) {
    let num1 = res[res.length - 1].start,
      num2 =
        res[res.length - 1].end > arr[i].end
          ? res[res.length - 1].end
          : arr[i].end;
    if (
      i != 1 &&
      num1 != res[res.length - 1].start &&
      num2 != res[res.length - 1].end
    ) {
      res.push({ start: num1, end: num2 });
    } else checkStatus2 = true;

    checkStatus1 = true;
  } else {
    res.push(arr[i]);
  }
}

console.log(!checkStatus1 || checkStatus2 ? res : res.slice(1));
