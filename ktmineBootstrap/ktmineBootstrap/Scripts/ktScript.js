(function() {
  var iconChange, infoBoxClose, infoBoxExpand;

  $('.ktWarningOn, .ktWarningOff').tooltip({
    placement: 'bottom'
  });

  iconChange = $('#liAssignedSIC').hover(function() {
    $('.sicCodeWarning').addClass('ktWarningOn');
    return $('.sicCodeWarning').removeClass('ktWarningOff');
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
    var buttonVal;
    $('.collapse').collapse('show');
    return buttonVal = $('.infoBoxExpand').val();
  };

  $('.infoBoxExpand').on('click', function(event) {
    var buttonVal;
    event.stopPropagation();
    buttonVal = $('.infoBoxClose').val();
    if (buttonVal === 'Open') infoBoxClose();
    return infoBoxExpand();
  });

}).call(this);
