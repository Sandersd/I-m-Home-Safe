Template.MasterLayout.helpers({
});

Template.MasterLayout.events({

    'click button.btn': function () {

        Meteor.call('sendMsg');
        console.log("sending");

    }
});
