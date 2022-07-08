import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  queryParams: ['search'],
  search: '',

  actions:{
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
    },
    refreshSpeakers(){
        this.set('search', this.get('searchValue'));
    }
  },
});
