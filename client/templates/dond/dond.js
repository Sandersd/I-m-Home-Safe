/*****************************************************************************/
/* Dond: Event Handlers */
/*****************************************************************************/
Template.Dond.events({
});

/*****************************************************************************/
/* Dond: Helpers */
/*****************************************************************************/
Template.Dond.helpers({

    pic: function () {
        state = Homies.findOne();
        if(state.state === 'home') {
            return 'img/home-safe.png';
        } else return 'img/out-and-about.png';
    }
});

/*****************************************************************************/
/* Dond: Lifecycle Hooks */
/*****************************************************************************/
Template.Dond.created = function () {
};

Template.Dond.rendered = function () {
};

Template.Dond.destroyed = function () {
};
