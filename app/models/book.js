import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  bookURL: DS.attr('string'),
  tags: DS.attr(),
  coverURL: DS.attr(),

  reviews: DS.hasMany('review'),
  user: DS.belongsTo('user')
});
