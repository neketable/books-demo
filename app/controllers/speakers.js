import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  dataService: service('data'),

  actions:{
    async deleteSpeaker(speaker) {
      await speaker.destroyRecord();
    },
    refreshSpeakers(){
        this.set('search', this.get('searchValue'));
    }
  },
});
