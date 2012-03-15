(function() {
  var iconChange, infoBoxClose, warningPlacement;

  warningPlacement = $('.ktWarningOn, .ktWarningOff').tooltip({
    'placement': 'bottom'
  });

  iconChange = $('#liAssignedSIC').hover(function() {
    $('.sicCodeWarning').addClass('ktWarningOn');
    return $('.sicCodeWarning').removeClass('ktWarningOff');
  });

  infoBoxClose = $('.infoBoxClose').click(function() {
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
  });

}).call(this);
