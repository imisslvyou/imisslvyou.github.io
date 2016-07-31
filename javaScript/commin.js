// JavaScript Document


function toZero(n){
	return n < 10?"0" + n:"" + n;
}
function d2a(n){
	return n*Math.PI/180;	
}
function rnd(m,n){
	return Math.floor(Math.random()*(n-m) + m);
}
window.onload = function(){
//window.innerWidth = 1366px;
//css3Clodk start:
	var oC = document.getElementById("cvs1");
	var gd = oC.getContext("2d");
	var cx = 60;
	var cy = 60;
	var r  = 35;
	
	var h = 16;
	gd.font = h + "px kaiti";
	
	
	setInterval(function(){
		gd.clearRect(0,0,oC.width,oC.height);
		var oDate = new Date();
		var iH = oDate.getHours();
		var iM = oDate.getMinutes();
		var iS = oDate.getSeconds();
		var iMs = oDate.getMilliseconds();
		
		if(iH > 12) iH -= 12;
		
		drawArc(cx,cy,r,0,(iM/60+iH)*30,"#fff");
		drawArc(cx,cy,r+10,0,iM*6+iS/60*6,"#fff");
		drawArc(cx,cy,r+20,0,iS*6+iMs/1000*6,"#fff");
		
		//填充文字
		iH = oDate.getHours();
		var str = [toZero(iH) ,toZero(iM) ,toZero(iS)].join(":");
		var w = gd.measureText(str).width;
		gd.fillStyle = "#ffffff";
		gd.fillText(str,cx-w/2,cy+h/2);
	},30);
	
	function drawArc(cx,cy,r,s,e,color){
		s -= 90;
		e -= 90;
		gd.beginPath();
		gd.lineWidth = "3";
		gd.arc(cx,cy,r,d2a(s),d2a(e),false);
		gd.strokeStyle = color;
		gd.stroke();
	}
//css3Clock end;
//navBar start:
	var oUl=document.getElementById('head_ul1');
	var oBar=document.getElementsByClassName('head_ul1_active')[0];
	var aLi=oUl.children;
	var timer=null;
	var l=0;
	
	var oUlDiv = document.getElementById("content");
	var aUl  = oUlDiv.children;
	
	var interval = 100;
	for(var i=0;i<aLi.length-1;i++){
		(function(index){
			aLi[i].onmouseover=function(){
				moveG(oBar,this.offsetLeft);
				oBar.onclick = function(){
//movePage start:
					move(oUlDiv,{left:-(aUl[0].offsetWidth + interval)*index},{duration:1500});
//movePage end:
					
					if(index == 3){
						console.log(1);
						//oBar.onclick = null;
						var oConUlP = document.getElementById("con_ulP");
						if(!oConUlP.innerHTML){
							var aSpan = oConUlP.children;
							var str = "欢迎来访我的个人网站，我是一名前端工程师，热衷于学习前端各种新技术，每天奔跑在探索前端的道路上......";
							
							for(var i = 0; i < str.length; i++){
								var oSpan = document.createElement("span");
								oSpan.innerHTML = str.charAt(i);
								
								oConUlP.appendChild(oSpan);
							}
							
							for(var i = 0; i < aSpan.length; i++){
								aSpan[i].style.color = "#fff";
								aSpan[i].style.float = "left";
								aSpan[i].style.marginBottom = "16px";
							}
							var i = 0;
							var timer2 = null;
							clearInterval(timer2);
							var timer2 = setInterval(function(){
								//alert(1);
								move(aSpan[i],{opacity:1});
								
								i++;
								
								if(i == str.length){
									clearInterval(timer2);
								}
								
							},100);
						}
					}
				};
			};
		})(i);
	}
	function moveG(obj,iTarget){
		clearInterval(timer);
		var speed=0;
		
		timer=setInterval(function(){
			speed+=(iTarget-obj.offsetLeft)/5;
			speed *= 0.7;	
			l+=speed;
			
			obj.style.left=Math.round(l)+'px';
			//console.log(iTarget,obj.offsetLeft,speed);//没到位
			
			if(Math.abs(speed)<1) speed=0;
			
			if(obj.offsetLeft==iTarget && speed==0){
				clearInterval(timer);
				//console.log(iTarget,obj.offsetLeft,speed);//没到位
			}
		},30);
	}
//navBar end;

//
	var oConUl1 = document.getElementById("con_ul1");
	var aConUl1Li = oConUl1.children;
	
	
	for(var i = 0; i < aConUl1Li.length; i++){
		//var aConUl1LiSpan = aConUl1Li[i].children[0];
		aConUl1Li[i].onmouseover = function(){
			move(this.children[0],{opacity:0.6,"font-size":30},{duration:500});
			//aConUl1LiSpan.style.opacity = 1;
		};
		aConUl1Li[i].onmouseout = function(){
			move(this.children[0],{opacity:0.1,"font-size":20});
			//aConUl1LiSpan.style.opacity = 1;
		};
	}
//

	var oConUl2 = document.getElementById("con_ul2");
	var aConUl2Li = oConUl2.children;
	
	var oLi1 = document.getElementById("li1");
	var oLi2 = document.getElementById("li2");
	var oLi3 = document.getElementById("li3");
	var oLi4 = document.getElementById("li4");
	var oLi5 = document.getElementById("li5");
	var oLi6 = document.getElementById("li6");
	var oLi8 = document.getElementById("li8");
	var oLi9 = document.getElementById("li9");
	var oLi10 = document.getElementById("li10");
	
	for(var i = 0; i < aConUl2Li.length; i++){
		
		aConUl2Li[i].onmouseover = function(){
			var _this = this;
			//moveg(_this.children[0],{top:-140},{duration:500,easing:Tween.Cubic.easeOut});
			move(_this.children[0],{top:-140});
		};
		aConUl2Li[i].onmouseout = function(){
			//this.children[0].style.webkitTransform = "translateY(0)";
			//move(aConUl2Li,{top:140},{duration:500});	
			var _this = this;
			moveg(_this.children[0],{top:0},{duration:700,easing:Tween.Bounce.easeOut});
		};
		aConUl2Li[i].onclick = function(){
			window.open("","blank");
		};
	}
	
	oLi1.onclick = function(){
		window.open("html/runningBall.html","_blank");
	};
	oLi2.onclick = function(){
		window.open("html/screensaver.html","_blank");
	};
	oLi3.onclick = function(){
		window.open("html/3dRing.html","_blank");
	};
	oLi4.onclick = function(){
		window.open("html/blast.html","_blank");
	};
//
	var oConUl3 = document.getElementById("con_ul3");
	var aConUl2Li = oConUl3.children;
	var len = aConUl2Li.length;
	
		
	for(var i = 0; i < len; i++){
		aConUl2Li[i].onmouseover = function(){
			var oUl = this.children[0];
			var aLi = oUl.children;
			var h = aLi[0].offsetHeight*aLi.length;
			move(oUl,{opacity:1,height:h});	
		};
		aConUl2Li[i].onmouseout = function(){
			var oUl = this.children[0];  
			move(oUl,{opacity:0,height:0});	
		};
	}
	var o2048 = document.getElementById("2048");
	var oFish = document.getElementById("fish");
	
	o2048.onclick = function(){
		window.open("html/2048.html","_blank");
	};
	oFish.onclick = function(){
		window.open("html/fish.html","_blank");
	};
//
	
	
};






