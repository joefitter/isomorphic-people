Template.users.helpers({
  users: function() {
    return Users.find({}, {
      sort: {
        name: 1
      }
    });
  }
});
