import Component from '@ember/component';
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
  actions: {
    login(e) {
      try{
        e.preventDefault();
        set(this, 'isInvalid', !this.get('validations.isValid'));
        if (!get(this, 'isInvalid')) {
          this.get('onSubmit')({
            email: this.email,
            password: this.password
          });
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
    this.setProperties({
      email: this.get('user.email'),
      password: this.get('user.password')
    });
  }
});
