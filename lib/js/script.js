$(document).ready(function () {
    
    $('#welcome').mouseenter(function () {
        $('.title').addClass('animated rubberBand');  
    });
    
    $('#services').mouseenter(function() {
        $('.title1').addClass('animated rubberBand');
    });
    
    
    $('.cake-smash').hover(function(){
	   $(this).find('p').slideDown();
    }).mouseleave(function(){
	   $(this).find('p').slideUp();
    });
    
    $('.pets').hover(function(){
	   $(this).find('p').slideDown();
    }).mouseleave(function(){
	   $(this).find('p').slideUp();
    });
    
    $('.portraits').hover(function(){
	   $(this).find('p').slideDown();
    }).mouseleave(function(){
	   $(this).find('p').slideUp();
    });
    
    $('.newborn').hover(function(){
	   $(this).find('p').slideDown();
    }).mouseleave(function(){
	   $(this).find('p').slideUp();
    });
    
});