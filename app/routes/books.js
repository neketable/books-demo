import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { Promise } from 'rsvp';
import { later } from '@ember/runloop';

export default Route.extend({

  dataService: service('data'),

  model({search}){
    // return{
    //   isLoading: true,
    // };
    return new Promise((resolve, reject) => {
      later(async () => {
        try {
          let speakers = search ? await this.get("dataService").getBooks(search) : await this.get("dataService").getBooks();
          console.log(search);
          resolve(speakers);
        }
        catch(e) {
          reject('Connection failed!')
        }
      }, 1000);
    });
  },
});
