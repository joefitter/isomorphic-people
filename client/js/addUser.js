// Template.addUser.events({
//   'submit .addUser': function(e) {
//     e.preventDefault();
//     var form = e.target;
//     var nameField = form.elements['name'];
//     var ghUserField = form.elements['ghUser'];

//     getAvatarUrl(nameField, ghUserField);

//   }
// });

// function getAvatarUrl(nameField, ghUserField) {
//   fetch('https://api.github.com/users/' + ghUserField.value)
//     .then(function(response) {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Meteor.Error('no-user', 'user not found');
//       }
//     }).then(function(json) {
//       console.log(json);
//       if (json) {
//         addUser(nameField, ghUserField, json);
//       }
//     }).catch(function(err) {
//       throw new Meteor.Error('error-parsing', 'cannot parse JSON');
//     });
// }

// function addUser(nameField, ghUserField, response) {
//   var username = ghUserField.value;

//   if (Users.findOne({ghUser: username})) {
//     throw new Meteor.Error('duplicate', 'GitHub usename must be unique');
//   }

//   Users.insert({
//     name: nameField.value,
//     ghUser: ghUserField.value,
//     ghName: response.name,
//     avatar_url: response.avatar_url,
//     public_repos: response.public_repos
//   });

//   nameField.value = '';
//   ghUserField.value = '';
// }
