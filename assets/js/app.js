$(function () {
   var $windowEl = $(window),
   $documentEl = $(document);
   /*for fixed header*/
   var fixedHeader = function(){
      
      $body = $(document.body),
      $navWrap = $('#nav'),
      contentOffset = $navWrap.outerHeight();
      
      

   $windowEl.scroll(function () {

      var scrollPos = $windowEl.scrollTop();


      if (scrollPos > contentOffset) {
         $body.css("padding-top", contentOffset)
         $navWrap.addClass('fixed-top')
        
      } else {
         $body.css("padding-top", '0')
         $navWrap.removeClass('fixed-top')
         
      }

   });
   }
   fixedHeader()
   $(window).on('resize', fixedHeader);

   //for top slider
   $('.fitness-slider').slick({
      "slidesToShow": 1,
      "slidesToScroll": 1
   })

   //for partners slider
   $('.partners-slider').slick({
      "slidesToShow": 1,
      "slidesToScroll": 1,
      "mobileFirst": true,
      responsive: [
         {
            breakpoint: 576,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5
            }
          }
      ]
   })

     //for nav-link click navbar collapse on mobile view
     $(".nav-link").on("click", function () {
      $("#navbarSupportedContent").collapse("hide")
  })

  //Main navigation scroll spy 
  /* function scrollSpy() {

      var scrollPos = $documentEl.scrollTop() + 80;

      $('.nav-link').each(function (index) {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && (refElement.position().top + refElement.height() > scrollPos)) {
              $('.nav-item').removeClass("active");
              currLink.parent().addClass("active");
          }
          else {
              currLink.parent().removeClass("active");
          }
      });
  }

  $windowEl.scroll(scrollSpy); */

  //back to top scroll
         var offset = 220;
			var duration = 500;
			jQuery(window).scroll(function () {
				if (jQuery(this).scrollTop() > offset) {
					jQuery('.back-to-top').fadeIn(duration);
				} else {
					jQuery('.back-to-top').fadeOut(duration);
				}
			});
			jQuery('.back-to-top').click(function (event) {
				event.preventDefault();
				jQuery('html, body').animate({
					scrollTop: 0
				}, duration);
				return false;
			})
   
})//End of document ready



