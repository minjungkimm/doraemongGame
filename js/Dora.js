/*중력을 적용하자
중력:가속도 중 지구 중심 방향의 가속도*/

var Dora=function(blockArray,hpContainer){
	this.hpContainer=hpContainer;
	this.g=0.3;
	//중력값 정의
	this.blockArray=blockArray;
	this.jump=false;
	this.falling=true;
	this.st;
	this.hitCount=4; //하트와같게
	this.totalHP=5;
	this.len;
	
	this.createHp=function(){
		for(var i=0; i<this.totalHP; i++){ //totalHP는 5라는 숫자안에서 행해지고
			var hp = new Hp(this.hpContainer,"../images/hp.png", 70, 70); //x,y 값은 style 시트에서 주고, float이용하여
			hp.init();																			//이미지가 계속 옆으로 붙어서 배치되게 하였음
			hpArray.push(hp);
		}
	}

	this.removeHp=function(){ //***hpArray.length; (5) 로 해놨는데 되지않음!!
		//HP는 지우고 다시 만들기 위해 별도의 div 안에서 처리해야 한다.
		//싹 지우고 다시 만들기
		len=this.hpContainer.children.length; //hpContainer의 자식요소 길이만큼
		console.log("len의 값은?"+len);
		if(len!=0){
				for(var i=0;i<len;i++){ //len은 hp div 영역에 있는 hp 갯수(hp컨테이너자식) 안에서 행해진다
					this.hpContainer.removeChild(this.hpContainer.lastChild); //마지막 자식 for문 돌아가는 만큼 지우게됨
					this.die();//hp가 0이면 게임오버
				}
		}
	}

	//동작 메서드 정의
	this.move=function(){
		var me=this;
		//점프하거나, 떨어질때
		//언제나 y값에 중력 받는다
		if(this.jump || this.falling){
			this.velY+=this.g;
			this.y+=this.velY;
			//velY-y증가값 에다가 g더함
			//this.y-에다가 y증가값 더함
			//=점프,떨어질때 항상 중력값이 포함
		}
		this.x+=this.velX;
		//x값은 x증가값만 포함

		//충돌테스트 이용해서 박스앞으로
		//도라에몽이 this.x값 움직이지 못하게

		for(var i=0; i<this.blockArray.length; i++){
			if(hitTest(this.img,this.blockArray[i].img)){
			 console.log("아야");
			 //충돌되면
			 this.x=0;

			 this.totalHP--;

			 this.removeHp();
			 this.createHp();

			}
		}

		//실시간으로 아이템들이 어떻게 담겨 있는지 알아보자
		//console.log("아이템 배열 크기는 "+itemArray.length);

		for(var i=0; i<itemArray.length; i++){
			if(hitTest(this.img, itemArray[i].img)){

				//도라에몽이 만난 아이템이 무엇인지 알아맞춰보자!!
				console.log("제가 지금 먹은 아이템은 ", itemArray[i].itemType);

				if(itemArray[i].itemType=="power"){ //power
					//아이템을 먹는 모습 //그리고 hp가 추가되어야함
					this.totalHP++;
				}else if(itemArray[i].itemType=="down"){//down
					this.totalHP--;
				}else if(itemArray[i].itemType=="blank"){ //blank

				}else if(itemArray[i].itemType=="blank2"){ //blank2

				}


				this.removeHp();
				this.createHp();

				//itemType=power 아이템이랑 도라에몽 부딪히면
				container.removeChild(itemArray[i].img);
				//아이템배열에서 [i],1 아이템 아예 없애버리기
				itemArray.splice(i, 1);
			}
		}

		  //도라미와 도라에몽이 부딪히면
		if(hitTest(this.img,dorami)){
			if(this.hitCount>=0){
				this.totalHP--;
				this.hitCount--;
				this.removeHp();
				this.createHp();
			}
			//도라미의 우측으로 튕겨나가게 하자
			this.x=150;
			//계속 부딪혀서 hp==0이 되면 죽는다
			if(hpArray==0){
				//기왕이면 가속도운동으로
				//밑으로 떨어지는 효과 나중에 주기
				//dropEffect();
				clearTimeout(this.st); //move
				return;		//작동시간 없애기
			}
		}

		if(this.velY>0){//y증가값이 0보다
				//높으면 점프x
		 this.jump=false;
		}

		this.img.style.top=this.y+"px";
		this.img.style.left=this.x+"px";

		//y값이 스크린y값보다 더-이면,
		//더 위면, 도라에몽 점프불가하게
		//즉, 도라에몽이 화면 위로 못벗어나서
		//게임화면 내에서는 게임하게끔 불법을 못저지르게...
		if(this.y<screen.height){

		this.jump=false;

		}

		//y값이 스크린y값보다 더+이면,
		//더 밑이면, 도라에몽 이미지
		//지워버림, 드롭이펙트 함수 작동

		if(this.y>screen.height){
		this.container.removeChild(this.img);

		dropEffect();

		clearTimeout(this.st); //move
		return;		//작동시간 없애기
		}

		this.die=function(){
			if(len==1){
				dropEffect();
				clearTimeout(this.st); //move
				return;		//작동시간 없애기
			}
		}

		this.st=setTimeout(function(){
			me.move();
		}, 10);
	}
}
