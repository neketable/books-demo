import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),
  init(){
    this._super(...arguments);
    this.set('meeting', EmberObject.create());
    this.get('meeting').set('dateOfMeeting', '');
  },

  actions: {
    async saveMeeting(meeting){
      try{
        let meetingModel = this.get('store').createRecord('meeting', meeting);
        await meetingModel.save();
        this.transitionToRoute('meeting');
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    }
  }
});
