function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
window.onload = function(){
	/*顶部悬浮*/
	var cover = document.getElementById('cover');
	window.onscroll = function(){
		var st = document.documentElement.scrollTop ||document.body.scrollTop;
		if(st>130){
			cover.style.position = 'fixed'
		}else{
			cover.style.position = 'static'
		}
	}

	/*轮播图部分*/
	var box = document.getElementById('center-center01');
	var oNavlist = document.getElementById('nav').children;
	var slider = document.getElementById('slider');
	var left = document.getElementById('left');
	var right = document.getElementById('right');
	var index = 1;
	var timer;
	var isMoving = false;
	box.onmouseover = function(){
		animate(left,{opacity:50})
		animate(right,{opacity:50})
		clearInterval(timer)
	}
	box.onmouseout = function(){
		animate(left,{opacity:0})
		animate(right,{opacity:0})
		timer = setInterval(next, 3000);
	}
	right.onclick = next;
	left.onclick = prev;
	for( var i=0; i<oNavlist.length; i++ ){
		oNavlist[i].index = i;
		oNavlist[i].onclick = function(){
			index = this.index+1;
			navmove();
			animate(slider,{left:-800*index});
		}
	}
	function next(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index++;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==7){
				slider.style.left = '-800px';
				index = 1;
			}
			isMoving = false;
		});
	}
	function prev(){
		if(isMoving){
			return;
		}
		isMoving = true;
		index--;
		navmove();
		animate(slider,{left:-800*index},function(){
			if(index==0){
				slider.style.left = '-4800px';
				index = 6;
			}
			isMoving = false;
		});
	}
	function navmove(){
		for( var i=0; i<oNavlist.length; i++ ){
			oNavlist[i].className = "";
		}
		if(index > 6 ){
			oNavlist[0].className = "active";
		}else if(index<=0){
			oNavlist[5].className = "active";
		}else {
			oNavlist[index-1].className = "active";
		}
	}
	timer = setInterval(next, 3000);
	/*公告上下滚动*/
	var right02_div = document.getElementById('right02_div');
	var right02_ul01 = document.getElementById('right02_ul01');
	var right02_ul02 = document.getElementById('right02_ul02');
	right02_ul02.innerHTML = right02_ul01.innerHTML;
	function roll(){
		if(right02_ul02.offsetTop - right02_div.scrollTop <= 0){
			right02_div.scrollTop -= right02_ul01.offsetHeight
		}else{
			right02_div.scrollTop++
		}
	}
	var rightroll = setInterval(roll,40);
	right02_div.onmouseover = function(){
		clearInterval(rightroll)
	}
	right02_div.onmouseout = function(){
		rightroll = setInterval(roll,40)
	}
	/*话费充值*/
	var select = document.getElementById('select');
	var price = document.getElementById('price');
	price.innerHTML = '¥'+select.value;
	select.onclick = function(){
		price.innerHTML = '¥'+this.value;
	}
}
