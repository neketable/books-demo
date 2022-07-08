import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e) {
      e.preventDefault();
      this.onsubmit({
        id: this.get('idMeeting'),
        dateOfMeeting: this.get('dateOfMeeting'),
        reviews: this.get('reviews'),
      })
    },
    async deleteReview(review) {
      await review.destroyRecord();
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);

    this.setProperties({
      idMeeting: this.get('meeting.id') ? this.get('meeting.id') : undefined,
      dateOfMeeting: this.get('meeting.dateOfMeeting'),
      reviews: this.get('meeting.reviews')
    })
  }
});
