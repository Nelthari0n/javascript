// 单列模式
"use strict";
class Person {
  constructor(data) {
    if (Person.prototype.Instance === undefined) {
      this.data = data;
      Person.prototype.Instance = this;
    }
    return Person.prototype.Instance;
  }
}
let obj1 = new Person('jieki');
obj1.age = 11;
console.log(obj1);
// 单列模式： 在系统中保存一个全局的实例对象 为了解决命名冲突的问题
// 优点：
// 1.解决命名冲突问题 代码易维护
// 2.减少内存的使用（不用申明大量函数）迅速定位问题

// 缺点：
// 1.拓展性不好
// 2.不灵活
// 3.不能随意改动
