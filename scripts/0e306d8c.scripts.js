"use strict";angular.module("quinielaApp",["ngRoute"]).config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"/views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("quinielaApp").controller("MainCtrl",["$scope",function(a){function b(){c(),_.each(a.groupsMatches,function(a){_.each(a.matches,function(b){b[0].score>b[1].score?a.standing[b[0].country]+=3:b[0].score<b[1].score?a.standing[b[1].country]+=3:(a.standing[b[0].country]+=1,a.standing[b[1].country]+=1)})}),a.countriesThatPass()}function c(){_.each(a.groupsMatches,function(a){_.each(a.matches,function(b){a.standing[b[0].country]=0,a.standing[b[1].country]=0})})}a.showSecondPhase=!1,a.toggleView=function(){a.showSecondPhase=!a.showSecondPhase},a.groupsMatches={A:{matches:[[{country:"brazil",score:0},{country:"croatia",score:0}],[{country:"mexico",score:0},{country:"cameroon",score:0}],[{country:"brazil",score:0},{country:"mexico",score:0}],[{country:"cameroon",score:0},{country:"croatia",score:0}],[{country:"cameroon",score:0},{country:"brazil",score:0}],[{country:"croatia",score:0},{country:"mexico",score:0}]],standing:{brazil:0,mexico:0,cameroon:0,croatia:0}},B:{matches:[[{country:"spain",score:0},{country:"netherlands",score:0}],[{country:"chile",score:0},{country:"australia",score:0}],[{country:"spain",score:0},{country:"chile",score:0}],[{country:"australia",score:0},{country:"netherlands",score:0}],[{country:"australia",score:0},{country:"spain",score:0}],[{country:"netherlands",score:0},{country:"chile",score:0}]],standing:{spain:0,chile:0,australia:0,netherlands:0}},C:{matches:[[{country:"colombia",score:0},{country:"greece",score:0}],[{country:"costamarfil",score:0},{country:"japan",score:0}],[{country:"colombia",score:0},{country:"costamarfil",score:0}],[{country:"japan",score:0},{country:"greece",score:0}],[{country:"japan",score:0},{country:"colombia",score:0}],[{country:"greece",score:0},{country:"costamarfil",score:0}]],standing:{colombia:0,costamarfil:0,japan:0,greece:0}},D:{matches:[[{country:"uruguay",score:0},{country:"costarica",score:0}],[{country:"england",score:0},{country:"italy",score:0}],[{country:"uruguay",score:0},{country:"england",score:0}],[{country:"italy",score:0},{country:"costarica",score:0}],[{country:"italy",score:0},{country:"uruguay",score:0}],[{country:"costarica",score:0},{country:"england",score:0}]],standing:{uruguay:0,england:0,italy:0,costarica:0}},E:{matches:[[{country:"switzerland",score:0},{country:"ecuador",score:0}],[{country:"france",score:0},{country:"honduras",score:0}],[{country:"switzerland",score:0},{country:"france",score:0}],[{country:"honduras",score:0},{country:"ecuador",score:0}],[{country:"honduras",score:0},{country:"switzerland",score:0}],[{country:"ecuador",score:0},{country:"france",score:0}]],standing:{switzerland:0,france:0,honduras:0,ecuador:0}},F:{matches:[[{country:"argentina",score:0},{country:"bosnia",score:0}],[{country:"iran",score:0},{country:"nigeria",score:0}],[{country:"argentina",score:0},{country:"iran",score:0}],[{country:"nigeria",score:0},{country:"bosnia",score:0}],[{country:"nigeria",score:0},{country:"argentina",score:0}],[{country:"bosnia",score:0},{country:"iran",score:0}]],standing:{argentina:0,iran:0,nigeria:0,bosnia:0}},G:{matches:[[{country:"germany",score:0},{country:"portugal",score:0}],[{country:"ghana",score:0},{country:"usa",score:0}],[{country:"germany",score:0},{country:"ghana",score:0}],[{country:"usa",score:0},{country:"portugal",score:0}],[{country:"usa",score:0},{country:"germany",score:0}],[{country:"portugal",score:0},{country:"ghana",score:0}]],standing:{germany:0,ghana:0,usa:0,portugal:0}},H:{matches:[[{country:"belgium",score:0},{country:"algeria",score:0}],[{country:"russia",score:0},{country:"korea",score:0}],[{country:"belgium",score:0},{country:"russia",score:0}],[{country:"korea",score:0},{country:"algeria",score:0}],[{country:"korea",score:0},{country:"belgium",score:0}],[{country:"algeria",score:0},{country:"russia",score:0}]],standing:{belgium:0,russia:0,korea:0,algeria:0}}},a.$watch("groupsMatches.A.matches ",function(){b()},!0),a.$watch("groupsMatches.B.matches ",function(){b()},!0),a.$watch("groupsMatches.C.matches ",function(){b()},!0),a.$watch("groupsMatches.D.matches ",function(){b()},!0),a.$watch("groupsMatches.E.matches ",function(){b()},!0),a.$watch("groupsMatches.F.matches ",function(){b()},!0),a.$watch("groupsMatches.G.matches ",function(){b()},!0),a.$watch("groupsMatches.H.matches ",function(){b()},!0),a.countriesThatPass=function(){_.each(a.groupsMatches,function(b,c){var d=_.sortBy(_.pairs(b.standing),function(a){return-a[1]});"F"==c&&console.log(d[0][0]),a.standing[c][0].country=d[0][0],a.standing[c][1].country=d[1][0]}),a.secondStageMatches.roundOf16.A=[_.clone(a.standing.A[0]),_.clone(a.standing.B[1])],a.secondStageMatches.roundOf16.B=[_.clone(a.standing.C[0]),_.clone(a.standing.D[1])],a.secondStageMatches.roundOf16.C=[_.clone(a.standing.E[0]),_.clone(a.standing.F[1])],a.secondStageMatches.roundOf16.D=[_.clone(a.standing.G[0]),_.clone(a.standing.H[1])],a.secondStageMatches.roundOf16.E=[_.clone(a.standing.B[0]),_.clone(a.standing.A[1])],a.secondStageMatches.roundOf16.F=[_.clone(a.standing.D[0]),_.clone(a.standing.C[1])],a.secondStageMatches.roundOf16.G=[_.clone(a.standing.F[0]),_.clone(a.standing.E[1])],a.secondStageMatches.roundOf16.H=[_.clone(a.standing.H[0]),_.clone(a.standing.G[1])]},a.$watch("secondStageMatches.roundOf16",function(){var b=[],c="";_.each(a.secondStageMatches.roundOf16,function(d,e){b.push(d[0].score>d[1].score?_.clone(d[0]):_.clone(d[1])),c+=e,2===b.length&&(a.secondStageMatches.quarterFinals[c][0].country=b[0].country,a.secondStageMatches.quarterFinals[c][1].country=b[1].country,b=[],c="")})},!0),a.$watch("secondStageMatches.quarterFinals",function(){var b=[],c="";_.each(a.secondStageMatches.quarterFinals,function(d,e){b.push(d[0].score>d[1].score?_.clone(d[0]):_.clone(d[1])),c+=e,2===b.length&&(a.secondStageMatches.semiFinals[c][0].country=b[0].country,a.secondStageMatches.semiFinals[c][1].country=b[1].country,b=[],c="")})},!0),a.$watch("secondStageMatches.semiFinals",function(){var b=[],c="";_.each(a.secondStageMatches.semiFinals,function(d,e){b.push(d[0].score>d[1].score?_.clone(d[0]):_.clone(d[1])),c+=e,2===b.length&&(a.secondStageMatches.final[c][0].country=b[0].country,a.secondStageMatches.final[c][1].country=b[1].country,b=[],c="")})},!0),a.standing={A:[{country:"brazil",score:0},{country:"mexico",score:0}],B:[{country:"brazil",score:0},{country:"mexico",score:0}],C:[{country:"brazil",score:0},{country:"mexico",score:0}],D:[{country:"brazil",score:0},{country:"mexico",score:0}],E:[{country:"brazil",score:0},{country:"mexico",score:0}],F:[{country:"brazil",score:0},{country:"mexico",score:0}],G:[{country:"brazil",score:0},{country:"mexico",score:0}],H:[{country:"brazil",score:0},{country:"mexico",score:0}]},a.secondStageMatches={roundOf16:{A:[{country:"",score:0},{country:"",score:0}],B:[{country:"",score:0},{country:"",score:0}],C:[{country:"",score:0},{country:"",score:0}],D:[{country:"",score:0},{country:"",score:0}],E:[{country:"",score:0},{country:"",score:0}],F:[{country:"",score:0},{country:"",score:0}],G:[{country:"",score:0},{country:"",score:0}],H:[{country:"",score:0},{country:"",score:0}]},quarterFinals:{AB:[{country:"brazil",score:0},{country:"mexico",score:0}],CD:[{country:"brazil",score:0},{country:"mexico",score:0}],EF:[{country:"brazil",score:0},{country:"mexico",score:0}],GH:[{country:"brazil",score:0},{country:"mexico",score:0}]},semiFinals:{ABCD:[{country:"brazil",score:0},{country:"mexico",score:0}],EFGH:[{country:"brazil",score:0},{country:"mexico",score:0}]},"final":{ABCDEFGH:[{country:"brazil",score:0},{country:"mexico",score:0}]}}}]),angular.module("quinielaApp").controller("UserCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);