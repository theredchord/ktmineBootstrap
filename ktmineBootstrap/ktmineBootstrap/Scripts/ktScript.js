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
    return $('.infoBoxBody').animate({
      height: 'toggle'
    }, 200);
  });

}).call(this);
