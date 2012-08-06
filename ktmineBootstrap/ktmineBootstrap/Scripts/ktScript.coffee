###

Navbar functions

###

navScroll = $(window).scroll(()->
	scrollPosition = $(this).scrollTop()
	
	if (scrollPosition > 120)
		$('#ktNavbar').css(
			'position' : 'fixed',
			'top' : 0,
			'left' : 0,
			'right' : 0
		)
	else
		$('#ktNavbar').css(
			'position' : 'static',
		)
)

###

Tooltip functions

###

$('.ktWarningOn, .ktWarningOff').tooltip(
	placement : 'bottom'
)

iconChange = $('#liAssignedSIC').hover(()->
	$('.sicCodeWarning').addClass('ktWarningOn')
	$('.sicCodeWarning').removeClass('ktWarningOff')
)

###

InfoBox functions

###

#Shows Action links when user hovers over infobox
$('.infoBox').on('hover', ()->
	actions = $(this).find('.infoActionList')
	$(actions).toggleClass('hide')
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

#Click event for expansion of all sections
$('.infoBoxExpand').on('click', (event)->
	event.stopPropagation()
	buttonVal = $('.infoBoxClose').val()
	if (buttonVal is 'Open')
		infoBoxClose()
	infoBoxExpand()
)