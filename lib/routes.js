Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('donated', {
  name: 'donated',
  controller: 'DonatedController',
  action: 'don',
  where: 'client'
});

if(Meteor.isServer) {

    Router.map(function () {
        this.route('status', {
            where: 'server',
            action: function () {
                Homies.update({_id:'v8jnYizF8hgGk9Mbp'}, {$set: {state: 'home'}});
                //console.log(this.request.query.status);
                if(this.request.query.status){

                    Meteor.call('sendMsg');

                }

            }
        });
    });
}



Router.route('dond', {
  name: 'dond',
  controller: 'DondController',
  action: 'acon',
  where: 'client'
});



Router.route('checkout', {
  name: 'checkout',
  controller: 'CheckoutController',
  action: 'action',
  where: 'client'
});