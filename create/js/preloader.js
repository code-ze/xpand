 
     
    
    $(window).on('load', function() { // makes sure the whole site is loaded
        $("navbar").hide(); 
        $('#status').fadeOut(); // will first fade out the loading animation 
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
        $('body').delay(350).css({'overflow':'visible'});
        
      })
      $(document).ready(function() {
        $("navbar").show(); 
      })


      //show content on scroll

      $(document).ready(function() {
        $(window).scroll( function(){
            $('.fadein-vid').each( function(i){
                
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                
                if( bottom_of_window > bottom_of_element ){
                    $(this).animate({
                        'opacity':'1'},500);
                }
                
            }); 
        });
    });

    var figure = $(".video").hover( hoverVideo, hideVideo );

    function hoverVideo(e) {  
        $('video', this).get(0).play(); 
        $("#vid-txt").hover(function(){
            $("h1").show();
          });
    }
    
    function hideVideo(e) {
        $('video', this).get(0).pause(); 
    }

 //comprises video preload for IOS
 $('video').each(function () {
    this.preload = 'metadata';
    this.load();
  });