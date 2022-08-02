import DS from 'ember-data';

export default DS.Model.extend({
  dateOfError: DS.attr(''),
  errorIP: DS.attr('string'),
  errorURL: DS.attr('string'),
  errorText: DS.attr('string'),
});
