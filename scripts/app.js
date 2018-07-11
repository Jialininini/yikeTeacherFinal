//创建app应用模块
//调用控制器模块(依赖),在依赖中写是控制器模块的名称
var yike = angular.module('yike',["Controller","ngRoute"]);
/*
run方法在模块创建好之后会直接执行
 */
yike.run(["$rootScope",function($rootScope){
//给头部a标签绑定单击事件:点击实现侧边导航栏的显示或隐藏
//给collapse类定义值,通过这个值决定collapse是否有效
	$rootScope.collapsed = false;
	$rootScope.toggle=function(){
		$rootScope.collapsed = !$rootScope.collapsed;
		//显示隐藏导航栏标题内容
		//获取导航栏中所有的dd
		var dds=document.querySelectorAll('dd');
		//遍历每一个dd,给每个dd修改样式实现隐藏显示的效果
		if ($rootScope.collapsed) {   //此时显示
			for (var i =0; i<dds.length;i++) {
		  		dds[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '0.2s';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(0)';
		  }
		}else{
			for (var i = dds.length - 1; i >= 0; i--) {
		
			
				dds[i].style.transitionDuration = (dds.length - i + 1) * 0.05 + 's';
				dds[i].style.transitionProperty = 'all';
				dds[i].style.transitionDelay = '';
				dds[i].style.transitionTimingFunction = 'ease-out';
				dds[i].style.transform = 'translate(-100%)';
			}

		}
	}
}]);


yike.config(["$locationProvider",function($locationProvider){
	$locationProvider.hashPrefix("");
}])

//配置路由
yike.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/",{
		redirectTo: "/index" //跳转到/index处理
	}).when("/index",{
		templateUrl:"./views/list.html",
		controller:"indexCtrl"
	}).when("/older",{
		templateUrl: "./views/older.html",
		controller:"olderCtrl"
	}).when("/author",{
		templateUrl: "./views/author.html",
		controller:"authorCtrl"
	}).when("/category",{
		templateUrl: "./views/category.html",
		controller:"categoryCtrl"
	}).when("/favourite",{
		templateUrl: "./views/favourite.html",
		controller:"favouriteCtrl"
	}).when("/category",{
		templateUrl: "./views/settings.html",
		controller:"settingsCtrl"
	})
}]);