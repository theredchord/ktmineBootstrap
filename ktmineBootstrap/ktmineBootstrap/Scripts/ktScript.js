
/*

Navbar functions
*/


(function() {
  var iconChange, infoBoxClose, infoBoxExpand, navScroll;

  navScroll = $(window).scroll(function() {
    var scrollPosition;
    scrollPosition = $(this).scrollTop();
    if (scrollPosition > 120) {
      return $('#ktNavbar').css({
        'position': 'fixed',
        'top': 0,
        'left': 0,
        'right': 0
      });
    } else {
      return $('#ktNavbar').css({
        'position': 'static'
      });
    }
  });

  /*
  
  Tooltip functions
  */


  $('.ktWarningOn, .ktWarningOff').tooltip({
    placement: 'bottom'
  });

  iconChange = $('#liAssignedSIC').hover(function() {
    $('.sicCodeWarning').addClass('ktWarningOn');
    return $('.sicCodeWarning').removeClass('ktWarningOff');
  });

  /*
  
  InfoBox functions
  */


  $('.infoBox').on('hover', function() {
    var actions;
    actions = $(this).find('.infoActionList');
    return $(actions).toggleClass('hide');
  });

  infoBoxClose = function() {
    var buttonVal;
    $('.infoBoxBody').animate({
      height: 'toggle'
    }, 200);
    buttonVal = $('.infoBoxClose').val();
    if (buttonVal === 'Close') {
      return $('.infoBoxClose').val('Open');
    } else {
      return $('.infoBoxClose').val('Close');
    }
  };

  $('.infoBoxTitle').on('click', function() {
    return infoBoxClose();
  });

  infoBoxExpand = function() {
    return $('.collapse').collapse('show');
  };

  $('.infoBoxExpand').on('click', function(event) {
    var buttonVal;
    event.stopPropagation();
    buttonVal = $('.infoBoxClose').val();
    if (buttonVal === 'Open') {
      infoBoxClose();
    }
    return infoBoxExpand();
  });

}).call(this);
