Template.user.events({
  'click .delete': function() {
    Users.remove(this._id)
  },
  'click tr': function() {
    Router.go('/user/' + this._id);
  }
});
