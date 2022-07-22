import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr(),
  passwordConfirmation: DS.attr(),

  reviews: DS.hasMany('review'),
  books: DS.hasMany('book'),
  speakers: DS.hasMany('speaker'),
  meetings: DS.hasMany('meeting'),
});
