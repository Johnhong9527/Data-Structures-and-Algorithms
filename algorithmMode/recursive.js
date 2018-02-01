// 递归
/*
function recursiveFunction(someParam){
  recursiveFunction(someParam);
};

var i= 0;
function recursiveFn() {
  i++;
  recursiveFn();
}
try{
  recursiveFn()
} catch (ex){
  console.log('i = ' + i + ' error: ' + ex);
}*/


/*谷角猜想*/

function N(n) {
  n = Number.parseInt(n);
  if (n < 2) {
    console.log(n)
  } else {
    if (n % 2 === 1) {
      // 奇数
      N(n / 3 + 1)
    } else {
      // 偶数
      N(n / 2)
    }
  }

}
N(8888888)