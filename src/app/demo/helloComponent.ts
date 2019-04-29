import { Component } from '@angular/core';
import {HelloItem, HelloModel} from './helloTs';

/**
 * @Component 标记为一个装饰器（组件）
 * selector: 'demo-app' 指定一个CSS选择器，匹配该组件要应用的HTML元素，这里就是我们刚刚自定义的元素
 * templateUrl: 'helloComponent.html' 模板的路径，这里写的相对路径 也可以写绝对路径 app/demo/helloComponent.html
 */
@Component({
  selector: 'app-demo',
  templateUrl: 'helloComponent.html'
})

/**
 * 实例化一个对象
 */
export class AppHelloComponent {
  model = new HelloModel();
  getName() {
    return this.model.user;
  }
  getItems() {
    // filter 从数组项中选择一个子集,=>为lambda表达式(参数1, 参数2, …, 参数N) => { 函数声明 }，这段代码等同于 function(item){return !item.done}
    return this.model.items.filter(item => !item.done);
  }
  addInfo(info) {
    if (info !== '') {
      this.model.items.push(new HelloItem(info, false));
    }
  }
}
