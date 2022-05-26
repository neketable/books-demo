import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions:{
    deleteSpeaker(speaker) {
      this.get('dataService').deleteSpeaker(speaker);
    }
  }
});
