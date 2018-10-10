/*
创建一个单独的模板
*/
angular.module("Controller",[])
.controller("navsCtrl",["$scope",function($scope){
	$scope.navs = [
		{"href" : "#/index", "icon" : "icon-home", "text":"今日一刻"},
		{"href" : "#/older", "icon" : "icon-file-empty", "text":"往期内容"},
		{"href" : "#/author", "icon" : "icon-pencil", "text":"热门作者"},
		{"href" : "#/category", "icon" : "icon-menu", "text":"栏目浏览"},
		{"href" : "#/favourite", "icon" : "icon-heart", "text":"我的喜欢"},
		{"href" : "#/settings", "icon" : "icon-cog", "text":"设置"}
	]
}])

//所有的scope都是给视图用的
// 用锚点就要用到路由,本地打开

//创建index的控制器
.controller("indexCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 0; //第一个导航栏内容被选中
	$rootScope.title="今日一刻";
	$rootScope.isShow = true;
	//获取当前时间: 2018-7-11
	var today = new Date();
	var time = $filter("date")(today,"yyyy-M-d");
	// console.log(time)
	//发送请求,获取服务器上的数据
	$http({
		url:"API/index.php",
		params:{time:time}
	}).then(function(result){ //success 方法已经被淘汰,使用then
		// console.log(result.data.posts);
		//绑定数据,传递给视图
		$scope.posts = result.data.posts;
		$rootScope.isShow = false;
	})
}]).controller("olderCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 1; 
	$rootScope.title="往期内容";
	$rootScope.isShow = true;
	var today = new Date();
	var time = $filter("date")(today,"yyyy-M-d");
	$http({
		url:"API/index.php",
		params:{time:time}
	}).then(function(result){ 
		$scope.posts = result.data.posts;
		$rootScope.isShow = false;
	})
}]).controller("authorCtrl",["$scope","$rootScope","$http","$filter",function($scope,$rootScope,$http,$filter){
	$rootScope.num = 2; 
	$rootScope.title="热门作者"
	$rootScope.isShow = true;
	var today = new Date();
	var time = $filter("date")(today,"yyyy-M-d");
	$http({
		url:"API/author.php"
	}).then(function(result){ 
		
		console.log(JSON.parse(result.data[0]));
		// console.log(result.data.authors)
		$scope.posts = result.data.authors;
		$rootScope.isShow = false;
	})
}]).controller("categoryCtrl",["$scope","$rootScope",function($scope,$rootScope){
	$rootScope.num = 3; 
	$rootScope.title="栏目浏览";
}]).controller("favouriteCtrl",["$scope","$rootScope",function($scope,$rootScope){
	$rootScope.num = 4; 
	$rootScope.title="我的喜欢"
}]).controller("settingsCtrl",["$scope","$rootScope",function($scope,$rootScope){
	$rootScope.num = 5; 
	$rootScope.title="设置"
}])