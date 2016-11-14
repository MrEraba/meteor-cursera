import { Mongo } from 'meteor/mongo';

export const Images = new Mongo.Collection("images");

Images.allow({
  insert: function(userId, doc) {

    if (Meteor.user()) {  // they are logged in
        // force the image to be owned by the user
        if (userId != doc.createdBy) { // the user is messing about
          return false
        }
        else { // the user is logged in, the image has the correct user
          return true;
        }
    }
    else { // user not logged
      return false;
    }
  },
  remove: function(userId, doc) {
    return true;
  }
});
