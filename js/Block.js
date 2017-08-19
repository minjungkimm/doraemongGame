/*게임에 사용될 블럭을 정의한다!!*/
var Block=function(container, src, width, height, x, y,itemType){
	this.container=container; //멤버변수들
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.itemType=itemType;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";

		this.img.style.position="absolute";
		this.img.style.left=x+"px";
		this.img.style.top=y+"px";

		this.container.appendChild(this.img);
	}

}
