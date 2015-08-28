// var _this = this;

// function updateData(response) {
//   var user = Users.findOne(_this._id);

//   if (this.avatar_url !== response.avatar_url) {
//     Users.update(_this._id, {
//       $set: {
//         avatar_url: response.avatar_url
//       }
//     })
//   }
// }

// fetch('https://api.github.com/users/' + this.ghUser)
//   .then(function(response) {
//     return response.json();
//   }).then(function(json) {
//     console.log(json)
//     updateData(json);
//   }).catch(function(err) {
//     console.log(err);
//   });
