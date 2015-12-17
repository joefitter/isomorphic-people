var _this = this;

function updateData(response) {
  var user = Users.findOne(_this._id);

  if (this.avatar_url !== response.avatar_url) {
    Users.update(_this._id, {
      $set: {
        avatar_url: response.avatar_url
      }
    });
  }

  if (this.public_repos !== response.public_repos) {
    Users.update(_this._id, {
      $set: {
        public_repos: response.public_repos
      }
    });
  }

  if (this.ghName !== response.name) {
    Users.update(_this._id, {
      $set: {
        ghName: response.name
      }
    });
  }
}

fetch('https://api.github.com/users/' + this.ghUser)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    updateData(json);
  }).catch(function(err) {
    console.log(err);
  });
