var youku = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:#0078FF;margin:3.78vw 2.1vw;">��</span>'

var qq = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:#0078FF;margin:3.78vw 2.1vw;">��</span>'

var nothing = '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:transparent;margin:3.78vw 2.1vw;">��</span>'

var apis = [{
name:nothing + "�����",url:"http://api.baiyug.cn/vip/index.php?url=",title:"תȦȦ�ͻ���·"
},{
 name:nothing + "����ѧԺ",url:"http://app.baiyug.cn:2019/vip/index.php?url=",title:"�ۺϽӿ�"
},{ 
name:nothing + "������",url:"https://jx.biaoge.tv/index.php?url=",title:"�ۺϽӿ�"
},{
name:nothing + "1717��",url:"http://www.1717yun.com/jx/ty.php?url=",title:"�ۺϽӿ�"
}, {
name:nothing + "ʯͷ����",url:"https://jiexi.071811.cc/jx.php?url=",title:"�ֶ��㲥��"
},{
name:nothing + "����Сվ",url:"http://www.sfsft.com/admin.php?url=",title:"����СվͬԴ"
}, {
name:nothing + "ODFLV",url:"https://yun.odflv.com/odflv/index.php?url=",title:"������·�ɹ��ʻ����"
},{
name:nothing + "vip��",url:"http://aikan-tv.com/?url=",title:"���ȶ������������������Ӱ��"
},{
name:nothing + "163��",url:"http://jx.api.163ren.com/vod.php?url=",title:"ż��֧����Ѷ"
},{
name:nothing + "����Сվ2",url:"http://www.82190555.com/video.php?url=",title:"תȦȦ�ͻ���·"
},{
name:nothing + "���˷���",url:"http://jx.598110.com/index.php?url=",title:"�ۺϣ�����·"
} ];


//�����?
function createSelect (apis) {
	var myul = document.createElement("ul");
	myul.id = "myul";
	myul.setAttribute("style","display:none;background:#fff;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 4.2vw;position:fixed;bottom:33vh;right:12vw;z-index:99999;height:50vh;overflow:scroll;border-radius:1.26vw;");
	for (var i = 0; i < apis.length; i ++) {
		var myli = document.createElement("li");
		var that=this;
		myli.setAttribute("style","margin:0;padding:0;display:block;list-style:none;font-size:4.2vw;width:33.6vw;text-align:left;line-height:12.6vw;letter-spacing:0;border-bottom:1px solid #f0f0f0;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;");
		(function (num) {
			myli.onclick = function () {
				window.open(apis[num].url + location.href,'_blank');
			};
			myli.ontouchstart = function () {
				this.style.cssText += "color:yellow;background:#373737;border-radius:1.26vw;";
			}
			myli.ontouchend = function () {
				this.style.cssText += "color:black;background:transparent;border-radius:0;";
			}
		})(i);
		myli.innerHTML = apis[i].name;
		myul.appendChild(myli);
	}
	document.body.appendChild(myul);
}

//�����˵�
function createMenu(){
	var myBtn = document.createElement("div");
	myBtn.id = "myBtn";
	myBtn.innerHTML = "+";
	myBtn.setAttribute("style","width:15vw;height:15vw;position:fixed;bottom:20vh;right:10vw;z-index:100000;border-radius:100%;text-align:center;line-height:15vw;box-shadow:0px 1px 10px rgba(0,0,0,0.3);font-size:5.5vw;background:#fff;");
	myBtn.onclick = function (){
		var myul = document.getElementById("myul");
		if(myul.style.display == "none"){
			myul.style.display = "block";
			this.style.transform="rotateZ(45deg)";
		}else{
			myul.style.display = "none";
			this.style.transform="rotateZ(0deg)";
		}
	}
	document.body.appendChild(myBtn);
}
/*document.addEventListener("DOMContentLoaded",function () {
	createMenu();
	createSelect(apis);
});*/
if(location.href.match(".iqiyi.com") || location.href.match(".youku.com") || location.href.match(".le.com") || location.href.match(".letv.com") || location.href.match("v.qq.com") || location.href.match(".tudou.com") || location.href.match(".mgtv.com") || location.href.match("film.sohu.com") || location.href.match("tv.sohu.com") || location.href.match(".acfun.cn") || location.href.match(".bilibili.com") || location.href.match(".pptv.com") || location.href.match("vip.1905.com") || location.href.match(".yinyuetai.com") || location.href.match(".fun.tv") || location.href.match(".56.com") || location.href.match(".wasu.cn")) {
		createMenu();
		createSelect(apis);
}