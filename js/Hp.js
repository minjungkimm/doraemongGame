/*Hp +,- 가능하게끔*/
var Hp=function(container, src, width, height){
	this.container=container; //멤버변수들
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.float="left";

		this.container.appendChild(this.img);
	}
}
