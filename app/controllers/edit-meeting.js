import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),
  isCreating: true,
  actions: {
    async saveMeeting(meeting){
      try{
        let meetingModel = this.get('model');
        meetingModel.set('dateOfMeeting', meeting.dateOfMeeting);
        await meetingModel.save();
        this.transitionToRoute('meeting');
      }
      catch(e){
        let err = this.get("errorService").createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    }
  }
});
