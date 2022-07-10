import DS from 'ember-data';
import { computed } from '@ember/object';
// import { validator, buildValidations } from 'ember-cp-validations';

// const Validations = buildValidations({
//   firstName: [
//     validator('ds-error'),
//     validator('presence', true),
//   ],
//   lastName: [
//     validator('ds-error'),
//     validator('presence', true),
//   ],
//   patronymic: [
//     validator('ds-error'),
//     validator('presence', true),
//   ],
// });

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  patronymic: DS.attr('string'),

  reviews: DS.hasMany('review'),
  user: DS.belongsTo('user'),

  fullName: computed('firstName', 'lastName', function() {
    return `${this.get('firstName')} ${this.get('lastName')}`;
  }),
});
