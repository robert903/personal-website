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
$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click',function (e) {
    $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    e.preventDefault();
  });
$('.sliding-panel-button1,.sliding-panel-fade-screen1,.sliding-panel-close1').on('click',function (e) {
    $('.sliding-panel-content1').toggleClass('is-visible');
    $('.sliding-panel-fade-screen1').toggleClass('is-visible');
    e.preventDefault();
  });


  var element = document.getElementById("js-fadeInElement");
  $(element).addClass('js-fade-element-hide');

  $(window).scroll(function() {
    if( $("#js-fadeInElement").length > 0 ) {
      var elementTopToPageTop = $(element).offset().top;
      var windowTopToPageTop = $(window).scrollTop();
      var windowInnerHeight = window.innerHeight;
      var elementTopToWindowTop = elementTopToPageTop - windowTopToPageTop;
      var elementTopToWindowBottom = windowInnerHeight - elementTopToWindowTop;
      var distanceFromBottomToAppear = 300;

      if(elementTopToWindowBottom > distanceFromBottomToAppear) {
        $(element).addClass('js-fade-element-show');
      }
      else if(elementTopToWindowBottom < 0) {
        $(element).removeClass('js-fade-element-show');
        $(element).addClass('js-fade-element-hide');
      }
    }
  });

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
});

