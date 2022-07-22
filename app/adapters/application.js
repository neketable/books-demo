import DS from 'ember-data';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from 'books-demo/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.backendURL,
  session: service(),

  headers: computed(function() {
    let resultHeaders = {
      'Content-Type': 'application/json'
    };

    if (this.get('session.isAuthenticated')) {
      resultHeaders['Authorization'] = `Bearer ${this.session.data.authenticated.token}`;
    }

    return resultHeaders;
  }).volatile(),

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
