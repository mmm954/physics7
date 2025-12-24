$(document).ready(function(){
	var genFlag = true;
	$("#cool").hide();
	
	qArr = $("#ques").html(); 
	aArr = $("#answ").html();
	ed = $("#ed").html();
	hh = $("#hint").html();

	$('<div id="1" class="question">'+qArr+'</div><input type="text" class="tInp" /><div id="1" class="answer">'+ed+'</div><br /><div id="but1" class="button">Ответить</div><div id="but2" class="button">Подсказка</div><div id="res" class="results"></div><div id="h" class="res" style="clear: both; margin-top: 60px; width: 300px; "></div>').appendTo("#body");
	

$("#but1").click(checkA);
$("#but2").click(hinT);
	function checkA() {
		if($("input").val()==aArr) {
			$("#res").html("<p style='font: 20px Tahoma; color: #4f7942;'> Правильно!</p>");
		} else {
			$("#res").html("<p style='font: 20px Tahoma; color: #f00;'> Неправильно!</p>");
		}
	}
	function hinT() {
		$("#h").html("<p style='font: 16px Tahoma;'>"+hh+"</p>");
}
});