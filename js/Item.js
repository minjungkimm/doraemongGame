/*item 만들기*/
var Item=function(container, src, width, height, x, y){
	this.container=container; //멤버변수들
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;

	this.init=function(){
		this.img=document.createElement("img");
		this.img.src=this.src;
		this.img.style.width=this.width+"px";
		this.img.style.height=this.height+"px";
		this.img.style.float="left";

		this.img.style.position="absolute";
		this.img.style.left=this.x+"px";
		this.img.style.top=this.y+"px";

		this.container.appendChild(this.img);
	}

	this.remove=function(){

		this.container.removeChild(this.img);


	}
}
