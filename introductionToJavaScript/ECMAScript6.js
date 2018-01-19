// let
let movie = 'Load of the Rings';

function starWarsFan() {
  let movie = 'Star Wars';
  return movie;
}

function marvelFan() {
  movie = 'The Avengers';
  return movie;
}

function blizzardFan() {
  let isFan = true;
  let phrase = 'Warcraft';
  console.log('Before if:' + phrase);
  if (isFan) {
    let phrase = 'initial text';
    phrase = 'For the Horde!';
    console.log('Inside if:' + phrase);
  }
  phrase = 'For the Alliance'
  console.log('After if:' + phrase);
}

console.log(movie); // Load of the Rings
console.log(starWarsFan()); // Star Wars
console.log(marvelFan()); // The Avengers
console.log(movie); // The Avengers
blizzardFan(); // introductionToJavaScript.Before if:Warcraft 2.Inside if:For the Horde! 3.After if:For the Alliance



/*变量的作用域不同，将会导致函数访问的变量作用域的不同，产生不同的结果。
* 首先函数内部定义变量，可以称之为局部变量
* 函数外部定义的称之为全局变量
* 其次，由于变量在函数内部定义的话，函数中任何作用域去访问它，都只局限于函数本身的作用域。
*/
/*why*/
// 第一个
/*直接输出变量的值*/
// 第二个
/*返回的变量是函数内部定义。所以是直接返回函数的内部变量的值*/
// 第三个
/*该函数的返回的变量是直接访问函数外部定义的变量，然后将其修改，使之被重新定义*/
// 第四个
/*这个时候输出变量，其值已经被改变了。因为marvelFan()修改的变量的值与外部变量是享用同一个内存的，所以这个时候这个变量死一起被改变的*/
// 第五个
/*blizzardFan()内部的变量享用同一个内存。所以在任何地方被修改的话。内存中的该值，就会被修改！所以最后输出的话，会返回三种不同的值。*/


// const PI = 3.141593;
// 常量：约定俗成都是使用大写格式
// conet 一般定义的都只读格式。