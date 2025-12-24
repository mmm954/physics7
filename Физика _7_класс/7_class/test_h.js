$(document).ready(function(){
	var genFlag = true;
	$("#cool").hide();
	
	qArr = $("#ques").html(); 
	aArr = $("#answ").html();
	ed = $("#ed").html();
	hh = $("#hint").html();

	$('<div class="outer"><div class="container"><p class="main">'+qArr+'</p><input type="text" class="tInp" /><div id="1" class="answer">'+ed+'</div><br /><div id="but1" class="button"></div><div id="res"></div></div><div id="panel">'+hh+'</div><p class="slide"><a href="#" class="btn-slide">Подсказка</a></p></div>').appendTo("#body");
	

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
};

	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});


});