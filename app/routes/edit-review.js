import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  errorService: service(),
  model({ id }) {
    try{
      return this.get('store').findRecord('review', id);
    }
    catch(e){
      let err = this.get('errorService').createLog(e);
      let errorModel = this.get('store').createRecord('error', err);
      errorModel.save();
    }
  }
});
