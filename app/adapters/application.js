import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://hacker-news.firebaseio.com/v0/'
});
