import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  currentUser: service(),
  errorService: service(),
  init(){
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.get('speaker').set('firstName', '');
    this.get('speaker').set('lastName', '');
    this.get('speaker').set('patronymic', '');
  },

  actions: {
    async saveSpeaker(speaker){
      try {
        let speakerModel = this.get('store').createRecord('speaker', speaker);
        await speakerModel.save();
        this.transitionToRoute('speakers');
      }
      catch(e){
        let err = this.get("errorService").createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    }
  }
})
