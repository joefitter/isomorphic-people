var UP_ARROW = 'glyphicon glyphicon-triangle-top';
var DOWN_ARROW = 'glyphicon glyphicon-triangle-bottom';

Session.set('sortField', 'name');
Session.set('sortOrder', 1);

if (Meteor.isClient) {
  Template.users.helpers({
    users: function() {
      var sort = {};
      sort[Session.get('sortField')] = Session.get('sortOrder');
      return Users.find({}, {
        sort: sort
      });
    }
  });

  Template.users.events({
    'click th a': function(event, template) {
      event.preventDefault();
      var $el = $(event.target).parents('th');
      var field = $el.attr('data-field');
      var dir;

      template.$('th i').removeClass();

      if (Session.get('sortField') === field) {
        Session.set('sortOrder', 0 - Session.get('sortOrder'));
      } else {
        Session.set('sortOrder', 1);
      }

      Session.set('sortField', field);

      dir = Session.get('sortOrder') === 1 ? DOWN_ARROW : UP_ARROW;

      $(event.target).find('i').addClass(dir);
    }
  })
}
