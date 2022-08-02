import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';

export const PER_PAGE = 2;

export default Controller.extend({
  session: service(),
  errorService: service(),
  queryParams: ['search', 'page', 'speaker', 'meeting'],
  search: '',
  page: 1,
  speaker: '',

  pages: computed('model.meetings.meta.total', function() {
    const total = Number(this.get('model.meetings.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  }),

  selectedSpeaker: computed('speaker', function() {
    const speaker = this.get('speaker');

    return speaker ? this.get('model.speakers').findBy('id', speaker) : null;
  }),
  selectedMeeting: computed('meeting', function() {
    const meeting = this.get('meeting');

    return meeting ? this.get('model.meetings').findBy('id', meeting) : null;
  }),
  actions:{
    async deleteMeeting(meeting) {
      try{
        await meeting.destroyRecord();
      }
      catch(e){
        let err = this.get("errorService").createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    },
    changeSpeaker(speaker) {
      this.set('speaker', speaker ? speaker.get('id') : '');
    },
    changeMeeting(meeting) {
      this.set('meeting', meeting ? meeting.get('id') : '');
      // debounce(() => {
      //   this.set('search', this.get('searchValue'));
      // }, 1000);
    }
  },
});
