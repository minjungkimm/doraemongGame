/*게임에 등장하는 모든 오브젝트들이 보편적인 특징을 갖는 객체를 정의!!
*/
var GameObject=function(container,src,width,height,x,y){
	//var 쓰지마세요 오류남
	this.container=container;
	this.img;
	this.src=src;
	this.width=width;
	this.height=height;
	this.x=x;
	this.y=y;
	this.velX=0; //x축 방향의 속도
	this.velY=0; //y축 방향의 속도

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
