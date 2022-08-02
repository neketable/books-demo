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
  errorService: service(),
  currentUser: service(),
  i18n: service(),
  isInvalid: false,
  //isCreating: false,
  actions: {
    submitForm(e) {
      try{
        e.preventDefault();
        set(this, 'isInvalid', !this.get('validations.isValid'));
        if (!get(this, 'isInvalid')) {
          this.onsubmit({
            id: this.get('idMeeting'),
            dateOfMeeting: this.get('dateOfMeeting'),
            user: this.get('currentUser.user'),
            //reviews: this.get('reviews')
          })
        }
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
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
      //reviews: this.get('meeting.reviews') ? this.get('meeting.reviews') : undefined
    })
  }
});
