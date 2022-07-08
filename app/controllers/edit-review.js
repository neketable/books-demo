import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async saveReview(review){
      let reviewModel = this.get('model');
      reviewModel.set('markBook', review.firstName);
      reviewModel.set('presentationURL', review.lastName);
      reviewModel.set('videoURL', review.patronymic);
      reviewModel.set('report', review.patronymic);

      await reviewModel.save();
      this.transitionToRoute('review');
    }
  }
});
