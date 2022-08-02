import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  errorService: service(),

  actions: {
    async login(user) {
      try {
        await this.get('session').authenticate('authenticator:jwt', {
          email: user.email,
          password: user.password
        });
      }
      catch(e) {
        let err = this.get("errorService").createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
        this.send('error', e);
      }
    },

    error(error, transition) {
      if (error instanceof Error) {
        return true;
      }

      this.set('errors', error.json.errors);
      return false;
    }
  },

  resetErrors() {
    this.set('errors', {});
  }
});
