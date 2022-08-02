import Controller from '@ember/controller';
import EmberObject from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),
  init(){
    this._super(...arguments);
    this.set('review', EmberObject.create());
    //this.get('review').set('dateOfReview', '');
    this.get('review').set('markBook', '');
    this.get('review').set('presentationURL', '');
    this.get('review').set('videoURL', '');
    this.get('review').set('report', '');
  },

  actions: {
    async saveReview(review){
      try{
        let reviewModel = this.get('store').createRecord('review', review);
        reviewModel.set('dateOfReview', review.meeting.dateOfMeeting);
        await reviewModel.save();
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
