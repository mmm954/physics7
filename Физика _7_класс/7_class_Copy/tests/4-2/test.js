$(document).ready(function(){
	var genFlag = true;
	$("#cool").hide();
	var flag1 = true;
	var rAns = 0;
	qArr = new Array();
	aArr = new Array();
	aArr[0] = new Array();
	aArr[1] = new Array();
	aArr[2] = new Array();
	aArr[3] = new Array();
	aArr[4] = new Array();
	aArr[5] = new Array();
	
	for(f=0;f<11;f++) {
			qArr.push($("#ques"+f).html()); 
		}
		
	for(y=0;y<11;y++) {
			aArr[1].push($("#answ"+y+"1").html());
			aArr[2].push($("#answ"+y+"2").html());
			aArr[3].push($("#answ"+y+"3").html());
			aArr[4].push($("#answ"+y+"4").html());
			aArr[5].push($("#answ"+y+"5").html());
		}	
	
	
	answers = new Array();
	answers = ["", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]
	for(var i = 1; i<=10; i++){
	m = 1;
  	n = 5;
  	a1 = Math.floor(Math.random() * (n - m + 1) ) + m;
  	a2=a1
    while (a2==a1){
    a2 = Math.floor(Math.random() * (n - m + 1) ) + m;
    }
    a3 = a1
    while(a3==a1 || a3==a2) {
    a3 = Math.floor(Math.random() * (n - m + 1) ) + m;
    }
    a4 = a1
    while(a4==a1 || a4==a2 || a4==a3) {
    a4 = Math.floor(Math.random() * (n - m + 1) ) + m;
    }
    a5 = a1
    while(a5==a1 || a5==a2 || a5==a3 || a5==a4) {
    a5 = Math.floor(Math.random() * (n - m + 1) ) + m;
    }
		$('<div id="out'+i+'" class="outer"><div id="num'+i+'" class="number">'+i+'</div><div id="con'+i+'" class="container"><div id="q'+i+'" class="question"></div><div id="an'+a1+'_'+i+'" class="answer">'+aArr[a1][i]+'</div><div id="an'+a2+'_'+i+'" class="answer">'+aArr[a2][i]+'</div><div id="an'+a3+'_'+i+'" class="answer">'+aArr[a3][i]+'</div><div id="an'+a4+'_'+i+'" class="answer">'+aArr[a4][i]+'</div><div id="an'+a5+'_'+i+'" class="answer">'+aArr[a5][i]+'</div></div></div>').appendTo("#body");
		$("#q"+i).html(qArr[i]);
		};
	$('<div style="clear: both;"></div>').appendTo("#body");
	$('<div id="but1" class="button">Проверить</div><a href="test.htm" target="_self"><div id="but2" class="button">Обновить</div></a><div class="results"><div>Результаты</div><div id="res" class="res1"></div></div>').appendTo("#body");

	$(".answer").mouseover(addC)
				.mouseout(remC);
	$("#an1_1").click(setZero);
	$("#an1_2").click(setZero);
	$("#an1_3").click(setZero);
	$("#an1_4").click(setZero);
	$("#an1_5").click(setZero);
	$("#an1_6").click(setZero);
	$("#an1_7").click(setZero);
	$("#an1_8").click(setZero);
	$("#an1_9").click(setZero);
	$("#an1_10").click(setZero);
	
	$("#an2_1").click(setZero);
	$("#an2_2").click(setZero);
	$("#an2_3").click(setZero);
	$("#an2_4").click(setZero);
	$("#an2_5").click(setZero);
	$("#an2_6").click(setZero);
	$("#an2_7").click(setZero);
	$("#an2_8").click(setZero);
	$("#an2_9").click(setZero);
	$("#an2_10").click(setZero);
	
	$("#an3_1").click(setZero);
	$("#an3_2").click(setZero);
	$("#an3_3").click(setZero);
	$("#an3_4").click(setZero);
	$("#an3_5").click(setZero);
	$("#an3_6").click(setZero);
	$("#an3_7").click(setZero);
	$("#an3_8").click(setZero);
	$("#an3_9").click(setZero);
	$("#an3_10").click(setZero);
	
	$("#an5_1").click(setZero);
	$("#an5_2").click(setZero);
	$("#an5_3").click(setZero);
	$("#an5_4").click(setZero);
	$("#an5_5").click(setZero);
	$("#an5_6").click(setZero);
	$("#an5_7").click(setZero);
	$("#an5_8").click(setZero);
	$("#an5_9").click(setZero);
	$("#an5_10").click(setZero);
	
	$("#an4_1").click(plusOne);
	$("#an4_2").click(plusOne);
	$("#an4_3").click(plusOne);
	$("#an4_4").click(plusOne);
	$("#an4_5").click(plusOne);
	$("#an4_6").click(plusOne);
	$("#an4_7").click(plusOne);
	$("#an4_8").click(plusOne);
	$("#an4_9").click(plusOne);
	$("#an4_10").click(plusOne);
	
	$("#but1").click(checkA);
	$(".answer").click(deact);
	function addC() {
		if(genFlag == true) {
		if($(this).hasClass("answer")) {
			$(this).addClass("sel");
		};
		if($(this).hasClass("answerN")) {
			$(this).addClass("selN");
		};
		if($(this).hasClass("answerM")) {
			$(this).addClass("selM");
		}
		};
	};
	function remC() {
		if(genFlag == true) {
			$(this).removeClass("sel");
			$(this).removeClass("selM");
			$(this).removeClass("selN");
	}
	};
	function deact() {
	if(genFlag == true) {
		var idNum1 = this.id.slice(4,6);
		$("#num"+idNum1).addClass("numberA");
		$("#con"+idNum1).addClass("containerA");
		$("#q"+idNum1).addClass("questionA");
		$("#an1_"+idNum1).addClass("answerA");
		$("#an2_"+idNum1).addClass("answerA");
		$("#an3_"+idNum1).addClass("answerA");
		$("#an4_"+idNum1).addClass("answerA");
		$("#an5_"+idNum1).addClass("answerA");
		$("#an1_"+idNum1).removeClass("answer");
		$("#an2_"+idNum1).removeClass("answer");
		$("#an3_"+idNum1).removeClass("answer");
		$("#an4_"+idNum1).removeClass("answer");
		$("#an5_"+idNum1).removeClass("answer");
		$("#an1_"+idNum1).removeClass("select");
		$("#an2_"+idNum1).removeClass("select");
		$("#an3_"+idNum1).removeClass("select");
		$("#an4_"+idNum1).removeClass("select");
		$("#an5_"+idNum1).removeClass("select");
		if(!$(this).hasClass("answerM")) {
			if(!$(this).hasClass("answerN")) {
				$(this).addClass("select");
			} else {
				$("#an1_"+idNum1).removeClass("selectN");
				$("#an2_"+idNum1).removeClass("selectN");
				$("#an3_"+idNum1).removeClass("selectN");	
				$("#an4_"+idNum1).removeClass("selectN");
				$("#an5_"+idNum1).removeClass("selectN");
				$(this).addClass("selectN");
			} 
		}
	}
	};
	function plusOne() {
		if(genFlag == true) {
			var idNum = this.id.slice(4,6);
			answers[idNum] = 1;	
	}
	};
	function setZero() {
		if(genFlag == true) {
			var idNum = this.id.slice(4,6);
			answers[idNum] = 0;	
	}
	};
	function checkA() {
	if(genFlag == true) {
		rAns = 0;
		for(w=1; w<=10; w++) {
			if(answers[w] == 1) {
				rAns++;
				$("#num"+w).addClass("numberM");
				$("#con"+w).addClass("containerM");
				$("#q"+w).addClass("questionM");
				$("#an1_"+w).addClass("answerM");
				$("#an2_"+w).addClass("answerM");
				$("#an3_"+w).addClass("answerM");
				$("#an4_"+w).addClass("answerM");
				$("#an5_"+w).addClass("answerM");
				$("#an1_"+w).removeClass("answer", "answerN");
				$("#an2_"+w).removeClass("answer", "answerN");
				$("#an3_"+w).removeClass("answer", "answerN");
				$("#an4_"+w).removeClass("answer", "answerN");
				$("#an5_"+w).removeClass("answer", "answerN");
				if($("#an1_"+w).hasClass("select")) {
					$("#an1_"+w).removeClass("select");
					$("#an1_"+w).addClass("selectM");
				};
				if($("#an2_"+w).hasClass("select")) {
					$("#an2_"+w).removeClass("select");
					$("#an2_"+w).addClass("selectM");
				};
				if($("#an3_"+w).hasClass("select")) {
					$("#an3_"+w).removeClass("select");
					$("#an3_"+w).addClass("selectM");
				};
				if($("#an4_"+w).hasClass("select")) {
					$("#an4_"+w).removeClass("select");
					$("#an4_"+w).addClass("selectM");
				};
				if($("#an5_"+w).hasClass("select")) {
					$("#an5_"+w).removeClass("select");
					$("#an5_"+w).addClass("selectM");
				}
				if($("#an1_"+w).hasClass("selectN")) {
					$("#an1_"+w).removeClass("selectN");
					$("#an1_"+w).addClass("selectM");
				};
				if($("#an2_"+w).hasClass("selectN")) {
					$("#an2_"+w).removeClass("selectN");
					$("#an2_"+w).addClass("selectM");
				};
				if($("#an3_"+w).hasClass("selectN")) {
					$("#an3_"+w).removeClass("selectN");
					$("#an3_"+w).addClass("selectM");
				};
				if($("#an4_"+w).hasClass("selectN")) {
					$("#an4_"+w).removeClass("selectN");
					$("#an4_"+w).addClass("selectM");
				};
				if($("#an5_"+w).hasClass("selectN")) {
					$("#an5_"+w).removeClass("selectN");
					$("#an5_"+w).addClass("selectM");
				}
			} else {
				$("#num"+w).addClass("numberN");
				$("#con"+w).addClass("containerN");
				$("#q"+w).addClass("questionN");
				$("#an1_"+w).addClass("answerN");
				$("#an2_"+w).addClass("answerN");
				$("#an3_"+w).addClass("answerN");
				$("#an4_"+w).addClass("answerN");
				$("#an5_"+w).addClass("answerN");
				$("#con"+w).removeClass("containerM");
				$("#q"+w).removeClass("questionM");
				$("#num"+w).removeClass("numberM");
				$("#an1_"+w).removeClass("answer", "answerM");
				$("#an2_"+w).removeClass("answer", "answerM");
				$("#an3_"+w).removeClass("answer", "answerM");
				$("#an4_"+w).removeClass("answer", "answerM");
				$("#an5_"+w).removeClass("answer", "answerM");
				if($("#an1_"+w).hasClass("select")) {
					$("#an1_"+w).removeClass("select");
					$("#an1_"+w).addClass("selectN");
				};
				if($("#an2_"+w).hasClass("select")) {
					$("#an2_"+w).removeClass("select");
					$("#an2_"+w).addClass("selectN");
				};
				if($("#an3_"+w).hasClass("select")) {
					$("#an3_"+w).removeClass("select");
					$("#an3_"+w).addClass("selectN");
				};
				if($("#an4_"+w).hasClass("select")) {
					$("#an4_"+w).removeClass("select");
					$("#an4_"+w).addClass("selectN");
				};
				if($("#an5_"+w).hasClass("select")) {
					$("#an5_"+w).removeClass("select");
					$("#an5_"+w).addClass("selectN");
				}
			}
		};
		wAns = 10 - rAns;
		$("#res").html("<p style='font: 16px Tahoma;'> Правильных ответов "+rAns+".<br>Неправильных &mdash; "+wAns+".</p>");
		genFlag = false;
	}
	};
});