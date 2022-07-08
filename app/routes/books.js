import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

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
    const query = {
    };
    if(search){
      query.q = search;
    }
    if(searchTags){
      query.tags_like = searchTags;
    }
    return this.get('store').query('book', query);
  },
  setupController(){
    this._super(...arguments);
  }
});
