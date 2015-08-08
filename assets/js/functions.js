 $(document).ready(function() {
  var menuToggle = $('#js-mobile-menu').unbind();
  $('#js-navigation-menu').removeClass("show");

  menuToggle.on('click', function(e) {
    e.preventDefault();
    $('#js-navigation-menu').slideToggle(function(){
      if($('#js-navigation-menu').is(':hidden')) {
        $('#js-navigation-menu').removeAttr('style');
      }
    });
  });

/*$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
$('.sliding-panel-button1,.sliding-panel-fade-screen1,.sliding-panel-close1').on('click',function (e) {
    $('.sliding-panel-content1').toggleClass('is-visible');
    $('.sliding-panel-fade-screen1').toggleClass('is-visible');
    e.preventDefault();
  });*/




/*  var isClicked = true;

$('#js-mobile-menu').on('click', function(){
  if(isClicked){
    $(this).css('background', '');
    $(this).addClass('js-mobile-menu-clicked');
    isClicked = false;
    }else{
      $(this).removeClass('js-mobile-menu-clicked');
      $(this).css('ackground', 'url(http://imgh.us/1438443780_menu-alt.svg) no-repeat');
      isClicked = true;
      }
  });*/

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".c-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }
})();


var fade = function(){$(this).closest(this).find('text').fadeToggle('fast');};

    $('li').on('mouseenter', fade);
    $('li').on('mouseleave', fade);
/*$( document ).ajaxStart(function() {
  
});*/

$('.ajax').on('click', function(){
    $.ajax('ajax.html', {
      success: function (response){
          $('.ajax').html(response).slideDown();
          //$('.isLoading').hide();
          $('.ajax').css('padding', '0');
      }, 
      error: function(request,errorType,errorMessage){console.log('Error: ' + errorType + ' with message: ' + errorMessage);},
      timeout: 5000,
      beforeSend: function(){$('.isLoading').slideDown('fast');},
      complete: function(){$('.isLoading').hide();}
    });
  });

var par = function(){$('li').find('#p').animate({'margin-left': '50px'});};

    $('.page-header, section').on('touchstart', par);
    $('.page-header, section').on('mouseenter', par);

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 550);
        return false;
      }
    }
  });
});

});

