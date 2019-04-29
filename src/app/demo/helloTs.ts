// 在创建JavaScript模块时，export 语句用于从模块中导出函数、对象或原始值，以便其他程序可以通过 import 语句使用它们
/**
 * 这里的类做原始数据来源
 */
export class HelloModel {
  user;
  items;

  /**
   * 在一个类中只能有一个名为 “constructor” 的特殊方法。
   * 一个类中出现多次构造函数 (constructor)方法将会抛出一个 SyntaxError 错误。
   * 在一个构造方法中可以使用super关键字来调用一个父类的构造方法。
   * 如果没有显式指定构造方法，则会添加默认的 constructor 方法。
   * 如果不指定一个构造函数(constructor)方法, 则使用一个默认的构造函数(constructor)。
   */
  constructor() {
    this.user = 'Admin';
    this.items = [new HelloItem('第一行', false),
                  new HelloItem('第二行', false),
                  new HelloItem('第三行', false)];
  }
}

/**
 * 数据对像类
 */
export class HelloItem {
  action;
  done;
  constructor(action, done) {
    this.action = action;
    this.done = done;
  }
}
