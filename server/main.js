import { Meteor } from 'meteor/meteor';
import '../lib/collections.js';
import { Images } from '../lib/collections.js';

Meteor.startup(() => {
  // code to run on server at startup
  // if (Images.find().count() == 0) {
  //     Images.insert({
  //       img_src : "images/bass.jpg",
  //       img_alt : "image bass"
  //     });
  //     Images.insert({
  //       img_src : "images/beard.jpg",
  //       img_alt : "image beard"
  //     });
  //     Images.insert({
  //       img_src : "images/laptops.jpg",
  //       img_alt : "image laptops"
  //     });
  //     for (var i=1; i<=22 ; i++){
  //       Images.insert({
  //         img_src : "images/img_"+ i + ".jpg",
  //         img_alt : "image number "+i
  //       }); // end of images insert
  //     } // end for for i <= 3
  // console.log("main.js says " + Images.find().count());
  // } // end for if images.find
});
