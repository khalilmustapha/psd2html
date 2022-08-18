$(document).ready (function() {
 
    $(".toggle-button").click(function(){
        $(".nav").toggleClass("open")
    });
    
    $(".nav-link").click(function(){
        $(".nav-link").removeClass('active');
        $(this).addClass('active');
    })
});