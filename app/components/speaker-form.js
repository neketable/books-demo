import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { validator, buildValidations } from 'ember-cp-validations';
import { get, set } from '@ember/object';
// import { translationMacro as t } from "ember-i18n";
// import { computed } from '@ember/object';

const Validations = buildValidations({
  firstName: [
    validator('ds-error'),
    validator('presence', {
      presence: true,
      // message: computed('model.firstName', 'model.i18n.locale', function () {
      //   return this.get(this, 'model.i18n').t('errors.aaa')
      // }),
    }),
  ],
  lastName: [
    validator('ds-error'),
    validator('presence', true),
  ],
  patronymic: [
    validator('ds-error'),
    validator('presence', true),
  ],
});

export default Component.extend(Validations, {
  errorService: service(),
  currentUser: service(),
  i18n: service(),
  isInvalid: false,

  actions: {
    submitForm(e) {
      try{
        e.preventDefault();
        set(this, 'isInvalid', !this.get('validations.isValid'));
          if (!get(this, 'isInvalid')) {
            this.onsubmit({
            id: this.get('idAuthor'),
            firstName: this.get('firstName'),
            lastName: this.get('lastName'),
            patronymic: this.get('patronymic'),
            user: this.get('currentUser.user')
          })
        }
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idAuthor: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic'),
    })
  }
});
