/*
 * Disable Scroll for googlemaps
*/

$(document).ready(function () {
    $('#map').addClass('scrolloff');                // set the mouse events to none when doc is ready

    $('#overlay').on("mouseup",function(){          // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown",function(){        // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () {              // becuase the mouse up doesn't work...
        $('#map').addClass('scrolloff');            // set the pointer events to none when mouse leaves the map area
                                                    // or you can do it on some other event
    });

});

/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid');
	}
	else{
		$('#site-nav').removeClass('navbar-solid');
	}
}

/*
 * SmoothScroll
*/

smoothScroll.init();

/*
 * Colapse menu on click
*/

$(document).ready(function(){
    $(".navbar-collapse li").on("click", function(){
        $(".navbar-collapse").collapse("hide");
    });
});
