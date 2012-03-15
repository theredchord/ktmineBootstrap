$('.ktWarningOn, .ktWarningOff').tooltip(
	placement : 'bottom'
)

iconChange = $('#liAssignedSIC').hover(()->
	$('.sicCodeWarning').addClass('ktWarningOn')
	$('.sicCodeWarning').removeClass('ktWarningOff')
)

#Opens and closes the body of an infobox
infoBoxClose = ()->
	$('.infoBoxBody').animate(
		height: 'toggle'
	, 200)
	buttonVal = $('.infoBoxClose').val()
	if (buttonVal is 'Close')
		$('.infoBoxClose').val('Open')
	else $('.infoBoxClose').val('Close')

#Click event for infobox
$('.infoBoxTitle').on('click', ()->
	infoBoxClose()
)

#Expands all sections of a content box
infoBoxExpand = ()->
	$('.collapse').collapse('show')
	buttonVal = $('.infoBoxExpand').val()

#Click event for expansion of all sections
$('.infoBoxExpand').on('click', (event)->
	event.stopPropagation()
	buttonVal = $('.infoBoxClose').val()
	if (buttonVal is 'Open')
		infoBoxClose()
	infoBoxExpand()
)