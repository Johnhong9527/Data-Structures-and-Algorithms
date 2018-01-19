/*使用类进行面向对象编程*/

// 声明
// ES5
/*function Book(title, pages, isbin) {
  this.title = title;
  this.pages = pages;
  this.isbin = isbin;
}
Book.prototype.printTitle = function () {
  console.log(this.title);
}
let book = new Book('标题', '书记', 'ddd');
book.printTitle(); // 标题*/

// ES6
class Book {
  // constructor（构造函数）
  constructor(title, pages, isbin) {
    this.title = title;
    this.pages = pages;
    this.isbin = isbin;
  }

  printTitle() {
    console.log(this.title);
  }
}

/*let book = new Book('title', 'pag', 'isbn');
console.log(book.title); //输出图书标题
book.title = 'new title'; //更新图书标题
console.log(book.title); //输出图书标题*/

// 继承
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
  }
}

let jsBook = new ITBook('学习JS算法', '200', '1234567890', 'JavaScript');
console.log(jsBook.title); // 学习JS算法
jsBook.printTechnology(); // JavaScript
