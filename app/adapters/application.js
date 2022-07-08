import DS from 'ember-data';
import ENV from 'books-demo/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,

  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },

  buildURL(modelName, id, snapshot, requestType) {
    let url = this._super(...arguments);
    if (modelName === 'meeting' && requestType === 'findAll') {
      url += '?_embed=reviews';
    }
    if (modelName === 'meeting' && requestType === 'findRecord' && id) {
      url += '?_embed=reviews';
    }
    if (modelName === 'meeting' && requestType === 'query') {
      url += '?_embed=reviews';
    }
    if (modelName === 'review' && requestType === 'query') {
      url += '?_expand=meeting';
    }

    // if (modelName === 'review' && requestType === 'findAll') {
    //   url += '?_expand=speaker';
    // }

    return url;
  },
  handleResponse(status, headers, payload) {
    const meta = {
      total: headers['x-total-count'],
    };

    payload.meta = meta;

    return this._super(status, headers, payload);
  }
});
