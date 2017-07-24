myApp.controller('MessageController', ['$http', function($http) {
var mm = this;
mm.newMessage = {};
console.log(this);

// get the msgs from the server and fill the DOM
getMessage();
// DOES NOT WORK
mm.addMessage = function() {
  console.log('add message', mm.newMessage);
  $http.post('/message', mm.newMessage)
    .then(function(response) {
      console.log('added message', response);
      getMessage();
    });
};
function getMessage() {
  $http.get('/message').then(function(response) {
    console.log(response.data);
    mm.messages = response.data;
  });
}

}]);
