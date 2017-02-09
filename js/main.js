(function ($) {
	"use strict";

	jQuery(document).ready(function($){


		$(".embed-responsive iframe").addClass("embed-responsive-item");
		$(".carousel-inner .item:first-child").addClass("active");

		$('[data-toggle="tooltip"]').tooltip();


        //bootstrap scroll spy

        $('body').scrollspy({
        	target: '.navbar-collapse',
        });
        


    });


	jQuery(window).load(function(){


	});


}(jQuery));	