# MiniProgramStudy
微信小程序学习

## 小程序
### 什么是小程序？
  1. 无需下载，用完即走（体积小，刚发布的小程序压缩包体积不能超过1M，2017年4月提升为2M）
### 小程序特点
  1. 体积小
  2. 同app进行互补，可以实现app的基本功能
  3. 微信扫一扫或者搜索就可以去下载
  4. 开发周期短，成本较低
### 适配方案
  1. viewport适配 width=device-width
  2. 单位: rpx
  3. iphone6 1rpx=1物理像素=0.5px dpr=物理像素/设备独立像素=2
### 重要文件
  1. wxml view结构--->html
  2. wxss view样式--->css
  3. js view行为--->js
  4. json文件 数据&&配置
### 注册小程序 App ()
### 注册页面 Page ()
### 数据绑定
  1. 在data中初始化页面需要的数据，在页面中可以直接使用
### 事件（冒泡事件 || 非冒泡事件）
  1. 冒泡事件 bind+事件名
  2. 非冒泡事件 catch+事件名

### 模板template
  1. 定义：template 属性：name（标识模板）
  2. 使用：template 属性：is（模板的name）
  3. 引入模板结构：<import src="path" />
  4. 引入模板样式：@import 'path'
  5. 传参：data="{{...变量}}"
### 列表渲染
  1. wx:for
  2. wx:key 为每个个体元素进行标记，提高性能
  3. 遍历的个体：item
  4. 遍历的下标：index
### 本地缓存（setStorage，setStorageSync）
  1. 缓存的是用户是否收藏当前文章，多篇文章缓存在一个key中，value是object对象{0：true，1：false}
  2. 注意：
    1. 缓存之前应该先去获取之前本地缓存的数据
    2. 缓存的新数据是在原有数据的基础上修改的
    3. 当页面加载的时候onLoad中获取本地缓存的数据
    4. 如果storage中没有缓存过，通过key获取的value值为undefined！！
### 音乐播放
  1. 如何知道音乐的播放或暂停
  2. 将播放音乐的页面状态保存到appData中