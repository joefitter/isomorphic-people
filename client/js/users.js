// Template.users.helpers({
//   users: function() {
//     return Users.find({}, {
//       sort: {
//         name: 1
//       }
//     });
//   }
// });


if (Meteor.isClient) {
  Template.users.helpers({
    users: function() {
      console.log(Meteor.users.find({}))
      return Meteor.users.find({});
    }
  });
}
