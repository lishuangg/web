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
	/*放大镜*/
	var box_left = document.getElementById("box_left");
	var box_right = document.getElementById("box_right");
	var slider = document.getElementById("slider");
	var Simg = document.getElementById("Simg");
	var Bimg = document.getElementById("Bimg");
	var sp0 = document.getElementById("sp0");
	var sp1 = document.getElementById("sp1");
	var fangdajing = document.getElementById('fangdajing');
	var center_white = document.getElementById('center-white');
	sp0.onclick = function(){
		sp0.style.cssText="border:2px solid #ff9003";
		sp1.style.cssText="border:2px solid #fff";
		Simg.setAttribute('src','../img/pp0.jpeg');
		Bimg.setAttribute('src','../img/pp0.jpeg');
	}
	sp1.onclick = function(){
		sp1.style.cssText="border:2px solid #ff9003";
		sp0.style.cssText="border:2px solid #fff";
		Simg.setAttribute('src','../img/pp1.jpeg');
		Bimg.setAttribute('src','../img/pp1.jpeg');
	}
	box_left.onmouseover=function(){
	    slider.style.display='block';
		box_right.style.display='block';
 	}
	box_left.onmouseout=function(){
	    slider.style.display='none';
		box_right.style.display='none';
 	}
  
    box_left.onmousemove=function(ev){
		var ev=ev||event;
		  
		var oL=ev.clientX-center_white.offsetLeft-slider.offsetWidth/2-20;
		var oT=ev.clientY+document.documentElement.scrollTop-fangdajing.offsetTop-slider.offsetHeight/2;
		  
		var oMaxw=box_left.offsetWidth-slider.offsetWidth;
		var oMaxh=box_left.offsetHeight-slider.offsetHeight;
		  
		oL=oL>oMaxw?oMaxw:oL<0?0:oL;
		oT=oT>oMaxh?oMaxh:oT<0?0:oT;
		
		slider.style.left = oL+'px';
		slider.style.top = oT+'px' ;

		var oBmaxw = box_right.offsetWidth - Bimg.offsetWidth; //负值，是最大值
		var oBmaxh = box_right.offsetHeight - Bimg.offsetHeight; 
		// Bimg.style.cssText="left:" + ( oL/oMaxw ) * oBmaxw + 'px;top:' + ( oT/oMaxh ) * oBmaxh + 'px';
		Bimg.style.left = ( oL/oMaxw ) * oBmaxw + 'px'
		Bimg.style.top = ( oT/oMaxh ) * oBmaxh + 'px'
		console.log(Bimg.style.left);
	}



	/*选择化妆品净含量*/
	var ml150 = document.getElementById('xqp04_150ml');
	var ml200 = document.getElementById('xqp04_200ml');
	var xqspan = document.getElementById('xqspan');
	function checked(obj){
		obj.style.cssText="border:1px solid #f00;background:url(../img/duigou.png) no-repeat;background-position:100% 100%;";
		xqspan.innerText = '"'+obj.innerText+'"';
	}
	function noChecked(obj){
		obj.style.cssText="border:1px solid #fff;background:none"
	}
	checked(ml150);
	ml150.onmouseover=function () {
		ml150.style.cursor="pointer";
	}
	ml150.onclick = function(){
		checked(ml150);
		noChecked(ml200);	
	}
	ml200.onmouseover=function () {
		ml200.style.cursor="pointer";
	}
	ml200.onclick = function(){
		checked(ml200);
		noChecked(ml150);
	}
	/*数量加减一件*/
	var jian = document.getElementById('jian');
	var jia = document.getElementById('jia');
	var number = document.getElementById('number');
	var num = number.value;
	jian.onmouseover=function () {
		jian.style.cursor="pointer";
	}
	jian.onclick = function(){
		if(num>0){
			number.value = --num;
		}
	}
	jia.onmouseover=function () {
		jia.style.cursor="pointer";
	}
	jia.onclick = function(){
		if(num<5){
			number.value = ++num;
		}
	}
	/*加入购物车*/
	var btn_gouwuche = document.getElementById('btn_gouwuche');
	var bodybackground = document.getElementById('bodybackground');
	btn_gouwuche.onclick = function(){
		bodybackground.style.display='block';
	}
}