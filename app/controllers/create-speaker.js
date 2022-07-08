import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Controller.extend({
  currentUser: service(),
  init(){
    this._super(...arguments);
    this.set('speaker', EmberObject.create());
    this.get('speaker').set('firstName', '');
    this.get('speaker').set('lastName', '');
    this.get('speaker').set('patronymic', '');
  },

  actions: {
    async saveSpeaker(speaker){
      let speakerModel = this.get('store').createRecord('speaker', speaker);

      await speakerModel.save();
      this.transitionToRoute('speakers');
    }
  }
});
