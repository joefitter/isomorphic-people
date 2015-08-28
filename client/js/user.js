Template.user.events({
  'click tr': function() {
    Router.go('/user/' + this._id);
  },
  'click .delete': function() {
    Users.remove(this._id)
  }
});
