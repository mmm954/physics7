$(document).ready(function(){
	
	var genFlag = true;
	$("#cool").hide();
	
	qArr = $("#ques").html(); 
	aArr = $("#answ").html();
	ed = $("#ed").html();

	$('<div class="outer"><div class="container">'+qArr+'<input type="text" class="tInp" /><div id="1" class="answer">'+ed+'</div><br /><div id="but1" class="button">Ответить</div></div><div id="panel">'+aArr+'</div><p class="slide"><a href="#" class="btn-slide">Подсказка</a></p></div>').appendTo("#body");
	



$("#but1").click(checkA);
	function checkA() {
		if($("input").val()==aArr) {
			$("#res").html("<p style='font: 20px Tahoma; color: #4f7942;'> Правильно!</p>");
		} else {
			$("#res").html("<p style='font: 20px Tahoma; color: #f00;'> Неправильно!</p>");
		}
	}


	$(".btn-slide").click(function(){
		$("#panel").slideToggle("slow");
		$(this).toggleClass("active"); return false;
	});
});