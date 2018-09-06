实现ionic的图片懒加载，用ionic-image-lazy-load，一般而言有两种类型的js，基本上是一样的。 
第一种：这里我命名为lazy-load.js 
1.引入js，在index页面加上

<script src="js/lazy-load.js"></script>
1
2.修改对应的html：图片部分修改为下列代码 
在ion-content加上scroller，作为监听滚动事件所用

<img src="./img/noimg.png" onerror="this.src='./img/noimg.png'" image-lazy-src="{{ item.image }}">
1
其中

src="./img/noimg.png" onerror="this.src='./img/noimg.png'"
1
部分是用于请求图片等待时所用的本地图片地址。 
3.修改js：（页面的控制器名称为DashCtrl）

angular.module('starter.controllers', ['ionic','ionic-img-lazy-load'])

.controller('DashCtrl', function($scope) {
  $scope.items = [
    { id: 1, album: 'Gotta Be Somebody', artist: 'Nickelback', image: 'http://img03.sogoucdn.com/app/a/100520093/60d2f4fe0275d790-fbe7539243950f9f-7f669dbeead0ad667f21be96b5efd843.jpg' },
    { id: 2, album: 'Dark Horse', artist: 'Nickelback', image: 'http://img03.sogoucdn.com/app/a/100520093/60d2f4fe0275d790-fbe7539243950f9f-7f669dbeead0ad667f21be96b5efd843.jpg' },
    { id: 3, album: 'Someday', artist: 'Nickelback', image: 'http://img03.sogoucdn.com/app/a/100520093/60d2f4fe0275d790-fbe7539243950f9f-7f669dbeead0ad667f21be96b5efd843.jpg' },
    { id: 4, album: 'All The Right Reasons', artist: 'Nickelback', image: 'http://img03.sogoucdn.com/app/a/100520093/60d2f4fe0275d790-fbe7539243950f9f-7f669dbeead0ad667f21be96b5efd843.jpg' }

  ];
})

注意对应的lazy-load.js中的名字要对应的名 
这里写图片描述

第二种：与第一种相似（不仔细说明了），步骤如下： 
1.

<script src="js/ionic-image-lazy-load.js"></script>
1
2.修改对应的html：图片部分修改为下列代码 
在ion-content加上lazy-scroll，作为监听滚动事件所用

<img image-lazy-loader="spiral" src="./img/noimg.png" onerror="this.src='./img/noimg.png'" image-lazy-src="{{ item.image }}">
1
其中

src="./img/noimg.png" onerror="this.src='./img/noimg.png'"
1
部分是用于请求图片等待时所用的本地图片地址。

image-lazy-loader="spiral"
1
这个是加载时的动画

3.js：主要是加上这个，把名字改了

angular.module('starter.controllers', ['ionic','ionicLazyLoad'])