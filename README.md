### 基本说明

1. 使用了 create-react-app 脚手架工具 简单搭建了POC
2. 使用了ts,sass
3. 仅仅写了一个 单元测试作为demo
4. 可以本地查看demo，执行以下 
```
npm intsall 
npm start 
```


demo :
![messageElements.gif](https://xkx9431.github.io/xkx_blog/img/asserts/messageElements.gif)



### 项目结构
1. 组件相关内容 为`src\component` 文件夹下，
2. 每个组件再单独建立folder,然后每个组件folder  包含具体的组件内 样式文件`style.scss` 具体逻辑代码，以及index文件管理导入导出。
3. 组件的通用逻辑，也可以写成serverice类放在 单独的severice管理目录中

### 不同消息类型的实现
可以参考`src\component\messgeItem\msgContent.tsx` 中的 `generateMessageContent` 函数,
直接新建 消息类型文件即可，对于msgItem.tsx 文件不同更改，需要考虑工厂模式。

# 其他
简单的demo POC 演示，内容多为静态，
应该还存在很多问题，还可以继续优化。



