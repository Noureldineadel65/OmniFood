$(document).ready(function() {
	$(".js--section-feature").waypoint(
		function(d) {
			// ok
			if (d == "down") {
				$("nav").addClass("sticky");
			} else {
				$("nav").removeClass("sticky");
			}
		},
		{
			offset: "60px;"
		}
	);
	$(".js--scroll-to-plans").click(function() {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-plans").offset().top
			},
			1000
		);
	});
	$(".js--scroll-to-start").click(function() {
		$("html, body").animate(
			{
				scrollTop: $(".js--section-feature").offset().top
			},
			1000
		);
	});
	// navi
	$("a").on("click", function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top
				},
				1000,
				function() {
					window.location.hash = hash;
				}
			);
		}
	});
	//nav
	$(".js--nav-icon").click(function(evnt) {
		evnt.preventDefault();
		var nav = $(".js--main-nav");
		nav.slideToggle(200);
		if ($(".js--nav-icon ion-icon").attr("name") == "menu") {
			$(".js--nav-icon ion-icon").attr("name", "close");
		} else {
			$(".js--nav-icon ion-icon").attr("name", "menu");
		}
	});
});
