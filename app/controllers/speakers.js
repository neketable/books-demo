import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
//import { tracked } from '@glimmer/tracking';

export default Controller.extend({
  queryParams: ['search'],
  search: '',
  // isLoading: tracked,
  dataService: service('data'),

  actions:{
    deleteSpeaker(speaker) {
      this.get('dataService').deleteSpeaker(speaker);
    },
    async refreshSpeakers(){
      console.log(this.search);
      console.log(this.model);
      //this.queryParams = search;
      this.get('dataService').getSpeakers(this.search);
    }
  },
  // async loadData(){
  //   this.isLoading = true;
  //   const data = await this.get("dataService").getSpeakers(this.search);
  //   this.model = data;
  //   this.isLoading = false;
  // }
});
