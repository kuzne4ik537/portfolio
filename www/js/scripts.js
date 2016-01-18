
$(document).ready(function () {
	/*---------Menu buuton-----------------*/
	console.log($(window).width());
	if($(window).width()>768){
		var counter =1;
		$(window).scroll(function() {
	  		if ($(document).scrollTop() > 50) {
	    		$('header').addClass('shrink');
	 		}else {
	    	$('header').removeClass('shrink');
	  		}
		});
		$(".menu").on("click" , function  () {
			if(counter %2 !== 0){
				$("header").removeClass('shrink');
				$(".menu").addClass('menu_visible');
			};
			if(counter %2 === 0){
				$("header").addClass('shrink');
				$(".menu").removeClass('menu_visible');
			};
			counter++;
			console.log(counter);
		});
	};

	/*---------- activate jquery isotope --------------*/
	var $container = $('#posts').isotope({
	itemSelector : '.item',
	isFitWidth: true
	});

	$(window).smartresize(function(){
	$container.isotope({
	  columnWidth: '.col-sm-3'
	});
	});

	$container.isotope({ filter: '*' });

	// filter items on button click
	$('#filters').on( 'click', 'li', function() {
	var filterValue = $(this).attr('data-filter');
	$container.isotope({ filter: filterValue });
	});
});


