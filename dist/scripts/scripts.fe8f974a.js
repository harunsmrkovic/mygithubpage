"use strict";angular.module("izbavimeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","firebase"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("izbavimeApp").controller("MainCtrl",["$scope","$firebase","$firebaseSimpleLogin",function(a,b,c){var d=new Firebase("https://izbavime.firebaseio.com/messages/"),e=b(d);a.notices=e.$asArray(),a.submitNewMessage=function(){a.user&&(a.notices.$add({text:a.newMessage,user:a.user.displayName,createdAt:Firebase.ServerValue.TIMESTAMP}),a.newMessage="")},a.loaded=!1,a.authClient=c(d),a.authClient.$getCurrentUser().then(function(){a.loaded=!0}),a.$watch("authClient.user",function(){a.user=a.authClient.user}),a.logIn=function(b){a.authClient.$login(b).then(function(b){a.user=b})},a.logOut=function(){a.authClient.$logout()}}]),angular.module("izbavimeApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);