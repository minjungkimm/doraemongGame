//랜덤값 구하기
//n은 랜덤에 의해 구해질 최대값
function getRandom(n){ //
	var r=Math.random();//0.0~~0.9
	return parseInt(r*n); //호출부로 결과값을 변환해준다..
}

/*----------------------------------
이 충돌 판단 함수는 모든 게임에 적용될 수 있으므로,
사용하기 위해서는 인수1에는 "나=Ship" 의 div, img, span
등을 넘겨야 하고, 인수2에는 "상대방=Enemy" 의 div, img,
span 을 전달하면 된다...
결론 : 충돌인 경우 true 반환하도록 처리함..
-----------------------------------*/

function hitTest(me, target) {
 //두물체간 충돌 여부 판단
 me_x= parseInt(me.style.left);
 me_y= parseInt(me.style.top);
 me_width=parseInt(me.style.width);
 me_height=parseInt(me.style.height);

 target_x= parseInt(target.style.left);
 target_y= parseInt(target.style.top);
 target_width=parseInt(target.style.width);
 target_height=parseInt(target.style.height);

 var result1=(me_x >= target_x) && (me_x <= (target_x+target_width));//나의 x좌표위치가 타겟의 x range 내에 있는지 판단
 var result2=(me_x+me_width >= target_x) && (me_x+me_width <= (target_x+target_width));  //나의 가로폭이 타겟의 가로폭 내에 있는지 판단

 var result3=(me_y >= target_y) && (me_y <= (target_y+target_height));//나의 y좌표위치가 타겟의 세로폭 내에 있는지 판단
 var result4=(me_y+me_height >= target_y) && (me_y+me_height <= (target_y+target_height));//나의 y폭이 타겟의 세로폭 내에 있는지 판단

 return (result1 || result2) && (result3 || result4);
}


//카운트 계산-점수를 문자열로 출력하기
//ex)짱구게임에서 점수표시할때, 000000에서 아이템을 먹을때마다 1씩 증가함
//일단, 000000은 6자리이므로, 이(자릿수)를 변수로 둔다.
//아이템을 10개 먹을 경우 10점이므로, 000000+10->000010이 되야 하는데,
function getScore(n){
	var total=5;
	var num=new String(n).length; //들어온 숫자(n)를 문자열로 바꿈->즉, 10이 들어오면 2로 반환
	var result=total-num; //총 자릿수에서 들어온 숫자 자릿수를 뺌
	var str="";

	for(var i=0; i<result; i++){
		str=str+"0"; //result가 4이면 0을 4번 붙임. ->0000
	}
	return str+n; //000010을 반환!
}
