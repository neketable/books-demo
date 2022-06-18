import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  dataService: service('data'),

  model({search}){
    // return{
    //   isLoading: true,
    // };
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let speakers = search ? await this.get("dataService").getSpeakers(search) : await this.get("dataService").getSpeakers();
          resolve(speakers);
        }
        catch(e) {
          reject('Connection failed!')
        }
      }, 1000);
    });
  },

  // actions:{
  //   loading(transition, originRoute){
  //     return false;
  //   }
  // },

  // setupController(controller, model){
  //   super.setupController(...arguments);
  //   controller.loadData();
  // }
});
