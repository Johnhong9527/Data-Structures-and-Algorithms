/*
与C和Java等其他语言不同, JavaScript数组不是强类型的,因此它可以存储任意类型的数据。
类型数组
  作用：类型数组则用于存储单一类型的数据
  语法：let myArray = new TypedArray(length)
  参数
    Int8Array             8位二进制补码整数
    Uint8Array            8位无符号整数
    Uint8ClampedArray     8位无符号整数
    Int16Array            16位二进制补码整数
    Uint16Array           16位无符号整数
    Int32Array            32位二进制补码整数
    Uint32Array           32位无符号整数
    Float32Array          32位IEEE浮点数
    Float64Array          64位IEEE浮点数
 */

let length = 5;
let int16 = new Int16Array(length);  // Int16Array [ 0, 0, 0, 0, 0 ]
// console.log(int16)


let array16 = [];
array16.length = length;
for (let i = 0; i < length; i++) {
  int16[i] = i + 1;
}
console.log(int16);  // Int16Array [ 1, 2, 3, 4, 5 ]