import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),
  actions: {
    async saveUser(user) {
      let newUser;
      try {
        newUser = this.get('store').createRecord('user', user);
        await newUser.save();

        this.transitionToRoute('index');
      }
      catch(e) {
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
        e.user = newUser;
        this.send('error', e);
      }
    },

    error(error, transition) {
      this.set('errors', error.user.errors);
      return false;
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});
