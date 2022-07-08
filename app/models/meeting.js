import DS from 'ember-data';

export default DS.Model.extend({
  dateOfMeeting: DS.attr('date-string'),

  reviews: DS.hasMany('review'),
  user: DS.belongsTo('user')
});
