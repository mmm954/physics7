$(document).ready(function(){
	var genFlag = true;
	$("#cool").hide();
	
	qArr = $("#ques").html(); 
	aArr = $("#answ").html();
	ed = $("#ed").html();

	$('<div id="1" class="question">'+qArr+'</div><input type="text" class="tInp" /><div id="1" class="answer">'+ed+'</div><br /><div id="but1" class="button">Ответить</div><div id="res" class="results"></div>').appendTo("#body");
	

$("#but1").click(checkA);
	function checkA() {
		if($("input").val()==aArr) {
			$("#res").html("<p style='font: 20px Tahoma; color: #4f7942;'> Правильно!</p>");
		} else {
			$("#res").html("<p style='font: 20px Tahoma; color: #f00;'> Неправильно!</p>");
		}
	}
	
});