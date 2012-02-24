(function() {
  var iconChange, warningPlacement;

  warningPlacement = $('.ktWarningOn, .ktWarningOff').tooltip({
    'placement': 'bottom'
  });

  iconChange = $('#liAssignedSIC').hover(function() {
    $('.sicCodeWarning').addClass('ktWarningOn');
    return $('.sicCodeWarning').removeClass('ktWarningOff');
  });

}).call(this);
