import Component from '@ember/component';
import { validator, buildValidations } from 'ember-cp-validations';
import { get, set } from '@ember/object';

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
  actions: {
    login(e) {
      e.preventDefault();
      set(this, 'isInvalid', !this.get('validations.isValid'));
      if (!get(this, 'isInvalid')) {
      this.get('onSubmit')({
        email: this.email,
        password: this.password
      });
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
