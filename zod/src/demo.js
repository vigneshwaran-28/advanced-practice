let arr = [1, 2, 3, 4, 5];

function fun(arr, i =0) {
  if (arr.length != 0) {
    let a = arr.pop();
    fun(arr,i+1);
    if(i!=2)
    arr.push(a);
  }
}

fun(arr,0);

console.log(arr);
