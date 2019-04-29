//  引入生产模式，控制关闭开发模式的，函数控制
import { enableProdMode } from '@angular/core';
// app启动模块，必须引入
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// 根模块，程序启动根页面
import { AppModule} from './app/demo/helloModules';
// 环境配置文件，可以写入接口路径什么的。。dev,prod各一份
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
// bootstrapModule是PlatformRef的一个方法，这个方法中实现了Module的初始化、Component的初始化等，是Angular的启动函数,此方法是基于浏览器，如果是移动例如Ionic框架，引到方法不一样
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
