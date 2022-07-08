import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('idReview'),
        dateOfReview: this.get('dateOfReview'),
        markBook: this.get('markBook'),
        presentationURL: this.get('presentationURL'),
        videoURL: this.get('videoURL'),
        report: this.get('report'),
        book: this.get('book'),
        speaker: this.get('speaker'),
        meeting: this.get('meeting'),
      })
    },
    async deleteReview(review) {
      await review.destroyRecord();
    },
    searchSpeaker(query) {
      return this.get('store').query('speaker', { q: query })
    },
    searchBook(query) {
      return this.get('store').query('book', { q: query })
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idReview: this.get('review.id') ? this.get('review.id') : undefined,
      dateOfReview: this.get('review.dateOfReview'),
      markBook: this.get('review.markBook'),
      presentationURL: this.get('review.presentationURL'),
      videoURL: this.get('review.videoURL'),
      report: this.get('review.report'),
      book: this.get('review.book'),
      speaker: this.get('review.speaker'),
      meeting: this.get('review.meeting'),
    })
  }
});
