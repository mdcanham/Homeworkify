var restful = require('node-restful');

module.exports = function(app, route) {
  //Set up the controller for REST
  var rest = restful.model('homework', app.models.homework).methods(['get', 'put', 'post', 'delete']);

  //Register this endpoint with the application
  rest.register(app, route);

  //Return middleware
  return function(req, res, next) {
    next();
  };

};
