// 函数
/*function sayHello() {
  console.log('Hello!');
}

sayHello(); // Hello!*/


/*obj*/
var obj = new Object();
obj = {
  name: {
    first: 'Gandalf',
    last: 'the Grey'
  },
  address: 'Middle Earth'
};

// 面向对象编程
function Book(title, pages, isbin) {
  this.title = title;
  this.pages = pages;
  this.isbin = isbin;
}

let book = new Book('title', 'pag', 'isbn');
console.log(book.title); // title
book.title = 'new title';
console.log(book.title); // new title
// 类可以包含函数
Book.prototype.printTitle = function () {
  console.log(this.title);
}

book.printTitle(); // new title

// 第二种写法
function Book(title, pages, isbin) {
  this.title = title;
  this.pages = pages;
  this.isbin = isbin;
  this.printTitle = function () {
    console.log(this.isbin);
  }

}