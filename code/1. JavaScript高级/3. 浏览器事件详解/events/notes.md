# 浏览器事件

> 表单提交导致浏览器刷新

## 绑定事件

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Event</title>
  </head>
  <body>
    <!-- 浏览器在处理时间的时候，都有一些默认的处理 -->
    <!-- 此处浏览器的默认行为就是：表单提交后会有一个刷新页面的动作 -->
    <form>
      <button type="submit">提交</button>
    </form>
  </body>
</html>
```

DOM 事件的分级
分为 0 1 2 级事件

### 对应分级优缺点

0 级事件，缺点，单例，后面的会覆盖前面的
1 级事件，事件系统，常用
2 级事件，IE 8 以前版本的事件系统，W3C 标准是我们目前使用的标准

## 解绑事件

0 级事件, `dom.onclick = null`
2 级事件，`dom.removeEventLister`

## 是否了解事件委托

react 事件系统

# 请求

序列化，建议大家使用 https://www.npmjs.com/package/serialize-javascript 来代替 JSON.stringify

## 请求库的设计思路

1. 关注请求，请求拦截器 interceptor
2. 关注响应，响应拦截器 interceptor
3. 关注参数格式化，数据格式化器、数据转换器、数据序列化器

axios 应该都知道
