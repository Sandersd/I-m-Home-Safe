/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    
    'click button#make': function () {
        window.location.replace("https://v3-sandbox.justgiving.com/4w350m3/donation/direct/charity/1104MessageAndAmount?amount=2");
    }


});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.created = function () {
};

Template.Home.rendered = function () {
	$( "#addNew" ).click(function() {
	 	$( "#overlay1" ).toggleClass( "displayNone" );
	});

	$( "#continue" ).click(function() {
	 	$( "#overlay1" ).toggleClass( "displayNone" );
	 	$( "#overlay2" ).toggleClass( "displayNone" );
	});

	$( "#make" ).click(function() {
	 	$( "#overlay2" ).toggleClass( "displayNone" );	
	 	$( "#overlay3" ).toggleClass( "displayNone" );
	});

	$( "#finish" ).click(function() {
	 	$( "#overlay3" ).toggleClass( "displayNone" );
	 	$("#contacts").prepend("<div class='contactCard'><img src='img/d.png'/> <p class='name1'>Dad</p><p class='number1'>+447707019489</p></div>");  
	});

	$( ".cancel" ).click(function() {
	 	$( "#overlay1" ).toggleClass( "displayNone" );
	});

	$( ".cancel2" ).click(function() {
	 	$( "#overlay2" ).toggleClass( "displayNone" );
	});

	$( ".cancel3" ).click(function() {
	 	$( "#overlay3" ).toggleClass( "displayNone" );
	});
};

Template.Home.destroyed = function () {
};
