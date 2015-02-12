App.Router.map(function() {
  // put your routes here
  this.route('portfolio');
  this.route('resume');
  this.resource('projects', function() {
    this.route('show', {path: '/:project_id'});
  });
});
