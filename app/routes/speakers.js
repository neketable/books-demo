import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true,
    }
  },

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
