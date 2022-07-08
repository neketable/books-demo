import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.set('meeting', EmberObject.create());
    this.get('meeting').set('dateOfMeeting', '');
  },

  actions: {
    async saveMeeting(meeting){
      let meetingModel = this.get('store').createRecord('meeting', meeting);

      await meetingModel.save();
      this.transitionToRoute('meeting');
    }
  }
});
