#### $dialog
使用`this.$dialog`的形式使用`el-dialog`
##### 文档地址
[el-global-dialog开发文档](https://liyongleihf2006.github.io/el-global-dialog-docs/)
##### 安装
```js
npm install --save el-global-dialog
```
##### 使用方法
```js
import 'el-global-dialog'
```
在vue文件中
```js
this.$dialog({
  title: '标题',
  width: '30%',
  message: (dialog) => {
    return (
      <div>Hello World</div>
    );
  }
})
```
##### attributes
参数|说明|类型|可选值|默认值
--|--|--|--|--
data|传入到dlalog中的数据,可以在`message titleSlot footerSlot`回调函数中通过注入的参数获取到,如形参叫做`dialog`,那么可以通过`dialog.data`获取到|object|——|——
message|写入`dialog`内容的回调,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
titleSlot|写入`dialog`title的回调,相当于`el-dialog`中的`slot="title"`,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
footerSlot|写入`dialog`footer的回调,相当于`el-dialog`中的`slot="footer"`,可以注入`dialog`实例,返回要渲染的jsx|function|——|——
open|`el-dialog`中的`open`事件|function|——|——
opened|`el-dialog`中的`opened`事件|function|——|——
close|`el-dialog`中的`close`事件|function|——|——
closed|`el-dialog`中的`closed`事件|function|——|——
title|请参照elementui官方文档
width|请参照elementui官方文档
fullscreen|请参照elementui官方文档
top|请参照elementui官方文档
modal|请参照elementui官方文档
modal-append-to-body|请参照elementui官方文档
append-to-body|请参照elementui官方文档
lock-scroll|请参照elementui官方文档
custom-class|请参照elementui官方文档
close-on-click-modal|请参照elementui官方文档
close-on-press-escape|请参照elementui官方文档
show-close|请参照elementui官方文档
before-close|请参照elementui官方文档
center|请参照elementui官方文档

* `visible`属性不支持传入,因调用`$dialog`直接就展示弹窗
* `destroy-on-close`属性不支持传入,每次关闭弹窗,都会自动销毁实例
