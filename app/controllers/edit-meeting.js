import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveMeeting(meeting){
      let meetingModel = this.get('model');
      let reviewModel = this.get('model.reviews');
      meetingModel.set('dateOfMeeting', meeting.dateOfMeeting);
      reviewModel.set('dateOfReview', meeting.dateOfMeeting);

      await meetingModel.save();
      await reviewModel.save();
      this.transitionToRoute('meeting');
    }
  }
});
