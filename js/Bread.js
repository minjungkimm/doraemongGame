var Bread=function(container,x,y){
	this.container=container;
	this.img;
	this.x=x;
	this.y=y;
	this.velX=10; //x의 변화량
	this.st; //빵총알 move의 setTimeout
	this.s=0;
	this.hit;

	this.item=[
		["../images/blank.png","blank"],
		["../images/blank.png","blank2"],
		["../images/dorayaki.jpg","power"],
		["../images/dora_mouse.png","down"]
	];

	//초기화 메서드 정의
	this.init=function(){
		this.img=document.createElement("img");
		this.img.src="../images/bread.png";
		this.img.style.width=55+"px";
		this.img.style.position="absolute";
		this.img.style.left=this.x+"px"; //도라에몽의left값
		this.img.style.top=this.y+"px";//도라에몽의top값

		this.container.appendChild(this.img); //부착!!!!! this.좀 빼먹지말자
		this.move(); //빵총알 움직이기 시작!!
	}

	//총알의 동작을 정의하는 메서드
	this.move=function(){
		var me=this;

		//빵총알의 위치는 태어날 시점에 부여받은 값인
		//this.x 값부터 더해나가야 한다..
		this.x+=this.velX;
		this.img.style.left=this.x+"px";

		if(this.x>=(screen.width-80)){
			//bread의 x값이 스크린width의
			//-80에서부터
			this.container.removeChild(this.img);
			//빵총알이컨테이너에서지워지는걸로..
			//지워지고나서 setTimeout도 지워져야함
			clearTimeout(this.st); //1:1대응
			return;
			//실행부가 clear호출뒤
			//한번더 실행됨을 방지하기위해
			//return;
		}

		//빵총알이 box에 맞았는지 확인되야함
		for(var i=0; i<blockArray.length; i++){
				if(hitTest(this.img, blockArray[i].img)){

						if(blockArray[i].itemType=="box"){
							if(getRandom(11)%2==0){
								//아이템나오게
								var x=parseInt(blockArray[i].img.style.left);
								var y=parseInt(blockArray[i].img.style.top);
								var n=getRandom(this.item.length); //각자주면은 각자랜덤으로 따로논다..
								var itemSrc=this.item[n][0];
								var itemType=this.item[n][1];

								console.log("itemType is ",itemType);

								var item=new Block(this.container, itemSrc ,60,60,x,y, itemType);

								item.init();

								itemArray.push(item);


								this.container.removeChild(blockArray[i].img);
								hit.play();
								//박스배열에서 [i],1 박스 아예 없애버리기
								blockArray.splice(i,1);
								//빵총알도 맞으면 동시에 없어지기
								this.container.removeChild(this.img);
								//박스없애고 나올 아이템을 랜덤화 시키기,

								//move setTimeout 멈추기, 1:1대응
								clearTimeout(this.st);
								//setTimeout 재실행되지않게 return 넣기
								return;

							}


						}else if(blockArray[i].itemType=="monster","monsterr"){

							console.log("퉁퉁이비켜");

							point.innerText=getScore(parseInt(point.innerText)+10);

							this.container.removeChild(blockArray[i].img);
							this.container.removeChild(this.img);
							hit.play();
							blockArray.splice(i,1);

							clearTimeout(this.st);

							return;

						}
						else if(blockArray[i].itemType=="blank"){

							this.container.removeChild(blockArray[i].img);
							this.container.removeChild(this.img);

							blockArray.splice(i,1);

							clearTimeout(this.st);

							return;

						}

			}
		}

		this.st=setTimeout(function(){
		me.move();
		},10);

	}

	function createSound(){

	 hit = new Audio("../sound/hit.snd");

	}
}
