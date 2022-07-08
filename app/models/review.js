import DS from 'ember-data';

export default DS.Model.extend({
  dateOfReview: DS.attr('date-string'),
  markBook: DS.attr('number'),
  presentationURL: DS.attr('string'),
  videoURL: DS.attr('string'),
  report: DS.attr('string'),

  book: DS.belongsTo('book'),
  speaker: DS.belongsTo('speaker'),
  meeting: DS.belongsTo('meeting'),
});
