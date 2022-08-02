import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  errorService: service(),
  actions: {
    async saveReview(review){
      try{
        let reviewModel = this.get('model');
        reviewModel.set('markBook', review.markBook);
        reviewModel.set('presentationURL', review.presentationURL);
        reviewModel.set('videoURL', review.videoURL);
        reviewModel.set('report', review.report);
        reviewModel.set('speaker', review.speaker);
        reviewModel.set('book', review.book);
        reviewModel.set('meeting', review.meeting);
        reviewModel.set('dateOfReview', review.dateOfReview);
        await reviewModel.save();
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
