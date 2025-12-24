$(document).ready(function(){
	
	var genFlag = true;
	var quan = 0;
	quanArr = new Array();
	
	var ff = 1;
	var rr = 2;
	$("#cool").hide();
	qArr = new Array();
	aArr = new Array();
	ed = new Array();
	
	for(f=0;f<6;f++) {

			qArr.push($("#ques"+f).html()); 
			aArr.push($("#answ"+f).html()); 
			ed.push($("#ed"+f).html()); 
			quanArr.push("quanR");
	}


	$('<div class="outer" id="outer1"><div class="container"><br /><p class="main">'+qArr[1]+'</p><input type="text" class="tInp" id="inp1" /><div id="a1" class="answer">'+ed[1]+'</div><br /><div id="but1" class="button"></div></div></div><div class="outerH" id="outer2"><div class="container"><br /><p class="main">'+qArr[2]+'</p><input type="text" class="tInp" id="inp2" /><div id="a2" class="answer">'+ed[2]+'</div><br /><div id="but2" class="button"></div></div></div><div class="outerH" id="outer3"><div class="container"><br /><p class="main">'+qArr[3]+'</p><input type="text" class="tInp" id="inp3" /><div id="a3" class="answer">'+ed[3]+'</div><br /><div id="but3" class="button"></div></div></div><div class="outerH" id="outer4"><div class="container"><br /><p class="main">'+qArr[4]+'</p><input type="text" class="tInp" id="inp4" /><div id="a4" class="answer">'+ed[4]+'</div><br /><div id="but4" class="button"></div></div></div><div class="outerH" id="outer5"><div class="container"><br /><p class="main">'+qArr[5]+'</p><input type="text" class="tInp" id="inp5" /><div id="a5" class="answer">'+ed[5]+'</div><br /><div id="but5" class="button5"></div></div></div>').appendTo("#body");
	
$("#inp1").focus();
$(".button").click(checkA);

 $('#inp1, #inp2, #inp3, #inp4').bind('keypress', function(e) 
   {	
        if(e.keyCode==13)
        {
             checkA();          
        }
   });


 $('#inp5').bind('keypress', function(e) 
   {	
        if(e.keyCode==13)
        {
             checkB();          
        }
   });


$("#but5").click(checkB);

	function checkA() {
		if($("#inp"+ff).val()==aArr[ff]) {
			quan++;
			quanArr[ff] = "quanG";
					
		}

			$("#outer"+ff).hide("slide", { direction: "left" }, 1000);
			$("#outer"+rr).show("slide", { direction: "right" }, 1000);
			ff++; 
			rr++;

			$("#inp"+ff).oneTime("1.1s", function() {
				$(this).focus();
			});




	}

	function checkB() {
		if($("#inp"+ff).val()==aArr[ff]) {
			quan++;
			quanArr[ff] = "quanG";
					
		}
	
			$('<div class="outerH" id="outer6"><div class="container"><br /><p class="main">Твоя оценка &nbsp;&nbsp;&nbsp;<span class="mark">'+quan+'</span></p><div class="'+quanArr[1]+'">Первый вопрос</div><div class="'+quanArr[2]+'">Второй вопрос</div><div class="'+quanArr[3]+'">Третий вопрос</div><div class="'+quanArr[4]+'">Четвертый вопрос</div><div class="'+quanArr[5]+'">Пятый вопрос &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="test.htm" class="refresh" target="_self">Заново</a></div></div></div>').appendTo("#body");

			$("#outer"+ff).hide("slide", { direction: "left" }, 1000);
			$("#outer"+rr).show("slide", { direction: "right" }, 1000);
			ff++; 
			rr++;
			
	}

});

