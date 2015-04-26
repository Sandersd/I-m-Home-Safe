Homies = new Mongo.Collection('homies');


if (Meteor.isServer) {
  Homies.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return false;
    }
  });


}
