import { BrowserModule } from '@angular/platform-browser';
// 每个模块的定义必须有这个才能生效，ng2的开发模式就是类似一个树，从根节点无限发散
import { NgModule } from '@angular/core';
// 表单模块，比如你要在组件内用到一些表单元素或者数据绑定，不然会报错
import { FormsModule } from '@angular/forms';
// 自己定义的组件
import {AppHelloComponent} from './helloComponent';

@NgModule({
  declarations: [ // 指令和组件
    AppHelloComponent
  ],
  imports: [ // 比如你要引用那些模块的功能就要引入
    BrowserModule,
    FormsModule
  ],
  providers: [], // 服务
  bootstrap: [AppHelloComponent] // 启动的模块，一个app一般只有一个启动模块！
})
export class AppModule { }
