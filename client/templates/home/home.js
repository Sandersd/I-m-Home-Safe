/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    



});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    
    pic: function () {
        state = Homies.findOne();
        if(state.state === 'home') {
            return 'img/home-safe.png';
        } else return 'img/out-and-about.png';
    }
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


        $("#overlay2").toggleClass("displayNone");
        $("#overlay3").toggleClass("displayNone");



	});





    $("#finish").click(function () {
        $("#overlay3").delay(800).toggleClass("displayNone");
        $("#contacts").delay(800).prepend("<div class='contactCard'><img src='img/d.png'/> <p class='name1'>Dad</p><p class='number1'>+447707019489</p></div>");
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
