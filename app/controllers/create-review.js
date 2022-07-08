import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  init(){
    this._super(...arguments);
    this.set('review', EmberObject.create());
    this.get('review').set('markBook', '');
    this.get('review').set('presentationURL', '');
    this.get('review').set('videoURL', '');
    this.get('review').set('report', '');
    this.get('review').set('meeting', 'ss');
  },

  actions: {
    async saveReview(review){
      let reviewModel = this.get('store').createRecord('review', review);

      await reviewModel.save();
      this.transitionToRoute('review');
    }
  }
});
