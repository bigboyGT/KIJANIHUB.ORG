
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'https://images.pexels.com/photos/2317904/pexels-photo-2317904.jpeg' },
              { src: 'https://www.treehugger.com/thmb/sfXYAnDdo5jb5ShROj5uWTZz1T8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1084272706-67e82d99d00447dd9cd0567739e51e18.jpg' },
              { src: 'images/team/Grevys-zebra.jpg' }
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


