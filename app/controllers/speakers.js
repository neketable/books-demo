import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';

export default Controller.extend({
  session: service(),
  queryParams: ['search'],
  search: '',

  actions:{
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
    },
    refreshSpeakers(){
      debounce(() => {
        this.set('search', this.get('searchValue'));
      }, 1000);

    }
  },
});
