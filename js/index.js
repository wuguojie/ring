(function(){
	var app = angular.module("myapp",["ngRoute"]);
	app.config(["$routeProvider",function($routeProvider){
		$routeProvider.when("/list/3",{
			templateUrl:"DR.html",
			controller:"Drtrue"
		}).when("/list/0",{
			templateUrl:"dr-list.html",
			controller:"AAA"				
		}).when("/list/1",{
			templateUrl:"goods.html",
			controller:"BBB"				
		}).when("/list/2",{
			templateUrl:"goods.html",
			controller:"BBB"
		}).when("/goods/0",{
			templateUrl:"culture.html",
			controller:"CCC"
		}).when("/goods/1",{
			templateUrl:"flowers.html",
			controller:"CCC"
		}).when("/goods/2",{
			templateUrl:"pink.html",
//			controller:"CCC"
		}).otherwise({
			templateUrl:"home.html",
			redirectTo:"/"
		})
	}])
	var banner = [
		{"id":"0","img":"img/1471588575.jpg"},	
		{"id":"1","img":"img/1473329863.jpg"},	
		{"id":"2","img":"img/1473389664.jpg"},
		{"id":"3","img":"img/1473667532.jpg"},
		{"id":"4","img":"img/1475120043.jpg"},
		{"id":"5","img":"img/1476161513.jpg"}
	]
	var datanav = [
		{"id":0,"listid":"7","img":"img/1467191480.jpg","name":"求婚钻戒"},
		{"id":1,"listid":"8","img":"img/1475206280.jpg","name":"结婚对戒"},
		{"id":2,"listid":"9","img":"img/1475206305.jpg","name":"爱的礼物"},
		{"id":3,"listid":"10","img":"img/1472460603.jpg","name":"DR实体店"}
	]
	var shiti = [
		{"id":0,"listid":"11","img":"img/1467186495.jpg","dian":"香港店"},
		{"id":1,"listid":"12","img":"img/1468895895.jpg","dian":"北京SOHO店"},
		{"id":2,"listid":"13","img":"img/1468907325.jpg","dian":"广州中信广场店"},
		{"id":3,"listid":"14","img":"img/1468907378.jpg","dian":"上海红坊店"},
		{"id":4,"listid":"15","img":"img/1474860929.jpg","dian":"深圳世界之窗"}
	]
	var list = ["img/1473404752.jpg","img/1473404762.jpg","img/1473404770.jpg","img/1473404777.jpg","img/1473404792.jpg","img/1473404799.jpg","img/1473404807.jpg"]
	app.controller("home",["$scope",function($scope){
		$scope.data = banner
		$scope.nav = datanav
		$scope.shitidata = shiti
		$scope.listdata = list
	}])
//	app.controller("goList",["$scope","$routeParams",function($scope,$routeParams){
//		$scope.navlist = datanav[$routeParams.num]
//	}])
	app.controller('Drtrue', ['$scope', function($scope){
		$scope.address = [
			{id:"0","word":"香港店"},
			{id:"1","word":"北京-SOHO店"},
			{id:"2","word":"上海-红坊店"},
			{id:"3","word":"深圳-世界之窗店"},
			{id:"4","word":"广州-中信广场店"},
			{id:"5","word":"重庆-WFC店"},
			{id:"6","word":"武汉-风情街店"},
			{id:"7","word":"南京-1912店"},
			{id:"8","word":"长沙-万达广场店"},
			{id:"9","word":"天津-津湾广场店"},
			{id:"10","word":"昆明-万达广场店"},
			{id:"11","word":"苏州-美罗百货店"},
			{id:"12","word":"大连-凯丹广场店"},
			{id:"13","word":"无锡-恒隆广场店"},
			{id:"14","word":"成都-晶融汇广场店"},
			{id:"15","word":"宁波-和义大道店"},
			{id:"16","word":"郑州-大商金博大店"},
			{id:"17","word":"杭州-利星名品广场店"},
			{id:"18","word":"沈阳-市府恒隆店"},
			{id:"19","word":"西安-王府井店"},
			{id:"20","word":"青岛-金狮广场店"},
			{id:"21","word":"济南-恒隆广场店"},
			{id:"22","word":"哈尔滨-金太阳店"},
			{id:"23","word":"福州-世欧广场店"},
			{id:"24","word":"太原-梅园百盛店"},
			{id:"25","word":"南宁-航洋国际城店"},
			{id:"26","word":"合肥-万象城店"},
			{id:"27","word":"石家庄-乐汇城店"},
			{id:"28","word":"厦门-SM城市广场店"},
			{id:"29","word":"沈阳-中街恒隆店"},
			{id:"30","word":"温州-财富购物中心店"},
			{id:"31","word":"重庆-观音桥店"},
			{id:"32","word":"上海-香港广场店"},
			{id:"33","word":"长春-活力城店"},
			{id:"34","word":"南通-圆融广场店"},
			{id:"35","word":"常州-吾悦广场店"},
			{id:"36","word":"南京-金茂汇店"},
			{id:"37","word":"大连-恒隆广场店"},
			{id:"38","word":"海口-东方广场店"},
			{id:"39","word":"唐山-银泰城店"},
			{id:"40","word":"成都-仁恒置地店"},
			{id:"41","word":"北京-银泰in88店"},
			{id:"42","word":"贵阳-汇金星力城店"},
			{id:"43","word":"银川-CC MALL店"},
			{id:"44","word":"杭州-星光大道店"},
			{id:"45","word":"兰州-国芳百货店"},
			{id:"46","word":"武汉-壹方购物中心店"},
			{id:"47","word":"西宁-国芳百货店"},
			{id:"48","word":"呼和浩特-维多利店"},
			{id:"49","word":"郑州-大商国贸店"},
			{id:"50","word":"南昌-T16购物中心店"}
		];
	}]);
	var urll=[
		{"id":0,"srcc":"img/1.jpg"},
		{"id":1,"srcc":"img/2.jpg"},
		{"id":2,"srcc":"img/3.jpg"},
		{"id":3,"srcc":"img/4.jpg"}
	]
	var urll2=[
		{"id":4,"srcc":"img/5.jpg"},
		{"id":5,"srcc":"img/6.jpg"},
		{"id":6,"srcc":"img/7.jpg"},
		{"id":7,"srcc":"img/8.jpg"}
	]
	var urll3=[
		{"id":8,"srcc":"img/li2.jpg"},
		{"id":9,"srcc":"img/li3.jpg"},
		{"id":10,"srcc":"img/li4.jpg"}
		
	]
	app.controller("AAA",["$scope",function($scope){
		$scope.titlee="求婚钻戒"
		$scope.index="首页"
		$scope.urll=urll
		$scope.urll2=urll2
		$scope.urll3=urll3
		$scope.myvar=true
		$scope.show=function(){
			$scope.myvar=false
		}
	}])
	var message1=[
		{"txtdata11":"img/1469436578.jpg","txtdata111":"一生挚爱","txtdata1111":"￥21111"},
		{"txtdata11":"img/1470306983.jpg","txtdata111":"Together系列 Lifetime","txtdata1111":"￥25131"},
		{"txtdata11":"img/1470362577.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥1999"},
		{"txtdata11":"img/1470364585.jpg","txtdata111":"Together系列 包容对戒","txtdata1111":"￥58755"},
		{"txtdata11":"img/1470364912.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥5856"},
		{"txtdata11":"img/1470366532.jpg","txtdata111":"一生一世","txtdata1111":"￥58963"}
		
		
	]
	var message2=[		
		{"txtdata11":"img/1475129229.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥58754"},
		{"txtdata11":"img/1475131033.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥2541"},
		{"txtdata11":"img/1475135149.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥3695"},
		{"txtdata11":"img/1475229039.jpg","txtdata111":"Together系列 我们对戒","txtdata1111":"￥9857"}		
	]
	
	app.controller("BBB",["$scope",function($scope){
		$scope.listdata1=message1
		$scope.listdata2=message2
		$scope.myVar=false
		$scope.more=function(){
			$scope.myVar=true
			
		}
		//console.log($scope.listdata)
	}])
	app.controller("pinkone",["$scope",function($scope){
		$scope.showname = function(){
			$(".header .right .home").rotate({ 
		        angle: 0, 
		        animateTo: 360,
		        callback:function(){
		        	$(".list").css("display","block")
		        }
		   });
		}
	}])
	
	app.controller("pinktwo",["$scope",function($scope){
		$scope.hidename = function(){
			$(".list").css("display","none")
		}
	}])
	
	
	app.controller("pinkthree",["$scope",function($scope){
		$scope.change = function(num){
			$(".nav a").eq(num).css({"border-bottom":"1px solid #c7063d","color":"#c7063d"}).siblings().css({"border-bottom":"1px solid #fff","color":"#000"})
			$(".pic img").eq(0).attr("src","img/"+num+1+".jpg")
			$(".pic img").eq(1).attr("src","img/"+num+2+".jpg")
			$(".pic img").eq(2).attr("src","img/"+num+3+".jpg")
		}
		
	}])
})()
	






























