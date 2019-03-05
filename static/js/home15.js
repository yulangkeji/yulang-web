/*vganchou*/
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
function IsPC(){var userAgentInfo=navigator.userAgent;var Agents=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"];var flag=true;for(var v=0;v<Agents.length;v++){if(userAgentInfo.indexOf(Agents[v])>0){flag=true;break}}return flag};

var pbox=$("#page");
var page=pbox.children();
var subp=pbox.find(".subp");
var rn=$("#nbar").children();
var bon=$("#nbar .bon");
var len=page.length-1;
var w_w,w_h,index=0,$inpage,$outpage,endCurrPage=false,isAnimating=false,endCurrPage=false,endNextPage=false,hasmap=false;
var au=$("#author");
var em=$("#email");
var cm=$("#comment");
var col1=document.getElementById("col1");
var col2=document.getElementById("col2");
var col3=document.getElementById("col3");
var hongju=document.getElementById("hongju");
var isphone=IsPC();

var an=[];
for(var i=0;i<len+1;i++){
an.push(1);
}

$(window).resize(function(e){resz();});
function resz(){
w_w=$(window).width();
w_h=$(window).height();
pbox.css("height",w_h);
page.css({"width":w_w,"height":w_h});
}
resz();

$(window).bind("mousewheel",function(event,delta){
	if(isAnimating){return false;}
	isAnimating = true;
	if(delta>0){
		var outClass = 'cur mbtm';
		var inClass = 'cur tbtm pdelay';
		hjpage(outClass,inClass,false);
		}else{
		var outClass = 'cur ptop';
		var inClass = 'cur fbtm pdelay';
		hjpage(outClass,inClass,true);
	}
});

function hjpage(outClass,inClass,dir){
	$outpage=page.eq(index);
		$outpage.addClass(outClass);
		endCurrPage = true;
		if(dir){
		index++;
		if(index>len){
		index=0;
		}
	}else{
		index--;
		if(index<0){
		index=len;
		}

	}
		$inpage=page.eq(index);
		$inpage.addClass(inClass);
		endNextPage = true;

		if(an[index]==1){
		setTimeout(function(){subp.eq(index).addClass("ant");},200);
		an[index]=0;
		}

		setTimeout("changepage(index)",800);

var bs=$inpage.attr("data-lazy");
if(bs!=1){lazy($inpage);}
		if(dir){
			var nxp=$inpage.next();
			var hs=nxp.attr("data-lazy");
			if(hs!=1){
				lazy(nxp);
			}
			}else{
			var prp=$inpage.prev();
			var hs=prp.attr("data-lazy");
			if(hs!=1){
			lazy(prp);
			}
	}
}

rn.click(function() {
var index=$(this).index();
// console.log(index);
ckpage(index);
});


// var index;
$("#nbar .bon").next().click(function() {
    var i = $("#nbar .bon").next().index();
    ckpage(i);
});

rn.first().click(function() {
    var i = rn.first().index();
    ckpage(i);
});

var t = setInterval(function() {
    // console.log($("#nbar .bon").next().index());
    // console.log(rn.first().text());
    if($("#nbar .bon").text() == 8) {
        $("#nbar li:eq(7)").removeClass('bon');
        $("#nbar li:eq(0)").addClass('bon');
        // console.log($("#nbar li:eq(0)").attr("class"));
        // console.log($("#nbar li:eq(7)").attr("class"));
        // console.log(rn.first().text());
        rn.first().click();
    }else if($("#nbar .bon").text() >= 1){
        $("#nbar .bon").next().click();
    }
},5000);

function ckpage(i){
if(i==index||isAnimating){
return;
}
isAnimating = true;
if(i>index){
var outClass = 'cur ptop';
var inClass = 'cur fbtm pdelay';
}else{
var outClass = 'cur mbtm';
var inClass = 'cur tbtm pdelay';
}
$outpage=page.eq(index);
$outpage.addClass(outClass);
endCurrPage = true;
index=i;
$inpage=page.eq(index);
$inpage.addClass(inClass);
endNextPage = true;
if(an[index]==1){
		setTimeout(function(){subp.eq(index).addClass("ant");},200);
		an[index]=0;
		}
setTimeout("changepage(index)",800);
var hs=$inpage.attr("data-lazy");
if(hs!=1){
	lazy($inpage);
    }
}


function changepage(i){
rn.eq(i).addClass("bon").siblings().removeClass("bon");
endCurrPage = false;
endNextPage = false;
isAnimating = false;
resetPage($outpage,$inpage);
}

function resetPage( $outpage,$inpage) {
  $outpage.attr("class","page");
  $inpage.attr("class","page cur");
}

function msg(i){
if(i==0){
$("#conb").hide();
$("#cona").fadeIn(500);
}else{
$("#conb").fadeIn(500);
$("#cona").hide();
}
}


function maps(i){
$("#map").fadeIn(500);
if(!hasmap){
$("#mapf").attr("src","hjmap.html");
	hasmap=true;
	}
}
function closemap(){
$("#map").fadeOut(200);
}

$("#home").mousemove(function(e){
var x=e.pageX;
var y=e.pageY;
var mx=(x-w_w)/w_w;
var my=(y-w_h)/w_h;
col1.style.MozTransform=col1.style.webkitTransform=col1.style.msTransform=col1.transform="translate3d("+-mx*30+"px,"+-my*30+"px,0)";
col2.style.MozTransform=col2.style.webkitTransform=col2.style.msTransform=col3.transform="translate3d("+-mx*20+"px,"+-my*20+"px,0)";
col3.style.MozTransform=col3.style.webkitTransform=col3.style.msTransform=col3.transform="translate3d("+-mx*40+"px,"+-my*40+"px,0)";
hongju.style.MozTransform=hongju.style.webkitTransform=hongju.style.msTransform=hongju.transform="translate3d("+-mx*10+"px,"+-my*10+"px,0)";
});

function lazy($pg){
var $m=$pg.find("img[src2]");
$m.each(function(){
var i=$(this).attr("src2");
$(this).attr("src",i).removeAttr("src2");
});
$pg.attr("data-lazy",1);
}

//message
var uval= {
    isEmail:function(a) {
        var b = "^[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+@[-!#$%&'*+\\/0-9=?A-Z^_`a-z{|}~]+.[-!#$%&'*+\\./0-9=?A-Z^_`a-z{|}~]+$";
        return this.test(a, b);
    },
    isEmpty:function(a) {
        return !jQuery.isEmptyObject(a);
    },
    test:function(a, b) {
        a = a.nodeType == 1 ? a.value :a;
        return new RegExp(b).test(a);
    }
};
$("#commentform").delegate(".put","keyup",function(){
var lb=$(this).find("label");
var pt=$(this).find(".htxt");
if(pt.val()!=""){
lb.hide();
}else{
lb.show();
}
});
$("#commentform").bind("submit",function(){
var uname=au.val();
var uem=em.val();
var ucm=cm.val();
if(au.val()==""){
alert("姓名不能为空");
au.focus();
return;
}
if(!uval.isEmail(uem)){
alert("请输入正确的邮箱地址！");
em.focus();
return;
}
if(ucm.length<10){
alert("留言不能少于10个字！");
cm.focus();
return;
}
$.post("wp-comments-post.php",{
comment_post_ID:"44",comment_parent:0,author:$("#author").val(),email:$("#email").val(),comment:$("#comment").val()},function(result){
if(result=="yes"){
alert("您的留言我们收到，感谢您对鸿巨的支持！");
au.val("");
em.val("");
cm.val("");
}
else{
alert(result);
}
});
});

//phone
if(isphone){
var start,isScrolling,deltaY,interval;
var phones=document.getElementById("page");

phones.addEventListener("touchstart",
            function(e) {
                start = {
                    pageX:e.touches[0].pageX,
                    pageY:e.touches[0].pageY,
                    time:Number(new Date())
                };
                isScrolling = undefined;
                deltaY = 0;
                e.stopPropagation();
            },
            false);
phones.addEventListener("touchmove",
            function(e) {
                if (e.touches.length > 1 || e.scale && e.scale !== 1) {
                    return
                }
                deltaY = e.touches[0].pageY - start.pageY;
                if (typeof isScrolling == "undefined") {
                    isScrolling = !!(isScrolling || Math.abs(deltaY) < Math.abs(e.touches[0].pageX - start.pageX))
                }
                if (!isScrolling) {
                    e.preventDefault();
                    e.stopPropagation()
                }
            },
            false);
phones.addEventListener("touchend",
            function(e) {
                var b = Number(new Date()) - start.time < 250 && Math.abs(deltaY) > 20 || Math.abs(deltaY) > 100;
                if (!isScrolling){
					var pno=index+(b?(deltaY<0?1:-1):0);
					if(pno>len){pno=0;}
					if(pno<0){pno=len;}
                   ckpage(pno);
                }
                e.stopPropagation();
            },
            false);
}

