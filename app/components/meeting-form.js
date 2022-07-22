import Component from '@ember/component';
import { get, set } from '@ember/object';
import { validator, buildValidations } from 'ember-cp-validations';
import { inject as service } from '@ember/service';

const Validations = buildValidations({
  dateOfMeeting: [
    validator('ds-error'),
    validator('presence', true),
    validator('date')
  ]
});

export default Component.extend(Validations, {
  currentUser: service(),
  i18n: service(),
  isInvalid: false,
  actions: {
    submitForm(e) {
      e.preventDefault();
      set(this, 'isInvalid', !this.get('validations.isValid'));
      if (!get(this, 'isInvalid')) {
      this.onsubmit({
        id: this.get('idMeeting'),
        dateOfMeeting: this.get('dateOfMeeting'),
        reviews: this.get('reviews'),
        user: this.get('currentUser.user'),
      })
    }
    },
    async deleteReview(review) {
      await review.destroyRecord();
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
      dateOfMeeting: this.get('meeting.dateOfMeeting'),
      reviews: this.get('meeting.reviews')
    })
  }
});
