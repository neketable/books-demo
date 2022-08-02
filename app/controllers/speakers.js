import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { debounce } from '@ember/runloop';
//import { get } from '@ember/object';

export default Controller.extend({
  errorService: service(),
  session: service(),
  queryParams: ['search'],
  search: '',

  actions:{
    async deleteSpeaker(speaker) {
      try{
        await speaker.destroyRecord();
      }
      catch(e){
        let err = this.get('errorService').createLog(e);
        let errorModel = this.get('store').createRecord('error', err);
        await errorModel.save();
      }
    },
    refreshSpeakers(){
      debounce(() => {
        this.set('search', this.get('searchValue'));
      }, 1000);

    }
  },
});
