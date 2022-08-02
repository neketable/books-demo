import Component from '@ember/component';
import fetch from 'fetch';
import ENV from 'books-demo/config/environment';
import { validator, buildValidations } from 'ember-cp-validations';
import { get, set } from '@ember/object';
import { inject as service } from '@ember/service';

const Validations = buildValidations({
  email: [
    validator('ds-error'),
    validator('presence', true),
    validator('format', {
      type: 'email',
    })
  ],
  password: [
    validator('ds-error'),
    validator('presence', true),
  ]
});

export default Component.extend(Validations, {
  errorService: service(),
  iAmRobot: true,
  reset: false,

  actions: {
    async saveUser(e) {
      try{
        e.preventDefault();
        set(this, 'isInvalid', !this.get('validations.isValid'));
        if (!get(this, 'isInvalid')) {
          this.get('onSubmit')({
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation
          });
        }
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        errorModel.save();
      }
    },
    async verified(key) {
      try {
        const { success } = await (await fetch(`${ENV.backendURL}/recaptcha?key=${key}`)).json();

        this.set('iAmRobot', !success);
      } catch (error) {
        this.set('reset', true);
      }
    },

    expired() {
      this.set('iAmRobot', true);
    }
  },

  didReceiveAttrs() {
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password'),
      passwordConfirmation: this.get('user.passwordConfirmation'),
    });
  }
});
