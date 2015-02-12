App.Project = DS.Model.extend({
  name: DS.attr('string'),
  image: DS.attr('string')
})

App.Project.FIXTURES = [
  {id: 1, name: 'gCamp', image:'http://www.marcodinieri.it/wp-content/uploads/2013/06/DI-NIERI-COD-6598.jpg'},
  {id: 2, name: 'trip_tracker', image: 'http://www.freeimages.com/assets/183014/1830130202/pomegranate-1445667-m.jpg'},
  {id: 3, name: 'muse', image: 'http://www.freeimages.com/assets/183232/1832313197/rose-1445880-5-m.jpg'},
  {id: 4, name: 'zesty_foods', image: 'http://www.freeimages.com/assets/183232/1832313197/rose-1445877-2-m.jpg'},
  {id: 5, name: 'famo_us', image: 'http://www.freeimages.com/assets/183292/1832918153/sunset-at-vambira-1445848-m.jpg'}
]
