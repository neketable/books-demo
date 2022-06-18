import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    },
    searchTags:{
      refreshModel: true,
    }
  },

  dataService: service('data'),

  model({search, searchTags}){
    // return{
    //   isLoading: true,
    // };
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let speakers;
          if(search){
            speakers = await this.get("dataService").getBooks(search, searchTags);
          }
          else if(searchTags){
            speakers = await this.get("dataService").getBooks(search, searchTags);
          }
          else speakers = await this.get("dataService").getBooks();
          resolve(speakers);
        }
        catch(e) {
          reject('Connection failed!')
        }
      }, 1000);
    });
  },
});
