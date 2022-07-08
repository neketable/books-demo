import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    }
  },

  dataService: service('data'),

  model({search}){
    const query = {
    };
    if(search){
      query.q = search;
    }
    return this.get('store').query('speaker', query);
  },

  setupController(){
    this._super(...arguments);
  }
});
