import Service from '@ember/service';
import ENV from 'books-demo/config/environment';
import { A } from '@ember/array';

export default Service.extend({
  init(){
    this._super(...arguments);
    this.set('speakers', A());
  },

  async getSpeakers(){
    let response = await fetch(`${ENV.backendURL}/speakers`);
    let speakers = await response.json();
    this.get('speakers').clear();
    this.get('speakers').pushObjects(speakers);
    return this.get('speakers');
  },

  getSpeaker(id){
    return fetch(`${ENV.backendURL}/speakers/${id}`).then((response) => response.json());
  },

  deleteSpeaker(speaker){
    this.get('speakers').removeObject(speaker);
    return fetch(`${ENV.backendURL}/speakers/${speaker.id}`, {method: 'DELETE'});
  },

  createSpeaker(speaker) {
    return fetch(`${ENV.backendURL}/speakers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(speaker)
    });
  },
});
