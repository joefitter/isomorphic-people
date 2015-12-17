Router.configure({
  layoutTemplate: 'main'
})

Router.route('/', {
  template: 'users'
});

Router.route('/register', {
  name: 'register',
  template: 'register'
});

Router.route('/login', {
  name: 'login',
  template: 'login'
});

Router.route('/users', {
  name: 'users',
  template: 'users'
});

Router.route('/user/:_id', {
  name: 'user',
  template: 'userDashboard',
  data: function() {
    return Users.findOne(this.params._id);
  }
});
