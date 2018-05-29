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
