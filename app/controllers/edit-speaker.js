import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),

  actions: {
    async saveSpeaker(speaker){
      try{
        let speakerModel = this.get('model');
        speakerModel.set('firstName', speaker.firstName);
        speakerModel.set('lastName', speaker.lastName);
        speakerModel.set('patronymic', speaker.patronymic);
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
});

