$(document).ready(function () {
	$(".menu a i").click(function () {
		$(".menu a i.active").removeClass("active");
		$(this).addClass("active");
			return true;
	});

	// $("#home").click(function(){
	// 	$(this).attr('src','images/home_blue.svg');
	// });

	// $("#skills").click(function(){
	// 	$(this).attr('src','images/skills_blue.svg');
	// });

	// $("#portfolio").click(function(){
	// 	$(this).attr('src','images/portfolio_blue.svg');
	// });

});