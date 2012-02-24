warningPlacement = $('.ktWarningOn, .ktWarningOff').tooltip(
	'placement' : 'bottom'
)

iconChange = $('#liAssignedSIC').hover(()->
	$('.sicCodeWarning').addClass('ktWarningOn')
	$('.sicCodeWarning').removeClass('ktWarningOff')
)